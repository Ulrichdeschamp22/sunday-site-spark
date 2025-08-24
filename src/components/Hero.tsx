import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import ReservationForm from "./ReservationForm";

const Hero = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of images for the carousel - using the 9 new images
  const images = [
    "/lovable-uploads/e8a8a12c-b07b-43d2-8e4c-261c50e6bcfe.png",
    "/lovable-uploads/ea179e67-63fa-4565-9c1e-8db037ce0cd7.png",
    "/lovable-uploads/2c335eca-a0d7-4953-bf3b-ad08a8d7c7b4.png",
    "/lovable-uploads/8f7f4a18-3e57-4af7-87b4-ee18f0048f8c.png",
    "/lovable-uploads/f61a107c-997b-478f-b0e7-fbda5ecae314.png",
    "/lovable-uploads/3014da47-6bb0-4c81-8eb6-47af7f6ba4cf.png",
    "/lovable-uploads/13d4d61e-6886-4b45-aa72-f60598bdd205.png",
    "/lovable-uploads/be95b4f4-d370-453b-b6ca-f08f63fbe037.png",
    "/lovable-uploads/a36f18ca-a47c-4616-a9b7-c543ec8f56f8.png"
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-navy/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hôtel Résidence{" "}
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              Sunday
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 font-light">
            Pour toutes vos détentes
          </p>
          
          <div className="flex items-center justify-center mb-8 text-lg">
            <MapPin className="w-5 h-5 mr-2 text-gold" />
            <span>Situé à la Baie des Milliardaires, Abidjan</span>
          </div>

          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Découvrez un cadre chaleureux, paisible et élégant dans le quartier Yopougon. 
            Votre oasis de tranquillité vous accueille 24h/24.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="gold" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => setIsReservationOpen(true)}
            >
              Réserver maintenant
            </Button>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://wa.me/2250769692194', '_blank')}
            >
              <Phone className="w-5 h-5" />
              Nous contacter sur WhatsApp
            </Button>
          </div>

          {/* Opening Hours */}
          <div className="mt-12 text-center">
            <p className="text-gold font-semibold text-lg">
              🕐 Ouvert 24h/24 - 7j/7
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2"></div>
        </div>
      </div>

      {/* Formulaire de réservation */}
      <ReservationForm 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
      />
    </section>
  );
};

export default Hero;