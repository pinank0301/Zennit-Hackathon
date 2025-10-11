import { Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "Properties", id: "properties" },
    { name: "Services", id: "services" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  const services = [
    { name: "Property Buying" },
    { name: "Property Selling" },
    { name: "Property Renting" },
    { name: "Investment Advisory" },
    { name: "Property Management" },
  ];

  const locations = [
    { name: "Mumbai" },
    { name: "Delhi" },
    { name: "Bangalore" },
    { name: "Gurgaon" },
    { name: "Pune" },
    { name: "Chennai" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden mt-10">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full opacity-10 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400 rounded-full opacity-10 -ml-24 -mb-24"></div>

      <div className="relative z-10">
        {/* Headline */}
        <div className="border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-6 py-12 text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
              Find Your{" "}
              <span className="text-orange-500">Dream Property</span> with
              Us!
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mb-8">
              We provide exceptional real estate services and personalized solutions 
              to help you find, buy, sell, or rent properties across India's major cities.
            </p>
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/logo.svg" 
                  alt="EstatePro Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <div className="space-y-3 mb-6 text-sm text-gray-300">
                <div className="flex items-center">
                  <span className="mr-3">📍</span>
                  123 MG Road, Bandra West, Mumbai - 400050
                </div>
                <div className="flex items-center">
                  <span className="mr-3">📞</span>
                  +91 98765 43210
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✉️</span>
                  info@estatepro.in
                </div>
                <div className="flex items-center">
                  <span className="mr-3">🕒</span>
                  Mon-Fri: 9AM-6PM, Sat: 10AM-4PM
                </div>
              </div>
               {/* Social */}
               <div className="flex space-x-4">
                 <a
                   href="#linkedin"
                   className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 group"
                   aria-label="LinkedIn"
                 >
                   <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white" />
                 </a>
                 <a
                   href="#facebook"
                   className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 group"
                   aria-label="Facebook"
                 >
                   <Facebook className="h-5 w-5 text-gray-400 group-hover:text-white" />
                 </a>
                 <a
                   href="#instagram"
                   className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 group"
                   aria-label="Instagram"
                 >
                   <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white" />
                 </a>
               </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-left w-full text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span>{link.name}</span>
                      <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                        →
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button className="text-left w-full text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center group">
                      <span>{service.name}</span>
                      <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                        →
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Our Locations</h3>
              <ul className="space-y-3">
                {locations.map((location, index) => (
                  <li key={index}>
                    <button className="text-left w-full text-gray-300 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center group">
                      <span>{location.name}</span>
                      <span className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                        →
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 EstatePro. All rights reserved. | Privacy Policy | Terms of Service
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#privacy" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#cookies" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
