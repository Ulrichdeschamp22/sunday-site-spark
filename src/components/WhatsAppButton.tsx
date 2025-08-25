import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);
  const whatsappNumber = "22507696921994";
  const message = "Bonjour, je souhaite avoir des informations sur l'Hôtel Résidence Sunday.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
  useEffect(() => {
    const handleChatbotToggle = (event: CustomEvent) => {
      setIsChatBotOpen(event.detail.isOpen);
    };
    
    window.addEventListener('chatbotToggle', handleChatbotToggle as EventListener);
    
    return () => {
      window.removeEventListener('chatbotToggle', handleChatbotToggle as EventListener);
    };
  }, []);
  
  // Hide WhatsApp button when chatbot is open
  if (isChatBotOpen) {
    return null;
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation ring */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        
        {/* Secondary pulse for more visibility */}
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping animation-delay-200 opacity-50"></div>
        
        {/* Main button */}
        <div className="relative flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-2xl hover:bg-green-600 transform transition-all duration-300 hover:scale-110 group-hover:shadow-green-500/50">
          <MessageCircle className="w-8 h-8 text-white" fill="currentColor" />
        </div>
        
        {/* Tooltip on hover */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-navy text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          <span>Discutez avec nous sur WhatsApp!</span>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-navy"></div>
          </div>
        </div>
      </div>
      
      {/* Floating text label */}
      <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
        <span className="text-green-600 font-semibold">WhatsApp</span>
      </div>
    </a>
  );
};

export default WhatsAppButton;