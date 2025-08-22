import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "Comment réserver une chambre à l'Hôtel Résidence Sunday ?",
      answer: "Vous pouvez réserver directement en nous contactant via WhatsApp au +225 07 69 69 21 94 ou en utilisant le bouton 'Réserver maintenant' sur notre site. Notre équipe est disponible 24h/24 pour vous assister."
    },
    {
      question: "Quels sont les tarifs des chambres ?",
      answer: "Nos tarifs varient selon le type de chambre (standard, double, suite) et la période. Contactez-nous directement pour obtenir les meilleurs prix et offres spéciales. Nous garantissons un excellent rapport qualité/prix."
    },
    {
      question: "Où se situe exactement l'hôtel ?",
      answer: "Nous sommes situés à Abidjan, dans le quartier Yopougon, précisément à la Baie des Milliardaires. C'est un cadre paisible et élégant, facilement accessible."
    },
    {
      question: "Quels services sont inclus dans le séjour ?",
      answer: "Tous nos séjours incluent : WiFi gratuit, climatisation, télévision, accès au restaurant et bar, parking sécurisé, et notre service client disponible 24h/24 et 7j/7."
    },
    {
      question: "L'hôtel dispose-t-il d'un restaurant ?",
      answer: "Oui ! Nous proposons une gastronomie validée par nos clients avec des plats savoureux. Notre restaurant est ouvert et notre cuisine est très appréciée par notre clientèle."
    },
    {
      question: "Y a-t-il un parking disponible ?",
      answer: "Oui, nous disposons d'un parking sécurisé pour nos clients. Votre véhicule sera en sécurité pendant tout votre séjour."
    },
    {
      question: "L'hôtel est-il ouvert 24h/24 ?",
      answer: "Absolument ! L'Hôtel Résidence Sunday vous accueille 24h/24 et 7j/7. Notre équipe est toujours présente pour vous offrir le meilleur service."
    },
    {
      question: "Proposez-vous des séjours pour les professionnels ?",
      answer: "Oui, notre cadre paisible et nos services sont parfaitement adaptés aux séjours professionnels. Nous offrons un environnement propice au travail et à la détente."
    },
    {
      question: "Comment se rendre à l'hôtel depuis l'aéroport ?",
      answer: "Depuis l'aéroport d'Abidjan, vous pouvez prendre un taxi ou nous contacter pour organiser votre transfert. Nous sommes situés à Yopougon, à la Baie des Milliardaires."
    },
    {
      question: "Acceptez-vous les groupes et événements ?",
      answer: "Oui, nous accueillons les groupes et pouvons organiser des événements dans notre cadre chaleureux et élégant. Contactez-nous pour discuter de vos besoins spécifiques."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-navy to-gold bg-clip-text text-transparent">
            Questions Fréquentes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Trouvez rapidement les réponses aux questions les plus courantes sur l'Hôtel Résidence Sunday
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-elegant p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gold/20">
                  <AccordionTrigger className="text-left text-navy hover:text-gold transition-colors">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Vous avez d'autres questions ?
          </p>
          <p className="text-gold font-semibold">
            📞 Contactez-nous au +225 07 69 69 21 94 ou via WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;