import { Card, CardContent } from "@/components/ui/card";
import { Heart, DollarSign, UtensilsCrossed, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Accueil chaleureux",
      description: "Un service personnalisé qui vous fait sentir comme chez vous"
    },
    {
      icon: DollarSign,
      title: "Rapport qualité/prix excellent",
      description: "Des prestations de qualité à des tarifs compétitifs"
    },
    {
      icon: UtensilsCrossed,
      title: "Gastronomie validée",
      description: "Une cuisine savoureuse approuvée par nos clients"
    },
    {
      icon: Shield,
      title: "Cadre paisible et sécurisé",
      description: "Un environnement tranquille pour votre sérénité"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-navy to-gold bg-clip-text text-transparent">
            À propos de nous
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Situé à Abidjan, dans le quartier Yopougon à la Baie des Milliardaires, 
              <strong className="text-navy"> Hôtel Résidence Sunday</strong> vous accueille 24h/24.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Profitez d'un cadre chaleureux, paisible et élégant, idéal pour vos séjours 
              professionnels ou vos moments de détente. Notre engagement est de vous offrir 
              une expérience inoubliable dans un environnement raffiné.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-none shadow-elegant hover:shadow-gold transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;