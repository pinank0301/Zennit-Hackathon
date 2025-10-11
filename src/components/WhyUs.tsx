import {
  Layers,
  Sparkles,
  Bookmark,
  Star,
  Command,
  Cuboid,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function WhyUs() {
  const [ref, isVisible, getHeaderStyles] = useScrollAnimation(0.1, 'fadeIn', 0, 1000);
  const [gridRef, , getGridStyles] = useScrollAnimation(0.1, 'slideUp', 200, 1200);
  const features = [
    {
      title: "Personalized Search",
      desc: "At EstatePro, we understand that every client has unique needs and preferences. Our AI-powered search engine learns your requirements to show you the most relevant properties.",
      icon: <Command className="w-16 h-16 text-orange-500" strokeWidth={1.25} />,
    },
    {
      title: "Premium Properties",
      desc: "Explore our curated collection of high-quality properties across Mumbai, Delhi, Bangalore, and other major cities. We feature only verified and premium listings.",
      icon: <Sparkles className="w-16 h-16 text-orange-500" strokeWidth={1.25} />,
    },
    {
      title: "Expert AI Guidance",
      desc: "Get intelligent recommendations and market insights with our advanced AI technology. Navigate the complexities of real estate with confidence.",
      icon: <Layers className="w-16 h-16 text-orange-500" strokeWidth={1.25} />,
    },
    {
      title: "Seamless Process",
      desc: "Enjoy a smooth property journey with our dedicated team handling everything from search to legal documentation. We make real estate simple.",
      icon: <Star className="w-16 h-16 text-orange-500" strokeWidth={1.25} />,
    },
    {
      title: "Trusted Expertise",
      desc: "Leverage our years of experience in the Indian real estate market to make confident property decisions. We know the market inside out.",
      icon: <Bookmark className="w-16 h-16 text-orange-500" strokeWidth={1.25} />,
    },
    {
      title: "Tailored Solutions",
      desc: "Experience services specifically designed to meet your lifestyle and investment goals. From first-time buyers to seasoned investors, we've got you covered.",
      icon: <Cuboid className="w-16 h-16 text-orange-500" strokeWidth={1.25} />,
    },
  ];

  return (
    <section id="why-us" className="py-20 px-4 md:px-20 bg-orange-50">
      <div className="max-w-7xl mx-auto text-center">
        <div ref={ref} style={getHeaderStyles()} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-xl uppercase text-gray-500 font-medium mb-2">
            Why Choose Us
          </h3>
          <h2 className="text-4xl font-semibold tracking-tighter text-gray-900 mb-12">
            Why we stand out in finding your <span className="text-orange-500">dream</span> property
          </h2>
        </div>
        <div ref={gridRef} style={getGridStyles()} className="grid grid-cols-2 md:grid-cols-3 border-t-2 border-l-2 border-orange-300">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-r-2 border-b-2 border-orange-300 p-6 md:p-8 flex flex-col items-center text-center bg-white hover:bg-orange-50 transition-colors duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-lg md:text-2xl tracking-tighter font-semibold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-xs hidden md:block md:text-sm text-gray-700 font-medium leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
