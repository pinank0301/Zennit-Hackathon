import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px from the top
      // and hide when they're near the hero section (top 100px)
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById('home');
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      
      // Show button if scrolled past 300px and not in hero section
      setIsVisible(scrollPosition > 300 && scrollPosition > heroHeight - 200);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Back to top"
    >
      <ArrowUp className="h-6 w-6 group-hover:animate-bounce" />
    </button>
  );
};

export default BackToTop;
