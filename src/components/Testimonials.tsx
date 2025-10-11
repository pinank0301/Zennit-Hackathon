import { Button } from "./ui/button";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation, useCountAnimation, useStaggeredAnimation } from "../hooks/useScrollAnimation";

const Testimonials = () => {
  const [ref, isVisible, getHeaderStyles] = useScrollAnimation(0.1, 'fadeIn', 0, 1000);
  const [testimonialRef, , getTestimonialStyles] = useScrollAnimation(0.1, 'scale', 300, 1200);
  const [statsRef, , getStatsStyles] = useScrollAnimation(0.1, 'bounce', 500, 1000);
  
  // Counting animations for stats with enhanced easing
  const [propertiesSoldRef, propertiesSold] = useCountAnimation(500, 2500, 0, 'bounce');
  const [happyClientsRef, happyClients] = useCountAnimation(1000, 3000, 0, 'easeInOut');
  const [yearsExperienceRef, yearsExperience] = useCountAnimation(15, 2000, 0, 'easeOut');
  const [clientSatisfactionRef, clientSatisfaction] = useCountAnimation(98, 2200, 0, 'bounce');
  
  // Staggered animation for testimonial cards
  const [testimonialsRef, getTestimonialCardStyles] = useStaggeredAnimation(3, 200, 'slideUp');
  
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Home Buyer",
      location: "Mumbai, Maharashtra",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
      text: "The team made our home buying process incredibly smooth. Their attention to detail and market knowledge helped us find the perfect home within our budget. Highly recommended!",
      property: "Modern Luxury Villa - ₹15 Crores"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Property Investor",
      location: "Delhi, NCR",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "Outstanding service! They helped me build a profitable real estate portfolio with their expert investment advice. The returns have exceeded my expectations.",
      property: "Gurgaon Penthouse - Investment Property"
    },
    {
      id: 3,
      name: "Anita Reddy",
      role: "First-time Buyer",
      location: "Bangalore, Karnataka",
      image: "https://randomuser.me/api/portraits/women/71.jpg",
      rating: 4,
      text: "As a first-time buyer, I was nervous about the process. The team guided me through every step and made it stress-free. I couldn't be happier with my new home!",
      property: "Cozy Family Home - ₹1.8 Crores"
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Property Seller",
      location: "Pune, Maharashtra",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      rating: 3,
      text: "They sold my property for 15% above the market price! Their marketing strategy and negotiation skills are exceptional. Will definitely use their services again.",
      property: "Hillside Villa - Sold Above Market"
    },
    {
      id: 5,
      name: "Sunita Patel",
      role: "Rental Property Owner",
      location: "Ahmedabad, Gujarat",
      image: "https://randomuser.me/api/portraits/women/85.jpg",
      rating: 5,
      text: "Their property management services are top-notch. They handle everything professionally and my rental income has increased significantly since working with them.",
      property: "Multiple Rental Properties - Managed"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section 
      id="testimonials" 
      ref={ref}
      className={`py-20 px-5 lg:px-10 bg-gradient-to-b from-gray-50 to-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={ref} style={getHeaderStyles()} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What Our <span className="text-orange-500">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with us.
          </p>
        </div>

        {/* Main Testimonial */}
        <div 
          ref={testimonialRef}
          style={getTestimonialStyles()}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-16 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-50 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-orange-100"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{current.name}</h3>
                  <p className="text-gray-600">{current.role} • {current.location}</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            <div className="mb-8">
              <Quote className="h-12 w-12 text-orange-500 mb-4" />
              <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic">
                "{current.text}"
              </blockquote>
            </div>

            <div className="bg-orange-50 rounded-2xl p-4 border-l-4 border-orange-500">
              <p className="text-gray-700 font-medium">
                <span className="text-orange-600">Property:</span> {current.property}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-16">
          <Button
            onClick={prevTestimonial}
            variant="outline"
            size="lg"
            className="rounded-full p-3 hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-orange-500 scale-125' 
                    : 'bg-gray-300 hover:bg-orange-300'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextTestimonial}
            variant="outline"
            size="lg"
            className="rounded-full p-3 hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Client Logos/Stats */}
        <div 
          ref={statsRef}
          style={getStatsStyles()}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          <div ref={propertiesSoldRef} className="text-center group">
            <div className="text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
              {propertiesSold}+
            </div>
            <div className="text-gray-600">Properties Sold</div>
          </div>
          <div ref={happyClientsRef} className="text-center group">
            <div className="text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
              {happyClients}+
            </div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div ref={yearsExperienceRef} className="text-center group">
            <div className="text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
              {yearsExperience}+
            </div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div ref={clientSatisfactionRef} className="text-center group">
            <div className="text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
              {clientSatisfaction}%
            </div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              style={getTestimonialCardStyles(index)}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
