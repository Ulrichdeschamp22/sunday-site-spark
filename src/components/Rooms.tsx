import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, Snowflake, Tv, Car, Clock, Utensils } from "lucide-react";
import roomImage from "@/assets/room-luxury.jpg";

const Rooms = () => {
  const roomTypes = [
    {
      name: "Chambre Standard",
      description: "Confortable et élégante, idéale pour un séjour d'affaires ou de loisir",
      features: ["Lit double", "Salle de bain privée", "Bureau de travail"]
    },
    {
      name: "Chambre Double",
      description: "Spacieuse avec deux lits, parfaite pour les amis ou collègues",
      features: ["Deux lits simples", "Grand espace", "Coin salon"]
    },
    {
      name: "Suite",
      description: "Le summum du luxe avec salon séparé et prestations premium",
      features: ["Chambre + salon", "Balcon privé", "Service premium"]
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-navy">Nos Types de Chambres</h3>
            <div className="space-y-6">
              {roomTypes.map((room, index) => (
                <Card key={index} className="border-gold/20 hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-navy">{room.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{room.description}</p>
                    <ul className="space-y-2">
                      {room.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Button variant="gold" size="lg">
                Voir nos tarifs
              </Button>
            </div>
          </div>

          <div className="lg:pl-8">
            <img 
              src={roomImage} 
              alt="Chambre luxueuse de l'Hôtel Résidence Sunday"
              className="w-full h-auto rounded-lg shadow-elegant"
            />
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