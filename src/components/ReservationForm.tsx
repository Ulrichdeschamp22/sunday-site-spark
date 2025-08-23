import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, User, Phone, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ReservationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    dateReservation: '',
    heureReservation: '',
    nombreJours: '',
    telephone: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatWhatsAppMessage = () => {
    const message = `🏨 *NOUVELLE RÉSERVATION - Hôtel Résidence Sunday*

👤 *Client:* ${formData.prenom} ${formData.nom}
📞 *Téléphone:* ${formData.telephone}

📅 *Date d'arrivée:* ${new Date(formData.dateReservation).toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}
🕐 *Heure d'arrivée:* ${formData.heureReservation}
📆 *Durée du séjour:* ${formData.nombreJours} jour(s)

Merci de confirmer la disponibilité et de me communiquer le tarif.

_Message envoyé depuis le site web de l'Hôtel Résidence Sunday_`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérifier que tous les champs sont remplis
    if (!formData.nom || !formData.prenom || !formData.dateReservation || 
        !formData.heureReservation || !formData.nombreJours || !formData.telephone) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    const whatsappMessage = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/2250769692194?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
    
    // Réinitialiser le formulaire
    setFormData({
      nom: '',
      prenom: '',
      dateReservation: '',
      heureReservation: '',
      nombreJours: '',
      telephone: ''
    });
  };

  // Obtenir la date d'aujourd'hui pour le minimum
  const today = new Date().toISOString().split('T')[0];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-white border-2 border-gold/20 rounded-2xl">
        <DialogHeader className="text-center pb-4">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-navy to-gold bg-clip-text text-transparent">
            Réserver votre séjour
          </DialogTitle>
          <p className="text-muted-foreground">
            Remplissez vos informations pour une réservation rapide
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nom et Prénom */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="prenom" className="text-navy font-medium">
                <User className="w-4 h-4 inline mr-1" />
                Prénom
              </Label>
              <Input
                id="prenom"
                type="text"
                value={formData.prenom}
                onChange={(e) => handleInputChange('prenom', e.target.value)}
                className="border-gold/30 focus:border-gold"
                placeholder="Votre prénom"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nom" className="text-navy font-medium">
                Nom
              </Label>
              <Input
                id="nom"
                type="text"
                value={formData.nom}
                onChange={(e) => handleInputChange('nom', e.target.value)}
                className="border-gold/30 focus:border-gold"
                placeholder="Votre nom"
                required
              />
            </div>
          </div>

          {/* Date et Heure */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="dateReservation" className="text-navy font-medium">
                <Calendar className="w-4 h-4 inline mr-1" />
                Date d'arrivée
              </Label>
              <Input
                id="dateReservation"
                type="date"
                value={formData.dateReservation}
                onChange={(e) => handleInputChange('dateReservation', e.target.value)}
                className="border-gold/30 focus:border-gold"
                min={today}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="heureReservation" className="text-navy font-medium">
                <Clock className="w-4 h-4 inline mr-1" />
                Heure d'arrivée
              </Label>
              <Select 
                value={formData.heureReservation} 
                onValueChange={(value) => handleInputChange('heureReservation', value)}
              >
                <SelectTrigger className="border-gold/30 focus:border-gold">
                  <SelectValue placeholder="Choisir l'heure" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 24 }, (_, i) => {
                    const hour = i.toString().padStart(2, '0');
                    return (
                      <SelectItem key={i} value={`${hour}:00`}>
                        {hour}:00
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Nombre de jours */}
          <div className="space-y-2">
            <Label htmlFor="nombreJours" className="text-navy font-medium">
              📅 Nombre de jours
            </Label>
            <Select 
              value={formData.nombreJours} 
              onValueChange={(value) => handleInputChange('nombreJours', value)}
            >
              <SelectTrigger className="border-gold/30 focus:border-gold">
                <SelectValue placeholder="Durée du séjour" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 30 }, (_, i) => (
                  <SelectItem key={i + 1} value={`${i + 1}`}>
                    {i + 1} jour{i > 0 ? 's' : ''}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Téléphone */}
          <div className="space-y-2">
            <Label htmlFor="telephone" className="text-navy font-medium">
              <Phone className="w-4 h-4 inline mr-1" />
              Numéro de téléphone
            </Label>
            <Input
              id="telephone"
              type="tel"
              value={formData.telephone}
              onChange={(e) => handleInputChange('telephone', e.target.value)}
              className="border-gold/30 focus:border-gold"
              placeholder="+225 XX XX XX XX XX"
              required
            />
          </div>

          {/* Info box */}
          <Card className="p-3 bg-accent/20 border-gold/30">
            <p className="text-sm text-navy text-center">
              <MessageCircle className="w-4 h-4 inline mr-1" />
              Vos informations seront envoyées via WhatsApp pour confirmation
            </p>
          </Card>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-gold/30 text-navy hover:bg-gold/10"
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-gold to-gold-light hover:shadow-gold text-navy font-semibold"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Envoyer la demande
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationForm;