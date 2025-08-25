import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Calendar, Clock, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

const Reservation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    dateArrivee: '',
    heureArrivee: '',
    dateDepart: '',
    typeHebergement: '',
    nombrePersonnes: '',
    telephone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatWhatsAppMessage = () => {
    return `🏨 *NOUVELLE RÉSERVATION - Hôtel Résidence Sunday*\n\n` +
      `👤 *Client:* ${formData.prenom} ${formData.nom}\n` +
      `📅 *Arrivée:* ${formData.dateArrivee} à ${formData.heureArrivee}\n` +
      `📅 *Départ:* ${formData.dateDepart || 'Non précisé'}\n` +
      `🛏️ *Type d'hébergement:* ${formData.typeHebergement}\n` +
      `👥 *Nombre de personnes:* ${formData.nombrePersonnes}\n` +
      `📱 *Téléphone:* ${formData.telephone}\n` +
      `📧 *Email:* ${formData.email || 'Non fourni'}\n` +
      `💬 *Message:* ${formData.message || 'Aucun message'}\n\n` +
      `Merci de confirmer la disponibilité et le tarif.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.prenom || !formData.nom || !formData.dateArrivee || !formData.typeHebergement || !formData.telephone) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive"
      });
      return;
    }

    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/2250769692194?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirection vers WhatsApp",
      description: "Votre demande de réservation va être envoyée via WhatsApp",
    });
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[30vh] bg-gradient-to-br from-navy via-navy-light to-gold/30 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy-dark/80" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Réservation
          </h1>
          <p className="text-lg md:text-xl text-white/90 animate-fade-in">
            Réservez votre séjour à la Baie des Milliardaires
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-background to-muted/10 shadow-elegant">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-navy flex items-center">
                    <Users className="w-6 h-6 mr-2 text-gold" />
                    Informations personnelles
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="prenom">Prénom *</Label>
                      <Input
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="nom">Nom *</Label>
                      <Input
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="telephone">Téléphone *</Label>
                      <Input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="+225 XX XX XX XX XX"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email (optionnel)</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Booking Details */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-navy flex items-center">
                    <Calendar className="w-6 h-6 mr-2 text-gold" />
                    Détails de la réservation
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dateArrivee">Date d'arrivée *</Label>
                      <Input
                        id="dateArrivee"
                        name="dateArrivee"
                        type="date"
                        value={formData.dateArrivee}
                        onChange={handleInputChange}
                        min={today}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="heureArrivee">Heure d'arrivée *</Label>
                      <Select onValueChange={(value) => handleSelectChange('heureArrivee', value)} required>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Sélectionnez l'heure" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 24 }, (_, i) => (
                            <SelectItem key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                              {`${i.toString().padStart(2, '0')}:00`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dateDepart">Date de départ (optionnel)</Label>
                      <Input
                        id="dateDepart"
                        name="dateDepart"
                        type="date"
                        value={formData.dateDepart}
                        onChange={handleInputChange}
                        min={formData.dateArrivee || today}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="typeHebergement">Type d'hébergement *</Label>
                      <Select onValueChange={(value) => handleSelectChange('typeHebergement', value)} required>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Sélectionnez le type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Chambre Standard - Nuitée">Chambre Standard - Nuitée (25.000 FCFA)</SelectItem>
                          <SelectItem value="Chambre Standard Plus - Nuitée">Chambre Standard Plus - Nuitée (30.000 FCFA)</SelectItem>
                          <SelectItem value="Suite Junior - Nuitée">Suite Junior - Nuitée (40.000 FCFA)</SelectItem>
                          <SelectItem value="Chambre Standard - Journée">Chambre Standard - Journée (15.000 FCFA)</SelectItem>
                          <SelectItem value="Chambre Standard Plus - Journée">Chambre Standard Plus - Journée (20.000 FCFA)</SelectItem>
                          <SelectItem value="Suite Junior - Journée">Suite Junior - Journée (25.000 FCFA)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="nombrePersonnes">Nombre de personnes *</Label>
                    <Select onValueChange={(value) => handleSelectChange('nombrePersonnes', value)} required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Sélectionnez le nombre" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => (
                          <SelectItem key={i + 1} value={(i + 1).toString()}>
                            {i + 1} {i === 0 ? 'personne' : 'personnes'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Additional Message */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-navy flex items-center">
                    <MessageCircle className="w-6 h-6 mr-2 text-gold" />
                    Message additionnel
                  </h2>
                  
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Demandes spéciales, questions, ou informations supplémentaires..."
                    rows={4}
                  />
                </div>

                {/* Info Card */}
                <Card className="p-6 bg-gold/10 border-gold/30">
                  <h3 className="font-semibold text-navy mb-2">📱 Confirmation via WhatsApp</h3>
                  <p className="text-muted-foreground text-sm">
                    En cliquant sur "Envoyer la réservation", vous serez redirigé vers WhatsApp pour finaliser votre demande. 
                    Notre équipe vous répondra dans les plus brefs délais avec la confirmation et les détails de paiement.
                  </p>
                </Card>

                {/* Submit Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    variant="gold" 
                    size="lg"
                    className="flex-1"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Envoyer la réservation via WhatsApp
                  </Button>
                  
                  <a href="tel:+2250769692194" className="flex-1">
                    <Button 
                      type="button"
                      variant="outline" 
                      size="lg"
                      className="w-full"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Appeler la réception
                    </Button>
                  </a>
                </div>
              </form>
            </Card>

            {/* Contact Info */}
            <Card className="mt-8 p-8 bg-gradient-to-br from-navy to-navy-dark text-white">
              <h3 className="text-2xl font-bold mb-6">Besoin d'aide ?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-gold">📍 Adresse</h4>
                  <p className="text-white/90">Yopougon, Baie des Milliardaires, Abidjan</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gold">📱 Contact</h4>
                  <p className="text-white/90">+225 07 69 69 21 94</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gold">🕐 Horaires</h4>
                  <p className="text-white/90">Ouvert 24h/24, 7j/7</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gold">✉️ WhatsApp</h4>
                  <p className="text-white/90">Disponible pour réservation rapide</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reservation;