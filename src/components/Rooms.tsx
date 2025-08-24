import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, Snowflake, Tv, Car, Clock, Utensils, CheckCircle, Star, Crown, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const navigate = useNavigate();
  
  const roomTypes = [
    {
      name: "Chambre Standard",
      icon: <Star className="w-8 h-8" />,
      description: "Parfaite pour un séjour confortable avec toutes les commodités essentielles.",
      features: ["Canal+ formule accès", "Climatisée", "Petit-déjeuner inclus", "Accès à la Piscine"],
      gradient: "from-blue-500 to-cyan-500",
      bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50",
      iconBg: "bg-gradient-to-br from-blue-100 to-cyan-100",
      borderColor: "border-blue-200"
    },
    {
      name: "Chambre Standard Plus",
      icon: <Sparkles className="w-8 h-8" />,
      description: "Un niveau de confort supérieur avec plus de chaînes et d'espace.",
      features: ["Canal+ formule évasion", "Climatisée", "Petit-déjeuner inclus", "Accès à la Piscine"],
      gradient: "from-purple-500 to-pink-500",
      bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50",
      iconBg: "bg-gradient-to-br from-purple-100 to-pink-100",
      borderColor: "border-purple-200"
    },
    {
      name: "Suite Junior",
      icon: <Crown className="w-8 h-8" />,
      description: "Le summum du luxe avec eau chaude et espace généreux.",
      features: ["Canal+ formule évasion", "Climatisée", "Petit-déjeuner inclus", "Accès à la Piscine", "Eau chaude"],
      gradient: "from-amber-500 to-orange-500",
      bgPattern: "bg-gradient-to-br from-amber-50 to-orange-50",
      iconBg: "bg-gradient-to-br from-amber-100 to-orange-100",
      borderColor: "border-amber-200"
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
    <section id="chambres" className="py-20 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-navy to-gold bg-clip-text text-transparent">
            Chambres & Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos chambres conçues pour votre confort et nos services pensés pour votre bien-être
          </p>
        </div>

        {/* Room Types - New Modern Design */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold mb-12 text-center text-navy">Nos Types de Chambres</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {roomTypes.map((room, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border ${room.borderColor} transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
              >
                {/* Background Pattern */}
                <div className={`absolute inset-0 ${room.bgPattern} opacity-50`} />
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`w-20 h-20 ${room.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`bg-gradient-to-r ${room.gradient} bg-clip-text text-transparent`}>
                      {room.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-2xl font-bold mb-3 text-navy">{room.name}</h4>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-6">{room.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {room.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${room.gradient} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Decorative Element */}
                  <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r ${room.gradient} opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="mt-12 text-center">
            <Button 
              variant="gold" 
              size="lg"
              onClick={() => navigate('/chambres')}
              className="group relative overflow-hidden px-8 py-6 text-lg"
            >
              <span className="relative z-10">Voir nos tarifs</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
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