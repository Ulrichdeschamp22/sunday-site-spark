import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Star, Shield, Wifi, Car, Coffee, Users, Plane, Heart } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      icon: <Heart className="h-5 w-5 text-gold" />,
      question: "Pourquoi choisir l'Hôtel Résidence Sunday ?",
      answer: "✨ Découvrez l'excellence à la Baie des Milliardaires ! Un cadre exceptionnel, un service 5 étoiles disponible 24h/24, et une expérience inoubliable qui fera de votre séjour un moment magique.",
      badge: "Expérience Premium"
    },
    {
      icon: <MapPin className="h-5 w-5 text-gold" />,
      question: "Où nous trouver dans ce petit paradis d'Abidjan ?",
      answer: "🏝️ Au cœur de la prestigieuse Baie des Milliardaires à Yopougon ! Un emplacement de rêve où l'élégance rencontre la tranquillité, facilement accessible et proche de tout ce qui compte.",
      badge: "Localisation Premium"
    },
    {
      icon: <Star className="h-5 w-5 text-gold" />,
      question: "Comment réserver votre escapade de rêve ?",
      answer: "📱 Simple comme bonjour ! Un clic sur WhatsApp (+225 07 69 69 21 94) ou notre bouton 'Réserver maintenant'. Notre équipe passionnée est là 24h/24 pour transformer votre réservation en expérience extraordinaire !",
      badge: "Réservation Instantanée"
    },
    {
      icon: <Coffee className="h-5 w-5 text-gold" />,
      question: "Une gastronomie qui éveille vos sens ?",
      answer: "🍽️ Absolument ! Notre restaurant vous propose un véritable voyage culinaire avec des spécialités ivoiriennes et internationales. Nos clients en parlent comme d'une 'expérience gastronomique validée' !",
      badge: "Gastronomie d'Exception"
    },
    {
      icon: <Shield className="h-5 w-5 text-gold" />,
      question: "Quels services premium vous attendent ?",
      answer: "🌟 WiFi gratuit ultra-rapide, climatisation parfaite, télévision HD, restaurant gastronomique, bar chaleureux, parking ultra-sécurisé, et notre équipe dédiée 24h/24 pour anticiper vos moindres désirs !",
      badge: "Services 5 Étoiles"
    },
    {
      icon: <Clock className="h-5 w-5 text-gold" />,
      question: "Toujours là pour vous, vraiment ?",
      answer: "⏰ 24h/24 et 7j/7 ! Parce que l'excellence ne connaît pas d'horaires. Notre équipe passionnée est toujours présente pour faire de chaque moment un souvenir précieux.",
      badge: "Service Continu"
    },
    {
      icon: <Users className="h-5 w-5 text-gold" />,
      question: "Parfait pour les professionnels en mission ?",
      answer: "💼 Transformez vos déplacements professionnels en moments privilégiés ! Notre cadre paisible et nos services premium créent l'environnement parfait pour allier travail et bien-être.",
      badge: "Business Premium"
    },
    {
      icon: <Car className="h-5 w-5 text-gold" />,
      question: "Votre véhicule en sécurité absolue ?",
      answer: "🚗 Parking privé ultra-sécurisé ! Votre tranquillité d'esprit commence dès votre arrivée. Concentrez-vous sur votre détente, nous nous occupons du reste.",
      badge: "Sécurité Maximale"
    },
    {
      icon: <Plane className="h-5 w-5 text-gold" />,
      question: "Comment rejoindre facilement notre havre de paix ?",
      answer: "✈️ Depuis l'aéroport, laissez-nous organiser votre transfert VIP ou prenez un taxi direction Yopougon-Baie des Milliardaires. Le voyage vers l'exception commence dès votre atterrissage !",
      badge: "Accès Privilégié"
    },
    {
      icon: <Heart className="h-5 w-5 text-gold" />,
      question: "Des événements et groupes exceptionnels ?",
      answer: "🎉 Créons ensemble des moments inoubliables ! Que ce soit pour des événements intimes ou des groupes, notre cadre enchanteur et notre équipe experte transformeront vos projets en souvenirs magiques.",
      badge: "Événements Sur-Mesure"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary via-background to-secondary/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-gold border-gold/30 bg-gold/5">
            ✨ Tout ce que vous voulez savoir
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-navy via-gold to-navy bg-clip-text text-transparent">
            Vos Questions, Nos Réponses
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez pourquoi l'Hôtel Résidence Sunday est le choix privilégié des voyageurs exigeants à Abidjan
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-none shadow-[0_20px_60px_-15px_rgba(255,215,0,0.2)] bg-card/80 backdrop-blur-sm p-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-gold/10 rounded-xl px-6 py-2 bg-gradient-to-r from-background/50 to-secondary/30 hover:from-gold/5 hover:to-gold/10 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                >
                  <AccordionTrigger className="text-left text-navy hover:text-gold transition-all duration-300 py-6 [&[data-state=open]]:text-gold">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 p-2 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors">
                        {faq.icon}
                      </div>
                      <div className="flex flex-col items-start gap-2">
                        <span className="font-bold text-lg">{faq.question}</span>
                        <Badge variant="secondary" className="text-xs bg-gold/20 text-gold border-gold/30">
                          {faq.badge}
                        </Badge>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6">
                    <div className="ml-14 text-muted-foreground leading-relaxed text-base bg-gradient-to-r from-background to-secondary/20 rounded-lg p-4 border-l-4 border-gold/30">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-navy/10 via-gold/10 to-navy/10 rounded-2xl p-8 max-w-2xl mx-auto border border-gold/20">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold text-navy mb-4">
              Une question spécifique ?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Notre équipe passionnée est là pour vous répondre instantanément !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+22507696921994" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-gold/80 text-navy font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                📞 +225 07 69 69 21 94
              </a>
              <a 
                href="https://wa.me/22507696921994" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                💬 WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;