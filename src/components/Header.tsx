import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigateToPage('/')}>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-navy to-gold bg-clip-text text-transparent">
              Hôtel Résidence Sunday
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigateToPage('/')} className="text-navy hover:text-gold transition-colors">
              Accueil
            </button>
            <button onClick={() => navigateToPage('/chambres')} className="text-navy hover:text-gold transition-colors">
              Chambres
            </button>
            <button onClick={() => navigateToPage('/gastronomies')} className="text-navy hover:text-gold transition-colors">
              Gastronomies
            </button>
            <button onClick={() => navigateToPage('/services')} className="text-navy hover:text-gold transition-colors">
              Services
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="whatsapp" 
              size="sm"
              onClick={() => window.open('https://wa.me/2250769692194', '_blank')}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>
            <Button 
              variant="gold" 
              size="sm"
              onClick={() => navigateToPage('/reservation')}
            >
              Réserver
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.location.href = 'tel:+2250769692194'}
            >
              <Phone className="w-4 h-4" />
              Appeler
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
              <button onClick={() => navigateToPage('/')} className="text-left text-navy hover:text-gold transition-colors">
                Accueil
              </button>
              <button onClick={() => navigateToPage('/chambres')} className="text-left text-navy hover:text-gold transition-colors">
                Chambres
              </button>
              <button onClick={() => navigateToPage('/gastronomies')} className="text-left text-navy hover:text-gold transition-colors">
                Gastronomies
              </button>
              <button onClick={() => navigateToPage('/services')} className="text-left text-navy hover:text-gold transition-colors">
                Services
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="whatsapp" 
                  size="sm"
                  onClick={() => window.open('https://wa.me/2250769692194', '_blank')}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
                <Button 
                  variant="gold" 
                  size="sm"
                  onClick={() => navigateToPage('/reservation')}
                >
                  Réserver
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.location.href = 'tel:+2250769692194'}
                >
                  <Phone className="w-4 h-4" />
                  Appeler
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;