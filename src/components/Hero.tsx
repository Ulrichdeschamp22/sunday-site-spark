import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";
import ReservationForm from "./ReservationForm";

const Hero = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
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