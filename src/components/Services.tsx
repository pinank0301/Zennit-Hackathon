import { Button } from "./ui/button";
import { 
  Home, 
  Search, 
  Calculator, 
  Shield, 
  Users, 
  FileText,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { useScrollAnimation, useCountAnimation, useStaggeredAnimation } from "../hooks/useScrollAnimation";

const Services = () => {
  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Property Sales",
      description: "Expert guidance through the entire home buying process with our experienced team.",
      features: ["Market Analysis", "Negotiation", "Legal Support", "Closing Assistance"]
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Property Search",
      description: "Find your dream home with our advanced search tools and personalized recommendations.",
      features: ["Custom Search", "Virtual Tours", "Property Matching", "Location Analysis"]
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Property Valuation",
      description: "Get accurate property valuations with our comprehensive market analysis and expertise.",
      features: ["Market Research", "Comparative Analysis", "Investment Advice", "Price Optimization"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Property Management",
      description: "Complete property management services for landlords and property investors.",
      features: ["Tenant Screening", "Maintenance", "Rent Collection", "Legal Compliance"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Investment Consulting",
      description: "Strategic investment advice to help you build a profitable real estate portfolio.",
      features: ["Portfolio Analysis", "Market Trends", "ROI Optimization", "Risk Assessment"]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Legal Support",
      description: "Comprehensive legal assistance for all your real estate transactions and needs.",
      features: ["Contract Review", "Documentation", "Compliance", "Dispute Resolution"]
    }
  ];

  const [ref, isVisible, getHeaderStyles] = useScrollAnimation(0.1, 'fadeIn', 0, 1000);
  const [statsRef, , getStatsStyles] = useScrollAnimation(0.1, 'scale', 200, 1200);
  
  // Counting animations for stats with enhanced easing
  const [propertiesSoldRef, propertiesSold] = useCountAnimation(500, 2500, 0, 'bounce');
  const [happyClientsRef, happyClients] = useCountAnimation(1000, 3000, 0, 'easeInOut');
  const [yearsExperienceRef, yearsExperience] = useCountAnimation(15, 2000, 0, 'easeOut');
  const [clientSatisfactionRef, clientSatisfaction] = useCountAnimation(98, 2200, 0, 'bounce');
  
  // Staggered animation for service cards
  const [servicesRef, getServiceStyles] = useStaggeredAnimation(services.length, 150, 'slideUp');

  const stats = [
    { number: propertiesSold, label: "Properties Sold", ref: propertiesSoldRef },
    { number: happyClients, label: "Happy Clients", ref: happyClientsRef },
    { number: yearsExperience, label: "Years Experience", ref: yearsExperienceRef },
    { number: clientSatisfaction, label: "Client Satisfaction", ref: clientSatisfactionRef }
  ];

  return (
    <section 
      id="services" 
      ref={ref}
      className={`py-20 px-5 lg:px-10 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={ref} style={getHeaderStyles()} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive real estate services to help you buy, sell, and manage properties with confidence and expertise.
          </p>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          style={getStatsStyles()}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={stat.ref}
              className="text-center group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}{stat.label === "Client Satisfaction" ? "%" : "+"}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              style={getServiceStyles(index)}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Service Icon */}
              <div className="bg-orange-100 text-orange-500 rounded-2xl p-4 w-fit mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              {/* Service Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
