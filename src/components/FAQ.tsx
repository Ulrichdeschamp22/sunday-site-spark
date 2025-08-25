import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Bed, Utensils, CreditCard, Ship, Users, Car, Wifi, Coffee, Calendar, Baby, PawPrint, MapPinned, Waves, Sun, Trophy, Briefcase, Phone, Banknote, Timer, Home, Globe, Heart, Sparkles } from "lucide-react";
import { useState } from "react";
const FAQ = () => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const faqCategories = [{
    title: "Informations Générales",
    icon: <Home className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
    questions: [{
      icon: <MapPin className="h-5 w-5" />,
      question: "Où est situé l'Hôtel Résidence Sunday ?",
      answer: "L'hôtel est situé à Yopougon, Baie des Milliardaires, Abidjan, Côte d'Ivoire. Un cadre paradisiaque sur une île proche de Yopougon offrant tranquillité et sécurité.",
      badge: "Localisation Premium"
    }, {
      icon: <Clock className="h-5 w-5" />,
      question: "L'hôtel est-il ouvert 24h/24 et 7j/7 ?",
      answer: "Oui, nous sommes ouverts 24h/24 et 7j/7 ! Notre équipe passionnée est toujours présente pour vous servir et faire de votre séjour une expérience inoubliable.",
      badge: "Service Continu"
    }, {
      icon: <Phone className="h-5 w-5" />,
      question: "Comment réserver une chambre ?",
      answer: "Réservez facilement par téléphone ou WhatsApp au +225 07 69 69 21 94, ou directement sur place. Notre équipe est disponible 24h/24 pour vous assister.",
      badge: "Réservation Simple"
    }]
  }, {
    title: "Hébergement & Confort",
    icon: <Bed className="h-6 w-6" />,
    color: "from-purple-500 to-pink-500",
    questions: [{
      icon: <Sparkles className="h-5 w-5" />,
      question: "Quels types de chambres proposez-vous ?",
      answer: "Nous offrons 3 catégories : Chambre Standard (Canal+ formule accès), Chambre Standard Plus (Canal+ formule évasion), et Suite Junior (Canal+ évasion + eau chaude). Toutes sont climatisées avec petit-déjeuner inclus et accès piscine.",
      badge: "3 Catégories"
    }, {
      icon: <Banknote className="h-5 w-5" />,
      question: "Quels sont les tarifs pour la nuitée ?",
      answer: "Chambre Standard : 25.000 FCFA, Chambre Standard Plus : 30.000 FCFA, Suite Junior : 40.000 FCFA. Réduction à partir de 3 jours de séjour !",
      badge: "Tarifs Flexibles"
    }, {
      icon: <Timer className="h-5 w-5" />,
      question: "Quelles sont les offres en journée ?",
      answer: "Du lundi au jeudi (10h-17h) : Standard 15.000 FCFA, Standard Plus 20.000 FCFA, Suite Junior 25.000 FCFA. Parfait pour une escapade détente !",
      badge: "Offres Journée"
    }, {
      icon: <Coffee className="h-5 w-5" />,
      question: "Le petit-déjeuner est-il inclus ?",
      answer: "Oui ! Le petit-déjeuner est inclus dans toutes nos formules de nuitée pour bien commencer votre journée.",
      badge: "Petit-déj Inclus"
    }]
  }, {
    title: "Services & Activités",
    icon: <Sun className="h-6 w-6" />,
    color: "from-orange-500 to-red-500",
    questions: [{
      icon: <Waves className="h-5 w-5" />,
      question: "Quels services et loisirs sont disponibles ?",
      answer: "Piscine, baby-foot, balançoires, tir à l'arc, restaurant & bar, terrasses et jardins privatifs, espaces de coworking, Wi-Fi gratuit, parking sécurisé, et organisation d'excursions locales.",
      badge: "Services Premium"
    }, {
      icon: <Car className="h-5 w-5" />,
      question: "L'hôtel dispose-t-il d'un parking sécurisé ?",
      answer: "Oui, nous disposons d'un parking privé et sécurisé pour votre tranquillité d'esprit durant votre séjour.",
      badge: "Parking Sécurisé"
    }, {
      icon: <Wifi className="h-5 w-5" />,
      question: "Est-ce que le Wi-Fi est gratuit ?",
      answer: "Oui, le Wi-Fi haut débit est gratuit dans tout l'établissement, parfait pour le travail ou les loisirs.",
      badge: "Wi-Fi Gratuit"
    }]
  }, {
    title: "Gastronomie",
    icon: <Utensils className="h-6 w-6" />,
    color: "from-green-500 to-emerald-500",
    questions: [{
      icon: <Trophy className="h-5 w-5" />,
      question: "Quels plats et boissons propose le restaurant ?",
      answer: "Cuisine ivoirienne et internationale : poissons frais, poulet braisé, kedjenou, agouti, lapin, escargots sautés, et plus. Bar complet avec vins, champagnes et cocktails.",
      badge: "Cuisine Variée"
    }, {
      icon: <Heart className="h-5 w-5" />,
      question: "Quels sont les plats les plus recommandés ?",
      answer: "Nos spécialités : Kedjenou de poulet (12.000 FCFA), Poisson frais grillé, Marmite de Pêcheur (15.000 FCFA), et notre célèbre Poulet braisé (10.000 FCFA).",
      badge: "Spécialités Maison"
    }]
  }, {
    title: "Accès & Transport",
    icon: <Ship className="h-6 w-6" />,
    color: "from-teal-500 to-blue-500",
    questions: [{
      icon: <MapPinned className="h-5 w-5" />,
      question: "Comment se rendre à l'hôtel depuis Yopougon ?",
      answer: "Rendez-vous à Yopougon Azito village (terminus wôrô-wôrô), descendez jusqu'au quai, puis traversée en pinasse : 2.500 FCFA aller-retour. Dernier départ 18h30.",
      badge: "Via Yopougon"
    }, {
      icon: <Globe className="h-5 w-5" />,
      question: "Comment se rendre à l'hôtel depuis Biétry ?",
      answer: "Descendez jusqu'au bord de la lagune (rue après l'hôtel Wafou), traversée en bateau : 10.000 FCFA aller-retour. Dernier départ 18h30.",
      badge: "Via Biétry"
    }, {
      icon: <Timer className="h-5 w-5" />,
      question: "Quel est le dernier départ du bateau ?",
      answer: "Le dernier départ (pinasse ou bateau) est à 18h30. Planifiez votre arrivée en conséquence !",
      badge: "Horaire Important"
    }]
  }, {
    title: "Paiement & Réservation",
    icon: <CreditCard className="h-6 w-6" />,
    color: "from-indigo-500 to-purple-500",
    questions: [{
      icon: <Banknote className="h-5 w-5" />,
      question: "Quels moyens de paiement sont acceptés ?",
      answer: "Espèces (FCFA), Mobile Money (Wave, Orange Money, MTN Money, Moov Money), et cartes bancaires selon disponibilité.",
      badge: "Paiements Flexibles"
    }, {
      icon: <Calendar className="h-5 w-5" />,
      question: "Des réductions sont-elles offertes pour les longs séjours ?",
      answer: "Oui ! Des réductions attractives sont appliquées automatiquement pour les séjours de 3 jours ou plus.",
      badge: "Réductions Long Séjour"
    }]
  }, {
    title: "Familles & Groupes",
    icon: <Users className="h-6 w-6" />,
    color: "from-pink-500 to-rose-500",
    questions: [{
      icon: <Baby className="h-5 w-5" />,
      question: "L'hôtel est-il adapté aux familles avec enfants ?",
      answer: "Absolument ! Avec notre piscine, aires de jeux (balançoires), baby-foot et espaces sécurisés, les familles sont les bienvenues.",
      badge: "Family Friendly"
    }, {
      icon: <PawPrint className="h-5 w-5" />,
      question: "Les animaux de compagnie sont-ils acceptés ?",
      answer: "Pour cette information, merci de nous contacter directement au +225 07 69 69 21 94 pour discuter de vos besoins spécifiques.",
      badge: "Nous Consulter"
    }, {
      icon: <Briefcase className="h-5 w-5" />,
      question: "Peut-on organiser des événements à l'hôtel ?",
      answer: "Oui ! Nous accueillons mariages, anniversaires, événements d'entreprise et réunions professionnelles dans notre cadre exceptionnel.",
      badge: "Événements Sur-Mesure"
    }]
  }];
  return <section className="py-20 bg-gradient-to-b from-secondary via-background to-secondary/50 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 animate-pulse"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-gold border-gold/30 bg-gold/5 backdrop-blur-sm animate-scale-in">
            <Sparkles className="h-4 w-4 mr-2" />
            Questions Fréquentes
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-navy via-gold to-navy bg-clip-text text-transparent animate-fade-in">
            Tout ce que vous devez savoir
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Explorez nos réponses détaillées aux questions les plus fréquentes de nos clients
          </p>
        </div>


        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => <div key={categoryIndex} className="animate-fade-in" style={{
          animationDelay: `${categoryIndex * 150}ms`
        }}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground">
                    {category.questions.length} questions dans cette catégorie
                  </p>
                </div>
              </div>

              {/* Questions Accordion */}
              <Card className="border-none shadow-xl bg-card/90 backdrop-blur-sm overflow-hidden">
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => {
                const globalIndex = `${categoryIndex}-${faqIndex}`;
                const isHovered = hoveredIndex === globalIndex;
                return <AccordionItem key={faqIndex} value={globalIndex} className="border-b border-border/50 last:border-0" onMouseEnter={() => setHoveredIndex(globalIndex)} onMouseLeave={() => setHoveredIndex(null)}>
                        <AccordionTrigger className={`text-left px-6 py-5 hover:bg-gold/5 transition-all duration-300 ${isHovered ? 'bg-gold/5' : ''}`}>
                          <div className="flex items-start gap-4 w-full pr-4">
                            <div className={`flex-shrink-0 p-2 rounded-lg transition-all duration-300 ${isHovered ? 'bg-gold/20 scale-110' : 'bg-muted'}`}>
                              <div className={`${isHovered ? 'text-gold' : 'text-muted-foreground'}`}>
                                {faq.icon}
                              </div>
                            </div>
                            <div className="flex-1 space-y-2">
                              <p className="font-semibold text-base md:text-lg">
                                {faq.question}
                              </p>
                              <Badge variant="outline" className={`text-xs transition-all duration-300 ${isHovered ? 'bg-gold/20 text-gold border-gold/30' : ''}`}>
                                {faq.badge}
                              </Badge>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-5">
                          <div className="ml-14 p-4 rounded-lg bg-gradient-to-r from-muted/50 to-muted/30 border-l-4 border-gold/50">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>;
              })}
                </Accordion>
              </Card>
            </div>)}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-navy/10 via-gold/10 to-navy/10 rounded-2xl p-8 max-w-2xl mx-auto border border-gold/20 bg-cyan-50">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold text-navy mb-4">
              Une question spécifique ?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Notre équipe passionnée est là pour vous répondre instantanément !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+2250769692194" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-gold/80 text-navy font-bold rounded-full hover:scale-105 transition-transform shadow-lg">
                📞 +225 07 69 69 21 94
              </a>
              <a href="https://wa.me/22507696921994" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg">
                💬 WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FAQ;