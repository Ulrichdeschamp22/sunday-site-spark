import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Coffee, Fish, Wine, Utensils } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import restaurant from "@/assets/restaurant.jpg";

const Gastronomies = () => {
  const menuData = {
    entrées: [
      { name: "Avocat au thon", price: "5.000 FCFA", description: "Pour deux personnes" },
      { name: "Salade de pommes de terre au thon et œufs durs", price: "6.000 FCFA", description: "Pour deux personnes" },
      { name: "Salade d'avocat ou concombres", price: "5.000 FCFA", description: "Pour deux personnes" },
      { name: "Salade de légumes aux crevettes", price: "6.000 FCFA", description: "Pour deux personnes" }
    ],
    plats: [
      { name: "Poisson 2 kilos", price: "20.000 FCFA", description: "Fraîchement pêché" },
      { name: "Poisson 1,5 kilo", price: "15.000 FCFA", description: "Préparation au choix" },
      { name: "Poisson 1 kilo", price: "12.000 FCFA", description: "Grillé ou braisé" },
      { name: "Marmite de Pêcheur", price: "15.000 FCFA", description: "Spécialité de la maison" },
      { name: "Poulet de Chair", price: "8.000 FCFA", description: "Tendre et savoureux" },
      { name: "Poulet de Chair braisé", price: "10.000 FCFA", description: "Marinade spéciale" },
      { name: "Sauté d'Escargot", price: "10.000 FCFA", description: "Délice local" },
      { name: "Soupe de Mouton", price: "12.000 FCFA", description: "Réconfortante" },
      { name: "Soupe de Cabris", price: "15.000 FCFA", description: "Savoureuse" },
      { name: "Crevettes Sautées", price: "12.000 FCFA", description: "Aux épices locales" },
      { name: "Citrouilles fruits de mer", price: "15.000 FCFA", description: "Mélange exquis" },
      { name: "Lapin braisé", price: "15.000 FCFA", description: "Grillé à la perfection" },
      { name: "Lapin sauté", price: "12.000 FCFA", description: "Tendre et juteux" },
      { name: "Agouti braisé", price: "15.000 FCFA", description: "Spécialité ivoirienne" },
      { name: "Kedjenou d'Agouti", price: "15.000 FCFA", description: "Tradition culinaire" },
      { name: "Kedjenou de Poulet", price: "12.000 FCFA", description: "Mijoté aux légumes" },
      { name: "Kedjenou de Pintade", price: "12.000 FCFA", description: "Saveur authentique" }
    ],
    accompagnements: [
      { name: "Attiéké", price: "1.000 FCFA", description: "Couscous de manioc" },
      { name: "Alloco", price: "1.000 FCFA", description: "Bananes plantain frites" },
      { name: "Frites", price: "1.000 FCFA", description: "Croustillantes" },
      { name: "Igname", price: "1.000 FCFA", description: "Bouillie ou frite" },
      { name: "Riz", price: "1.000 FCFA", description: "Parfumé" }
    ],
    desserts: [
      { name: "Glace", price: "1.000 FCFA", description: "Diverses saveurs" },
      { name: "Yaourt", price: "1.000 FCFA", description: "Frais et naturel" },
      { name: "Fruits de saison", price: "1.000 FCFA", description: "Sélection du jour" },
      { name: "Nespresso", price: "1.000 FCFA", description: "Café premium" }
    ],
    boissons: {
      vins: [
        { name: "Souvenirs", price: "8.000 FCFA" },
        { name: "Baron d'Arignac", price: "10.000 FCFA" },
        { name: "Terre de Crue", price: "12.000 FCFA" },
        { name: "Côte Berg Blanc", price: "12.000 FCFA" },
        { name: "JP Chenet Ice", price: "15.000 FCFA" },
        { name: "LP (Laurent-Perrier)", price: "40.000 FCFA" },
        { name: "Moët", price: "45.000 FCFA" }
      ],
      spiritueux: [
        { name: "Whisky Ballantines 20cl", price: "12.000 FCFA" },
        { name: "Whisky Pêche 70cl", price: "12.000 FCFA" },
        { name: "St James Réserve 70cl", price: "15.000 FCFA" },
        { name: "Gordon 75cl", price: "15.000 FCFA" },
        { name: "Johnnie Red 75cl", price: "15.000 FCFA" },
        { name: "Baileys 75cl", price: "15.000 FCFA" }
      ],
      bières: [
        { name: "Despe – Corona", price: "1.500 FCFA" },
        { name: "Heineken – Beaufort", price: "1.500 FCFA" },
        { name: "Bavaria – Ivoire", price: "1.000 FCFA" }
      ],
      softs: [
        { name: "Coca – Fanta", price: "1.000 FCFA" },
        { name: "Orangina – Sprite", price: "1.000 FCFA" },
        { name: "Eau 1,5 L", price: "1.000 FCFA" },
        { name: "Jus Passion/Bissap", price: "1.000 FCFA" },
        { name: "Monster – 3x Energy", price: "2.000 FCFA" }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-br from-navy via-navy-light to-gold/20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={restaurant} 
            alt="Restaurant" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy-dark/90" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Gastronomie
          </h1>
          <p className="text-xl md:text-2xl text-white/90 animate-fade-in max-w-3xl mx-auto">
            Une expérience culinaire exceptionnelle mêlant saveurs locales et internationales
          </p>
        </div>
      </section>

      {/* Menu Tabs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="plats" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="entrées">🥗 Entrées</TabsTrigger>
              <TabsTrigger value="plats">🍖 Plats</TabsTrigger>
              <TabsTrigger value="accompagnements">🍚 Accompagnements</TabsTrigger>
              <TabsTrigger value="desserts">🍨 Desserts</TabsTrigger>
              <TabsTrigger value="boissons">🍷 Boissons</TabsTrigger>
            </TabsList>

            {/* Entrées */}
            <TabsContent value="entrées">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuData.entrées.map((item, index) => (
                  <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 bg-gradient-to-br from-background to-muted/30">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-navy">{item.name}</h3>
                        <p className="text-muted-foreground mt-1">{item.description}</p>
                      </div>
                      <span className="text-gold font-bold text-lg">{item.price}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Plats */}
            <TabsContent value="plats">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuData.plats.map((item, index) => (
                  <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-background to-muted/20">
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-navy">{item.name}</h3>
                        <Fish className="w-5 h-5 text-gold" />
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">{item.description}</p>
                      <div className="text-gold font-bold text-xl">{item.price}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Accompagnements */}
            <TabsContent value="accompagnements">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {menuData.accompagnements.map((item, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all duration-300 bg-gradient-to-br from-background to-muted/30">
                    <Utensils className="w-8 h-8 text-gold mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-navy">{item.name}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                    <div className="text-gold font-bold text-lg mt-3">{item.price}</div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Desserts */}
            <TabsContent value="desserts">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {menuData.desserts.map((item, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all duration-300 bg-gradient-to-br from-background to-muted/30">
                    <Coffee className="w-8 h-8 text-gold mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-navy">{item.name}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                    <div className="text-gold font-bold text-lg mt-3">{item.price}</div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Boissons */}
            <TabsContent value="boissons">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Vins */}
                <div>
                  <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                    <Wine className="w-5 h-5 mr-2 text-gold" />
                    Vins & Champagnes
                  </h3>
                  <div className="space-y-3">
                    {menuData.boissons.vins.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="text-sm">{item.name}</span>
                        <span className="text-gold font-semibold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spiritueux */}
                <div>
                  <h3 className="text-xl font-bold text-navy mb-4">🥃 Spiritueux</h3>
                  <div className="space-y-3">
                    {menuData.boissons.spiritueux.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="text-sm">{item.name}</span>
                        <span className="text-gold font-semibold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bières */}
                <div>
                  <h3 className="text-xl font-bold text-navy mb-4">🍺 Bières</h3>
                  <div className="space-y-3">
                    {menuData.boissons.bières.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="text-sm">{item.name}</span>
                        <span className="text-gold font-semibold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Softs */}
                <div>
                  <h3 className="text-xl font-bold text-navy mb-4">🥤 Boissons Soft</h3>
                  <div className="space-y-3">
                    {menuData.boissons.softs.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                        <span className="text-sm">{item.name}</span>
                        <span className="text-gold font-semibold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Réservez votre table
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Découvrez une expérience culinaire unique à la Baie des Milliardaires
          </p>
          <Button 
            variant="gold" 
            size="lg"
            onClick={() => window.open('https://wa.me/2250769692194?text=' + encodeURIComponent('Bonjour, je souhaite réserver une table au restaurant.'), '_blank')}
          >
            <Phone className="w-5 h-5 mr-2" />
            Réserver maintenant
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gastronomies;