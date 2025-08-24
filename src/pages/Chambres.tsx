import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Wifi, Tv, Coffee, Droplets, Star, Phone, Sparkles, Crown, Gem, MessageCircle } from "lucide-react";
import chambresHero from "@/assets/chambres-hero.jpg";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Chambres = () => {
  const [selectedCategory, setSelectedCategory] = useState("nuitée");
  const [selectedRoom, setSelectedRoom] = useState<{name: string, category: string} | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleReservation = (room: any) => {
    setSelectedRoom({ name: room.name, category: selectedCategory });
    setIsDialogOpen(true);
  };

  const handleCallHotel = () => {
    window.location.href = 'tel:+2250769692194';
    setIsDialogOpen(false);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/2250769692194?text=' + encodeURIComponent(`Bonjour, je souhaite réserver une ${selectedRoom?.name} pour ${selectedRoom?.category === 'nuitée' ? 'la nuit' : 'la journée'}.`), '_blank');
    setIsDialogOpen(false);
  };

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
        icon: Star,
        gradient: "from-amber-400 to-orange-500"
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
        icon: Sparkles,
        gradient: "from-blue-400 to-indigo-600"
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
        icon: Crown,
        gradient: "from-purple-500 to-pink-600"
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
        icon: Star,
        gradient: "from-amber-400 to-orange-500"
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
        icon: Sparkles,
        gradient: "from-blue-400 to-indigo-600"
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
        icon: Crown,
        gradient: "from-purple-500 to-pink-600"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${chambresHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy-dark/90" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in drop-shadow-2xl">
            Nos Chambres
          </h1>
          <p className="text-xl md:text-2xl text-white/90 animate-fade-in max-w-3xl mx-auto">
            Confort et élégance à la Baie des Milliardaires
          </p>
        </div>
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
            {chambresData[selectedCategory].map((room, index) => {
              const Icon = room.icon;
              return (
                <Card 
                  key={index} 
                  className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-muted/10 to-background"
                >
                  <div className={`relative h-40 bg-gradient-to-br ${room.gradient} flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <Icon className="w-20 h-20 text-white relative z-10 drop-shadow-2xl" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-foreground px-4 py-2 rounded-full font-bold shadow-lg">
                      {room.price}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {room.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{room.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {room.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3 group">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${room.gradient} flex items-center justify-center transform transition-transform group-hover:scale-110`}>
                            <Star className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full bg-gradient-to-r ${room.gradient} text-white border-0 hover:opacity-90 hover:shadow-xl transition-all duration-300`}
                      onClick={() => handleReservation(room)}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Réserver maintenant
                    </Button>
                  </div>
                </Card>
              );
            })}
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

      {/* Reservation Dialog */}
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-bold text-center text-navy">
              Comment souhaitez-vous réserver ?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-muted-foreground pt-2">
              {selectedRoom && (
                <span className="block text-lg font-medium text-foreground mb-4">
                  {selectedRoom.name} - {selectedRoom.category === 'nuitée' ? 'Nuitée' : 'Journée'}
                </span>
              )}
              Choisissez votre mode de contact préféré
            </AlertDialogDescription>
          </AlertDialogHeader>
          
          <div className="flex flex-col gap-4 mt-6">
            <Button
              variant="gold"
              size="lg"
              onClick={handleCallHotel}
              className="flex items-center justify-center gap-3 py-6"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Appeler l'hôtel</span>
            </Button>
            
            <Button
              className="flex items-center justify-center gap-3 py-6 bg-green-500 hover:bg-green-600 text-white"
              size="lg"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Contacter sur WhatsApp</span>
            </Button>
          </div>
          
          <div className="mt-4 p-3 bg-muted/50 rounded-lg">
            <p className="text-sm text-center text-muted-foreground">
              Service disponible 24h/24 et 7j/7
            </p>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      <Footer />
    </div>
  );
};

export default Chambres;