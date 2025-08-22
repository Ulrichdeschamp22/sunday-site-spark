import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hotel Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
              Hôtel Résidence Sunday
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Votre oasis de tranquillité à la Baie des Milliardaires. 
              Un cadre chaleureux et élégant pour tous vos séjours.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-navy" />
              </div>
              <span className="text-gold font-semibold">Ouvert 24h/24</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-3" />
                <span>+225 07 69 69 21 94</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gold mr-3 mt-1" />
                <div>
                  <p>Baie des Milliardaires</p>
                  <p>Yopougon, Abidjan</p>
                  <p>Côte d'Ivoire</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gold">Liens Rapides</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('accueil')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-gold transition-colors"
              >
                Accueil
              </button>
              <button 
                onClick={() => document.getElementById('chambres')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-gold transition-colors"
              >
                Chambres & Services
              </button>
              <button 
                onClick={() => document.getElementById('avis')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-gold transition-colors"
              >
                Avis Clients
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-gold transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Hôtel Résidence Sunday. Tous droits réservés.
          </p>
          <p className="text-gray-400 mt-2">
            Développé avec ❤️ pour votre confort
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;