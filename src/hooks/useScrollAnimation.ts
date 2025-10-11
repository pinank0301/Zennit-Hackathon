import { useEffect, useRef, useState } from 'react';

export type AnimationType = 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate' | 'bounce' | 'flip' | 'glow';

export const useScrollAnimation = (
  threshold = 0.1, 
  animationType: AnimationType = 'fadeIn',
  delay = 0,
  duration = 1000
) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger animation slightly before element is fully visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, delay]);

  // Apply animation styles based on type
  const getAnimationStyles = () => {
    const baseTransition = `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
    
    if (!isVisible) {
      switch (animationType) {
        case 'fadeIn':
          return { opacity: 0, transition: baseTransition };
        case 'slideUp':
          return { opacity: 0, transform: 'translateY(50px)', transition: baseTransition };
        case 'slideDown':
          return { opacity: 0, transform: 'translateY(-50px)', transition: baseTransition };
        case 'slideLeft':
          return { opacity: 0, transform: 'translateX(50px)', transition: baseTransition };
        case 'slideRight':
          return { opacity: 0, transform: 'translateX(-50px)', transition: baseTransition };
        case 'scale':
          return { opacity: 0, transform: 'scale(0.8)', transition: baseTransition };
        case 'rotate':
          return { opacity: 0, transform: 'rotate(10deg) scale(0.9)', transition: baseTransition };
        case 'bounce':
          return { opacity: 0, transform: 'translateY(30px) scale(0.95)', transition: baseTransition };
        case 'flip':
          return { opacity: 0, transform: 'rotateY(90deg)', transition: baseTransition };
        case 'glow':
          return { opacity: 0, filter: 'blur(5px) brightness(0.5)', transition: baseTransition };
        default:
          return { opacity: 0, transition: baseTransition };
      }
    }

    // Visible state - return to normal
    return { 
      opacity: 1, 
      transform: 'translateY(0) translateX(0) scale(1) rotate(0deg) rotateY(0deg)',
      filter: 'blur(0px) brightness(1)',
      transition: baseTransition 
    };
  };

  return [ref, isVisible, getAnimationStyles] as const;
};

export const useCountAnimation = (
  end: number, 
  duration = 2000, 
  start = 0,
  easing: 'linear' | 'easeOut' | 'easeInOut' | 'bounce' = 'easeOut'
) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      let easedProgress: number;
      switch (easing) {
        case 'linear':
          easedProgress = progress;
          break;
        case 'easeOut':
          easedProgress = 1 - Math.pow(1 - progress, 3);
          break;
        case 'easeInOut':
          easedProgress = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          break;
        case 'bounce':
          easedProgress = progress < 0.5 
            ? 4 * progress * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          break;
        default:
          easedProgress = progress;
      }
      
      const currentCount = Math.floor(easedProgress * (end - start) + start);
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration, start, easing]);

  return [ref, count, isAnimating] as const;
};

// New hook for staggered animations
export const useStaggeredAnimation = (
  itemCount: number,
  staggerDelay = 100,
  animationType: AnimationType = 'slideUp'
) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate items with stagger
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[i] = true;
                return newState;
              });
            }, i * staggerDelay);
          }
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [itemCount, staggerDelay]);

  const getItemAnimationStyles = (index: number) => {
    const isVisible = visibleItems[index];
    const baseTransition = `all 800ms cubic-bezier(0.4, 0, 0.2, 1)`;
    
    if (!isVisible) {
      switch (animationType) {
        case 'slideUp':
          return { opacity: 0, transform: 'translateY(30px)', transition: baseTransition };
        case 'slideDown':
          return { opacity: 0, transform: 'translateY(-30px)', transition: baseTransition };
        case 'slideLeft':
          return { opacity: 0, transform: 'translateX(30px)', transition: baseTransition };
        case 'slideRight':
          return { opacity: 0, transform: 'translateX(-30px)', transition: baseTransition };
        case 'scale':
          return { opacity: 0, transform: 'scale(0.9)', transition: baseTransition };
        case 'bounce':
          return { opacity: 0, transform: 'translateY(20px) scale(0.95)', transition: baseTransition };
        default:
          return { opacity: 0, transform: 'translateY(20px)', transition: baseTransition };
      }
    }

    return { 
      opacity: 1, 
      transform: 'translateY(0) translateX(0) scale(1)',
      transition: baseTransition 
    };
  };

  return [ref, getItemAnimationStyles] as const;
};
