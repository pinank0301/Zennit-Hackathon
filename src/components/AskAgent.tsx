import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Home, DollarSign, MapPin, Phone } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AskAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your AI Estate Agent. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedQuestions, setSelectedQuestions] = useState<number[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Hardcoded responses for common real estate queries
  const getAgentResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Property buying queries
    if (message.includes('buy') || message.includes('purchase') || message.includes('property for sale')) {
      return "Great! I can help you find the perfect property. We have a wide selection of homes, apartments, and commercial spaces across Mumbai, Delhi, Bangalore, and other major cities. What's your budget range and preferred location? I can also help you with home loans and legal documentation.";
    }
    
    // Property selling queries
    if (message.includes('sell') || message.includes('sell my property') || message.includes('property valuation')) {
      return "I'd be happy to help you sell your property! We offer free property valuation, professional photography, and marketing across multiple platforms. Our experienced agents will handle negotiations and legal processes. What type of property are you looking to sell?";
    }
    
    // Renting queries
    if (message.includes('rent') || message.includes('rental') || message.includes('lease')) {
      return "Looking for rental properties? We have apartments, houses, and commercial spaces available for rent in prime locations. We can help with tenant verification, lease agreements, and property management. What's your rental budget and preferred area?";
    }
    
    // Investment queries
    if (message.includes('investment') || message.includes('invest') || message.includes('roi')) {
      return "Real estate is an excellent investment choice! I can guide you on high-return properties, emerging areas, and investment strategies. We have properties with great rental yields and capital appreciation potential. What's your investment budget and goals?";
    }
    
    // Location queries
    if (message.includes('mumbai') || message.includes('delhi') || message.includes('bangalore') || message.includes('gurgaon') || message.includes('pune') || message.includes('chennai')) {
      return "Excellent choice! We have extensive listings in all major cities. Each location offers unique advantages - Mumbai for commercial opportunities, Delhi for government sector proximity, Bangalore for IT hub benefits, and more. What type of property are you interested in this location?";
    }
    
    // Budget queries
    if (message.includes('budget') || message.includes('price') || message.includes('cost') || message.includes('afford')) {
      return "Budget planning is crucial for property decisions! We have properties across all price ranges - from affordable apartments under ₹50 lakhs to luxury villas above ₹10 crores. We also help with home loan assistance and EMI calculations. What's your comfortable budget range?";
    }
    
    // Property types
    if (message.includes('apartment') || message.includes('flat') || message.includes('house') || message.includes('villa') || message.includes('commercial')) {
      return "We have a diverse range of properties! Apartments for families, independent houses for privacy, luxury villas for premium living, and commercial spaces for business. Each type offers different benefits. What are your specific requirements - bedrooms, amenities, or business needs?";
    }
    
    // Amenities queries
    if (message.includes('amenities') || message.includes('facilities') || message.includes('parking') || message.includes('gym') || message.includes('pool')) {
      return "Modern amenities make life comfortable! Our properties offer parking, security, gym, swimming pool, gardens, clubhouse, and more. Many also have schools, hospitals, and shopping centers nearby. What amenities are most important to you?";
    }
    
    // Legal queries
    if (message.includes('legal') || message.includes('document') || message.includes('registration') || message.includes('paperwork')) {
      return "Legal aspects are crucial in real estate! We provide complete assistance with property registration, title verification, loan documentation, and legal clearances. Our legal team ensures all paperwork is in order. We can connect you with trusted lawyers and registration agents.";
    }
    
    // Loan queries
    if (message.includes('loan') || message.includes('emi') || message.includes('finance') || message.includes('bank')) {
      return "Home loans make property ownership accessible! We partner with major banks and NBFCs to offer competitive interest rates. We help with loan applications, documentation, and EMI calculations. We can also assist with pre-approval to strengthen your buying position.";
    }
    
    // Contact queries
    if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('visit') || message.includes('meeting')) {
      return "I'm here to help! You can reach us at +91 98765 43210 or email info@estatepro.in. Our office is at 123 MG Road, Bandra West, Mumbai. We're open Mon-Fri 9AM-6PM and Sat 10AM-4PM. Would you like to schedule a property visit or consultation?";
    }
    
    // General help
    if (message.includes('help') || message.includes('support') || message.includes('assistance')) {
      return "I'm your dedicated real estate assistant! I can help with property search, valuations, investment advice, legal guidance, loan assistance, and more. Whether you're buying, selling, or renting, I'm here to make your real estate journey smooth and successful. What would you like to know?";
    }
    
    // Default response
    return "That's an interesting question! As your AI Estate Agent, I can help with property buying, selling, renting, investment advice, legal guidance, home loans, and market insights. Could you be more specific about what you're looking for? I'm here to provide expert real estate assistance!";
  };

  const simulateTyping = (response: string, callback: (text: string) => void) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < response.length) {
        callback(response.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 30); // Adjust speed here
  };

  const handleSendMessage = (messageText?: string) => {
    const messageToSend = messageText || inputText;
    if (!messageToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageToSend,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI response with streaming
    const response = getAgentResponse(messageToSend);
    let streamedResponse = "";
    
    setTimeout(() => {
      simulateTyping(response, (text) => {
        streamedResponse = text;
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMessage = newMessages[newMessages.length - 1];
          if (lastMessage && !lastMessage.isUser) {
            lastMessage.text = streamedResponse;
          } else {
            newMessages.push({
              id: Date.now() + 1,
              text: streamedResponse,
              isUser: false,
              timestamp: new Date()
            });
          }
          return newMessages;
        });
      });
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (questionText: string) => {
    // Hide all questions by setting selectedQuestions to contain all indices
    setSelectedQuestions([...Array(quickQuestions.length)].map((_, i) => i));
    handleSendMessage(questionText);
  };

  const quickQuestions = [
    { text: "Properties under ₹1 crore", icon: <DollarSign className="h-4 w-4" /> },
    { text: "Best investment areas", icon: <MapPin className="h-4 w-4" /> },
    { text: "Home loan assistance", icon: <Home className="h-4 w-4" /> },
    { text: "Schedule property visit", icon: <Phone className="h-4 w-4" /> }
  ];

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-50 bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Ask the Agent"
      >
        <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-8 z-50 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center p-1">
                <img 
                  src="/logo.svg" 
                  alt="EstatePro Logo" 
                  className="h-6 w-auto"
                />
              </div>
              <div>
                <h3 className="font-semibold">Estate Agent</h3>
                <p className="text-xs text-primary-foreground/80">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    message.isUser
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {selectedQuestions.length < quickQuestions.length && (
            <div className="p-2 border-t border-gray-100">
              <div className="flex flex-wrap gap-1 mb-2">
                {quickQuestions.map((question, index) => 
                  !selectedQuestions.includes(index) && (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question.text)}
                      className="flex items-center space-x-1 px-2 py-1 text-xs bg-muted hover:bg-primary/10 hover:text-primary rounded-full transition-colors"
                    >
                      {question.icon}
                      <span>{question.text}</span>
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about properties, loans, legal..."
                className="flex-1 px-3 py-2 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
              <button
                onClick={() => handleSendMessage()}
                className="bg-primary hover:bg-primary/90 text-primary-foreground p-2 rounded-xl transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AskAgent;
