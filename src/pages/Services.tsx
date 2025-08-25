import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Wifi, 
  Car, 
  Utensils, 
  Users, 
  Shield, 
  Clock, 
  MapPin, 
  Anchor,
  Trees,
  Target,
  Baby,
  Briefcase,
  Calendar,
  Gift,
  Dumbbell,
  Phone,
  Waves,
  Palmtree,
  Check,
  Timer,
  MapPinned,
  Activity
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import servicesHero from "@/assets/services-hero.jpg";

const Services = () => {
  const servicesData = [
    {
      icon: <Wifi className="w-12 h-12" />,
      title: "WiFi Haut Débit",
      description: "Connexion internet rapide et fiable dans tout l'établissement pour rester connecté",
      highlight: true
    },
    {
      icon: <Anchor className="w-12 h-12" />,
      title: "Piscine",
      description: "Piscine extérieure pour se détendre et se rafraîchir sous le soleil ivoirien",
      highlight: true
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "Parking Sécurisé",
      description: "Parking privé surveillé 24h/24 pour votre tranquillité d'esprit",
      highlight: false
    },
    {
      icon: <Utensils className="w-12 h-12" />,
      title: "Restaurant & Bar",
      description: "Cuisine locale et internationale servie dans un cadre élégant avec vue sur la baie",
      highlight: true
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Navette & Transport",
      description: "Service de navette et taxi disponible sur demande pour vos déplacements",
      highlight: false
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Sécurité 24/7",
      description: "Surveillance continue pour assurer votre sécurité et celle de vos biens",
      highlight: false
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Réception 24h/24",
      description: "Notre équipe est disponible à tout moment pour répondre à vos besoins",
      highlight: true
    },
    {
      icon: <Trees className="w-12 h-12" />,
      title: "Jardins & Terrasses",
      description: "Espaces verts aménagés et terrasses privatives pour profiter de la nature",
      highlight: false
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Tir à l'Arc",
      description: "Activité ludique pour tester votre précision dans un cadre sécurisé",
      highlight: false
    },
    {
      icon: <Baby className="w-12 h-12" />,
      title: "Baby-foot & Balançoires",
      description: "Espaces de jeux pour petits et grands, parfaits pour des moments en famille",
      highlight: false
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Espaces de Coworking",
      description: "Espaces modernes pour vos sessions de travail et networking",
      highlight: true
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Organisation d'Événements",
      description: "Accompagnement personnalisé pour vos mariages et célébrations",
      highlight: true
    }
  ];

  const transportInfo = [
    {
      from: "Depuis Yopougon",
      steps: [
        "Se rendre à Yopougon Azito village (terminus des wôrô-wôrô)",
        "Descendre la voie bitumée sur la droite jusqu'au bord de la lagune",
        "Traversée en pinasse : 2.500 FCFA aller-retour",
        "Dernier départ : 18h30"
      ]
    },
    {
      from: "Depuis Biétry",
      steps: [
        "Descendre jusqu'au bord de la lagune (rue après l'hôtel Wafou)",
        "Traversée en bateau : 10.000 FCFA aller-retour",
        "Dernier départ : 18h30"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy-dark/90" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in drop-shadow-2xl">
            Nos Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 animate-fade-in max-w-3xl mx-auto">
            Une offre complète pour un séjour inoubliable à la Baie des Milliardaires
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <Card 
                key={index} 
                className={`p-8 hover:shadow-elegant transition-all duration-300 transform hover:scale-105 ${
                  service.highlight 
                    ? 'bg-gradient-to-br from-gold/10 to-gold/5 border-gold/30' 
                    : 'bg-gradient-to-br from-background to-muted/20'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`mb-4 ${service.highlight ? 'text-gold' : 'text-navy'}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-navy">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Package Détente Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100/30 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-2 text-sm animate-pulse">
                OFFRE SPÉCIALE
              </Badge>
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-navy via-blue-700 to-cyan-700 bg-clip-text text-transparent">
                PACKAGE DÉTENTE
              </h2>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Waves className="w-6 h-6 text-blue-500" />
                <p className="text-2xl font-semibold text-navy">Baie des Milliardaires</p>
                <Palmtree className="w-6 h-6 text-green-500" />
              </div>
              <p className="text-4xl font-bold text-gold animate-scale-in">
                12 000 FCFA / PERSONNE
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                Île Boulay - Disponible tous les jours
              </p>
            </div>

            {/* Main Content Card */}
            <Card className="overflow-hidden shadow-2xl border-0">
              <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 p-6">
                <h3 className="text-2xl font-bold text-white text-center">
                  Une journée de détente complète à la Baie des Milliardaires
                </h3>
              </div>

              <div className="p-8 space-y-8">
                {/* Ce que comprend le package */}
                <div>
                  <h4 className="text-xl font-bold text-navy mb-4 flex items-center">
                    <Gift className="w-6 h-6 mr-2 text-gold" />
                    Ce que comprend le package
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-navy">Transport sécurisé</p>
                        <p className="text-sm text-muted-foreground">Aller-retour en pinasse sécurisée</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-navy">Repas complet</p>
                        <p className="text-sm text-muted-foreground">½ poulet ou ½ poisson + 2 accompagnements</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-navy">Boissons incluses</p>
                        <p className="text-sm text-muted-foreground">Boisson au choix + eau 0,5L</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-navy">Dessert</p>
                        <p className="text-sm text-muted-foreground">Jus naturel ou glace</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Activités gratuites */}
                <div>
                  <h4 className="text-xl font-bold text-navy mb-4 flex items-center">
                    <Activity className="w-6 h-6 mr-2 text-gold" />
                    Activités gratuites incluses
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {["Piscine", "Baby-foot", "Canoë", "Volley Beach", "Dame", "Ludo", "Cartes", "Pétanque"].map((activity) => (
                      <div key={activity} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3 text-center">
                        <p className="font-medium text-navy">{activity}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Horaires et Point de départ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-bold text-navy mb-4 flex items-center">
                      <Timer className="w-6 h-6 mr-2 text-gold" />
                      Horaires
                    </h4>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4">
                      <p className="font-semibold text-navy mb-2">Départs :</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {["9h", "10h", "11h", "12h"].map((time) => (
                          <Badge key={time} variant="secondary" className="bg-white">
                            {time}
                          </Badge>
                        ))}
                      </div>
                      <p className="font-semibold text-navy">Retour : 17h</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-navy mb-4 flex items-center">
                      <MapPinned className="w-6 h-6 mr-2 text-gold" />
                      Point de départ
                    </h4>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4">
                      <p className="font-semibold text-navy mb-2">Yopougon Azito</p>
                      <p className="text-sm text-muted-foreground">
                        Point de rassemblement : Azito village, non loin du foyer des jeunes
                      </p>
                    </div>
                  </div>
                </div>

                {/* Conditions spéciales */}
                <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4">
                  <p className="text-sm font-medium text-amber-900">
                    ⚠️ Condition spéciale : Droit de bouchon de 1000 F par bouteille sur toutes les boissons alcoolisées ramenées
                  </p>
                </div>

                {/* CTA */}
                <div className="text-center pt-4">
                  <a href="tel:+22507696921994">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Réserver maintenant : 07 69 69 21 94
                    </Button>
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Offre valable uniquement depuis Yopougon Azito
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Transport Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy">
            Comment nous rejoindre
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {transportInfo.map((info, index) => (
              <Card key={index} className="p-8 bg-gradient-to-br from-background to-muted/20">
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-gold mr-3" />
                  <h3 className="text-2xl font-bold text-navy">{info.from}</h3>
                </div>
                
                <ol className="space-y-3">
                  {info.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 w-8 h-8 bg-gold text-navy rounded-full flex items-center justify-center font-bold mr-3">
                        {idx + 1}
                      </span>
                      <span className="text-muted-foreground pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="py-16 bg-gradient-to-br from-navy to-navy-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Solutions pour Entreprises
            </h2>
            <p className="text-xl mb-12 text-white/90">
              L'Hôtel Résidence Sunday est le lieu idéal pour vos événements professionnels
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Gift className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Mariages</h3>
                <p className="text-white/80">Cadre idyllique pour votre jour spécial</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Users className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Événements</h3>
                <p className="text-white/80">Lancements de produits, cocktails, soirées d'entreprise</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Dumbbell className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Team Building</h3>
                <p className="text-white/80">Activités ludiques pour renforcer la cohésion d'équipe</p>
              </div>
            </div>
            
            <a href="tel:+2250769692194">
              <Button 
                variant="gold" 
                size="lg"
                className="mt-12"
              >
                <Phone className="w-5 h-5 mr-2" />
                Demander un devis
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy">
            Moyens de paiement acceptés
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            <Card className="px-6 py-4 bg-gradient-to-br from-background to-muted/20">
              <span className="font-semibold">💵 Espèces (FCFA)</span>
            </Card>
            <Card className="px-6 py-4 bg-gradient-to-br from-orange-500/10 to-orange-500/5">
              <span className="font-semibold">📱 Orange Money</span>
            </Card>
            <Card className="px-6 py-4 bg-gradient-to-br from-yellow-500/10 to-yellow-500/5">
              <span className="font-semibold">📱 MTN Money</span>
            </Card>
            <Card className="px-6 py-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5">
              <span className="font-semibold">📱 Moov Money</span>
            </Card>
            <Card className="px-6 py-4 bg-gradient-to-br from-purple-500/10 to-purple-500/5">
              <span className="font-semibold">📱 Wave</span>
            </Card>
            <Card className="px-6 py-4 bg-gradient-to-br from-background to-muted/20">
              <span className="font-semibold">💳 Carte bancaire</span>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;