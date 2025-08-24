import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, Snowflake, Tv, Car, Clock, Utensils } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const navigate = useNavigate();
  
  const roomTypes = [
    {
      name: "Chambre Standard",
      description: "Parfaite pour un séjour confortable avec toutes les commodités essentielles.",
      features: ["Canal+ formule accès", "Climatisée", "Petit-Déjeuner inclus", "Accès à la Piscine"]
    },
    {
      name: "Chambre Standard Plus",
      description: "Un niveau de confort supérieur avec plus de chaînes et d'espace.",
      features: ["Canal+ formule évasion", "Climatisée", "Petit-Déjeuner inclus", "Accès à la Piscine"]
    },
    {
      name: "Suite Junior",
      description: "Le summum du luxe avec eau chaude et espace généreux.",
      features: ["Canal+ formule évasion", "Climatisée", "Petit-Déjeuner inclus", "Accès à la Piscine", "Eau chaude"]
    }
  ];

  const services = [
    { icon: Wifi, name: "WiFi gratuit", description: "Internet haut débit" },
    { icon: Snowflake, name: "Climatisation", description: "Confort optimal" },
    { icon: Tv, name: "Télévision", description: "Chaînes internationales" },
    { icon: Utensils, name: "Restaurant & Bar", description: "Cuisine raffinée" },
    { icon: Car, name: "Parking sécurisé", description: "Gratuit pour les clients" },
    { icon: Clock, name: "Service 24/7", description: "Accueil permanent" }
  ];

  return (
    <section id="chambres" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-navy to-gold bg-clip-text text-transparent">
            Chambres & Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos chambres conçues pour votre confort et nos services pensés pour votre bien-être
          </p>
        </div>

        {/* Room Types */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold mb-8 text-center text-navy">Nos Types de Chambres</h3>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {roomTypes.map((room, index) => (
                <Card key={index} className="border-gold/20 hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-navy text-center">{room.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-center">{room.description}</p>
                    <ul className="space-y-2">
                      {room.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm justify-center">
                          <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button 
                variant="gold" 
                size="lg"
                onClick={() => navigate('/chambres')}
              >
                Voir nos tarifs
              </Button>
            </div>
          </div>
        </div>

        {/* Services */}
        <div id="services">
          <h3 className="text-3xl font-semibold mb-8 text-center text-navy">Services Inclus</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center border-none shadow-md hover:shadow-gold transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-navy" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-navy">{service.name}</h4>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;