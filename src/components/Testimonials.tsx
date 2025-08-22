import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Keti Mia",
      review: "Très bel accueil, cadre au top ! Rapport qualité prix excellent ! Très très satisfaite.",
      rating: 5
    },
    {
      name: "Brice-Roland Kouassi",
      review: "Le meilleur endroit en ce moment. Cadre doux et paisible parfait pour un retour à la nature. Véritable voyage culinaire, service chaleureux, on se sent en famille et en sécurité. Je recommande vivement !",
      rating: 5
    }
  ];

  return (
    <section id="avis" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-navy to-gold bg-clip-text text-transparent">
            Avis de nos clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de leur expérience à l'Hôtel Résidence Sunday
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gold/20 shadow-elegant hover:shadow-gold transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-gold" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.review}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mr-4">
                    <span className="text-navy font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">Client vérifié</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Rejoignez nos clients satisfaits
          </p>
          <div className="flex items-center justify-center space-x-4 text-gold">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-navy">5.0</span>
            <span className="text-muted-foreground">sur Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;