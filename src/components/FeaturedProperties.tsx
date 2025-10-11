import { Button } from "./ui/button";
import { MapPin, Bed, Bath, Square, Heart, Eye } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "../hooks/useScrollAnimation";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: "https://s3.amazonaws.com/ideas-after/11e05ab5-3b36-4a8f-b0d3-c68eefb34c52.jpeg",
      price: "₹15 Crores",
      title: "Modern Luxury Villa",
      location: "Bandra West, Mumbai",
      beds: 5,
      baths: 4,
      sqft: "3,200",
      type: "For Sale",
      featured: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
      price: "₹3.5 Lakhs/month",
      title: "Premium Apartment",
      location: "Gurgaon, Haryana",
      beds: 3,
      baths: 2,
      sqft: "1,800",
      type: "For Rent",
      featured: false
    },
    {
      id: 3,
      image: "https://hips.hearstapps.com/hmg-prod/images/gray-living-room-3-1572014242.jpg?crop=1.00xw:0.794xh;0,0.182xh",
      price: "₹1.8 Crores",
      title: "Cozy Family Home",
      location: "Whitefield, Bangalore",
      beds: 4,
      baths: 3,
      sqft: "2,500",
      type: "For Sale",
      featured: true
    },
    {
      id: 4,
      image: "https://evolveartisanal.com/wp-content/uploads/2022/03/4.-Layer-Shades-Of-Grey-_-Evolve-India.jpg",
      price: "₹2.5 Lakhs/month",
      title: "Sea-facing Condo",
      location: "Goa, India",
      beds: 2,
      baths: 2,
      sqft: "1,200",
      type: "For Rent",
      featured: false
    }
  ];

  const [ref, isVisible, getHeaderStyles] = useScrollAnimation(0.1, 'fadeIn', 0, 1000);
  const [propertiesRef, getPropertyStyles] = useStaggeredAnimation(properties.length, 200, 'scale');

  return (
    <section 
      id="properties" 
      ref={ref}
      className={`py-20 px-5 lg:px-10 bg-gradient-to-b from-white to-gray-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={ref} style={getHeaderStyles()} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="text-primary">Properties</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties that offer the perfect blend of luxury and comfort.
          </p>
        </div>

        {/* Properties Grid */}
        <div ref={propertiesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {properties.map((property, index) => (
            <div
              key={property.id}
              style={getPropertyStyles(index)}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Property Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-background/90 hover:bg-background text-foreground rounded-full p-2 h-10 w-10"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-background/90 hover:bg-background text-foreground rounded-full p-2 h-10 w-10"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    property.type === "For Sale" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-blue-100 text-blue-700"
                  }`}>
                    {property.type}
                  </span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {property.title}
                  </h3>
                  <span className="text-2xl font-bold text-primary">
                    {property.price}
                  </span>
                </div>

                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    <span>{property.beds} beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{property.baths} baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
