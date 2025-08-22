import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "Abidjan, Yopougon\nBaie des Milliardaires\nCôte d'Ivoire",
      action: () => window.open('https://maps.google.com/?q=Baie+des+Milliardaires+Yopougon+Abidjan', '_blank')
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+225 07 69 69 21 94",
      action: () => window.open('tel:+2250769692194', '_blank')
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Ouvert 24h/24\n7 jours sur 7\nAccueil permanent",
      action: null
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Contactez-nous\ndirectement",
      action: () => window.open('https://wa.me/2250769692194', '_blank')
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-navy to-gold bg-clip-text text-transparent">
            Contactez-nous
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre équipe est à votre disposition 24h/24 pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={index} 
              className={`text-center border-gold/20 shadow-elegant hover:shadow-gold transition-all duration-300 transform hover:scale-105 ${info.action ? 'cursor-pointer' : ''}`}
              onClick={info.action || undefined}
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                  <info.icon className="w-8 h-8 text-navy" />
                </div>
                <CardTitle className="text-xl text-navy">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-line">
                  {info.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-8 shadow-elegant max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 text-navy">
            Prêt à réserver votre séjour ?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Contactez-nous dès maintenant pour réserver votre chambre ou obtenir plus d'informations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="whatsapp" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://wa.me/2250769692194?text=Bonjour, je souhaite réserver une chambre à l\'Hôtel Résidence Sunday', '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              Réserver via WhatsApp
            </Button>
            <Button 
              variant="gold" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.open('tel:+2250769692194', '_blank')}
            >
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </Button>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="border-gold/20 shadow-elegant overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-navy">
                Notre Localisation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-64 bg-gradient-to-br from-gold-light to-gold flex items-center justify-center">
                <div className="text-center text-navy">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Baie des Milliardaires</p>
                  <p>Yopougon, Abidjan</p>
                  <Button 
                    variant="hero" 
                    className="mt-4"
                    onClick={() => window.open('https://maps.google.com/?q=Baie+des+Milliardaires+Yopougon+Abidjan', '_blank')}
                  >
                    Voir sur Google Maps
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;