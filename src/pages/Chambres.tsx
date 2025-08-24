import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Wifi, Tv, Coffee, Droplets, Star, Phone } from "lucide-react";
import standardIllustration from "@/assets/standard-illustration.jpg";
import standardPlusIllustration from "@/assets/standard-plus-illustration.jpg";
import suiteJuniorIllustration from "@/assets/suite-junior-illustration.jpg";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Chambres = () => {
  const [selectedCategory, setSelectedCategory] = useState("nuitée");

  const chambresData = {
    nuitée: [
      {
        name: "Chambre Standard",
        price: "25.000 FCFA",
        features: [
          "Canal+ formule accès",
          "Climatisée",
          "Petit-Déjeuner inclus",
          "Accès à la Piscine"
        ],
        description: "Parfaite pour un séjour confortable avec toutes les commodités essentielles.",
        image: standardIllustration
      },
      {
        name: "Chambre Standard Plus",
        price: "30.000 FCFA",
        features: [
          "Canal+ formule évasion",
          "Climatisée",
          "Petit-Déjeuner inclus",
          "Accès à la Piscine"
        ],
        description: "Un niveau de confort supérieur avec plus de chaînes et d'espace.",
        image: standardPlusIllustration
      },
      {
        name: "Suite Junior",
        price: "40.000 FCFA",
        features: [
          "Canal+ formule évasion",
          "Climatisée",
          "Petit-Déjeuner inclus",
          "Accès à la Piscine",
          "Eau chaude"
        ],
        description: "Le summum du luxe avec eau chaude et espace généreux.",
        image: suiteJuniorIllustration
      }
    ],
    journée: [
      {
        name: "Chambre Standard",
        price: "15.000 FCFA",
        features: [
          "Canal+ accès",
          "Climatisée",
          "Accès à la Piscine"
        ],
        description: "Idéale pour une journée de détente (10h-17h, du lundi au jeudi).",
        image: standardIllustration
      },
      {
        name: "Chambre Standard Plus",
        price: "20.000 FCFA",
        features: [
          "Canal+ évasion",
          "Climatisée",
          "Accès à la Piscine"
        ],
        description: "Plus d'espace et de confort pour votre journée (10h-17h, du lundi au jeudi).",
        image: standardPlusIllustration
      },
      {
        name: "Suite Junior",
        price: "25.000 FCFA",
        features: [
          "Canal+ évasion",
          "Climatisée",
          "Accès à la Piscine",
          "Eau chaude"
        ],
        description: "Luxe et confort pour une journée exceptionnelle (10h-17h, du lundi au jeudi).",
        image: suiteJuniorIllustration
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gradient-to-br from-navy via-navy-light to-navy-dark flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy-dark/80" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Nos Chambres
          </h1>
          <p className="text-xl md:text-2xl text-white/90 animate-fade-in">
            Confort et élégance à la Baie des Milliardaires
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Toggle Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            <Button
              variant={selectedCategory === "nuitée" ? "gold" : "outline"}
              size="lg"
              onClick={() => setSelectedCategory("nuitée")}
              className="text-lg"
            >
              🌙 Offres Nuitée
            </Button>
            <Button
              variant={selectedCategory === "journée" ? "gold" : "outline"}
              size="lg"
              onClick={() => setSelectedCategory("journée")}
              className="text-lg"
            >
              ☀️ Offres Journée
            </Button>
          </div>
          
          {selectedCategory === "nuitée" && (
            <div className="text-center mt-4">
              <p className="text-muted-foreground">Entrée : 11 Heure — Sortie : 11 Heure</p>
              <p className="text-gold font-semibold">💰 Réduction à partir de 3 jours de séjour !</p>
            </div>
          )}
          
          {selectedCategory === "journée" && (
            <div className="text-center mt-4">
              <p className="text-muted-foreground">Valable du lundi au jeudi de 10h à 17h</p>
            </div>
          )}
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chambresData[selectedCategory].map((room, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-elegant transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-background to-muted/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-navy px-3 py-1 rounded-full font-bold">
                    {room.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-navy to-navy-light bg-clip-text text-transparent">
                    {room.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{room.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-gold" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="gold" 
                    className="w-full"
                    onClick={() => window.open('https://wa.me/2250769692194?text=' + encodeURIComponent(`Bonjour, je souhaite réserver une ${room.name} pour ${selectedCategory === 'nuitée' ? 'la nuit' : 'la journée'}.`), '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Réserver maintenant
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Équipements & Services</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Wifi className="w-12 h-12 text-gold" />
              <h3 className="font-semibold">WiFi Gratuit</h3>
              <p className="text-sm text-white/80">Connexion haut débit</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <Tv className="w-12 h-12 text-gold" />
              <h3 className="font-semibold">Canal+</h3>
              <p className="text-sm text-white/80">Formules variées</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <Coffee className="w-12 h-12 text-gold" />
              <h3 className="font-semibold">Petit-déjeuner</h3>
              <p className="text-sm text-white/80">Inclus dans la nuitée</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <Droplets className="w-12 h-12 text-gold" />
              <h3 className="font-semibold">Piscine</h3>
              <p className="text-sm text-white/80">Accès inclus</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Chambres;