import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import ReservationForm from "./ReservationForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-navy to-gold bg-clip-text text-transparent">
              Hôtel Résidence Sunday
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('accueil')} className="text-navy hover:text-gold transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection('chambres')} className="text-navy hover:text-gold transition-colors">
              Chambres
            </button>
            <button onClick={() => scrollToSection('services')} className="text-navy hover:text-gold transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('avis')} className="text-navy hover:text-gold transition-colors">
              Avis
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-navy hover:text-gold transition-colors">
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="whatsapp" 
              size="sm"
              onClick={() => window.open('https://wa.me/2250769692194', '_blank')}
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </Button>
            <Button 
              variant="gold" 
              size="sm"
              onClick={() => setIsReservationOpen(true)}
            >
              Réserver
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('accueil')} className="text-left text-navy hover:text-gold transition-colors">
                Accueil
              </button>
              <button onClick={() => scrollToSection('chambres')} className="text-left text-navy hover:text-gold transition-colors">
                Chambres
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-navy hover:text-gold transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('avis')} className="text-left text-navy hover:text-gold transition-colors">
                Avis
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-navy hover:text-gold transition-colors">
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="whatsapp" 
                  size="sm"
                  onClick={() => window.open('https://wa.me/2250769692194', '_blank')}
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </Button>
                <Button 
                  variant="gold" 
                  size="sm"
                  onClick={() => setIsReservationOpen(true)}
                >
                  Réserver
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      {/* Formulaire de réservation */}
      <ReservationForm 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
      />
    </header>
  );
};

export default Header;