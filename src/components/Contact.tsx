import { Button } from "./ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Calendar,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import { useScrollAnimation, useStaggeredAnimation } from "../hooks/useScrollAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    budget: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const [ref, isVisible, getHeaderStyles] = useScrollAnimation(0.1, 'fadeIn', 0, 1000);
  const [formRef, , getFormStyles] = useScrollAnimation(0.1, 'slideLeft', 200, 1200);
  const [infoRef, , getInfoStyles] = useScrollAnimation(0.1, 'slideRight', 400, 1200);
  const [footerRef, , getFooterStyles] = useScrollAnimation(0.1, 'slideUp', 600, 1000);

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      color: "text-blue-500"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@estatepro.in", "support@estatepro.in"],
      color: "text-green-500"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office",
      details: ["123 MG Road, Bandra West", "Mumbai, Maharashtra 400050"],
      color: "text-red-500"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      details: ["Mon-Fri: 9AM-6PM", "Sat: 10AM-4PM"],
      color: "text-purple-500"
    }
  ];

  const quickActions = [
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Live Chat",
      description: "Get instant answers to your questions",
      action: "Start Chat"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Schedule Visit",
      description: "Book a property viewing appointment",
      action: "Book Now"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Call Now",
      description: "Speak directly with our experts",
      action: "Call Us"
    }
  ];
  
  // Staggered animation for contact info cards
  const [contactInfoRef, getContactInfoStyles] = useStaggeredAnimation(contactInfo.length, 150, 'slideUp');
  const [quickActionsRef, getQuickActionStyles] = useStaggeredAnimation(quickActions.length, 200, 'scale');

  return (
    <section 
      id="contact" 
      ref={ref}
      className={`py-20 px-5 lg:px-10 bg-gradient-to-b from-white to-gray-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={ref} style={getHeaderStyles()} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to find your dream property or sell your current one? Our expert team is here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div ref={formRef} style={getFormStyles()} className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Type
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select property type</option>
                      <option value="apartment">Apartment</option>
                      <option value="house">House</option>
                      <option value="condo">Condo</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1cr">Under ₹1 Crore</option>
                    <option value="1cr-2cr">₹1 Crore - ₹2 Crore</option>
                    <option value="2cr-5cr">₹2 Crore - ₹5 Crore</option>
                    <option value="5cr-10cr">₹5 Crore - ₹10 Crore</option>
                    <option value="10cr-plus">₹10 Crore+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your property needs..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div ref={infoRef} style={getInfoStyles()} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div ref={contactInfoRef} className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    style={getContactInfoStyles(index)}
                    className="flex items-start space-x-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`${info.color} bg-opacity-10 p-3 rounded-xl`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div ref={quickActionsRef} className="space-y-4">
                {quickActions.map((action, index) => (
                  <div
                    key={index}
                    style={getQuickActionStyles(index)}
                    className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-orange-100 text-orange-500 p-3 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                        {action.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{action.title}</h4>
                        <p className="text-gray-600 text-sm">{action.description}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300"
                    >
                      {action.action}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer ref={footerRef} style={getFooterStyles()} className="bg-gray-900 text-white rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/logo.svg" 
                  alt="EstatePro Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Your trusted partner in finding the perfect property. We provide exceptional service and personalized solutions for all your real estate needs.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 cursor-pointer">
                  <span className="text-sm font-bold">ig</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('home');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('properties');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                  >
                    Properties
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('services');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('testimonials');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                  >
                    Testimonials
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>+91 98765 43210</p>
                <p>info@estatepro.in</p>
                <p>123 MG Road, Bandra West</p>
                <p>Mumbai, Maharashtra 400050</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 EstatePro. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
