import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Bonjour ! Je suis l'assistant de l'Hôtel Résidence Sunday. Comment puis-je vous aider ?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getKnowledgeBaseResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    // Réponses basées sur la knowledge base
    if (lowerQuestion.includes('prix') || lowerQuestion.includes('tarif') || lowerQuestion.includes('coût')) {
      return "Nos tarifs sont très compétitifs ! Nous proposons des chambres Standard, Double et Suite avec un excellent rapport qualité-prix. Pour connaître nos tarifs exacts, contactez-nous au +225 07 69 69 21 94 ou via WhatsApp.";
    }
    
    if (lowerQuestion.includes('réserver') || lowerQuestion.includes('réservation') || lowerQuestion.includes('booking')) {
      return "Pour réserver, contactez-nous directement au +225 07 69 69 21 94 ou via WhatsApp. Nous sommes ouverts 24h/24 et 7j/7 pour vous accueillir !";
    }
    
    if (lowerQuestion.includes('chambre') || lowerQuestion.includes('room')) {
      return "Nous proposons 3 types de chambres : Standard, Double et Suite. Toutes nos chambres sont équipées de Wi-Fi gratuit, climatisation, télévision à écran plat, salle de bain privative et service de ménage quotidien.";
    }
    
    if (lowerQuestion.includes('adresse') || lowerQuestion.includes('où') || lowerQuestion.includes('localisation') || lowerQuestion.includes('situé')) {
      return "Nous sommes situés à Yopougon, Baie des Milliardaires, Abidjan, Côte d'Ivoire. Un cadre paisible et verdoyant, parfait pour vos détentes !";
    }
    
    if (lowerQuestion.includes('restaurant') || lowerQuestion.includes('manger') || lowerQuestion.includes('repas') || lowerQuestion.includes('petit-déjeuner')) {
      return "Nous avons un restaurant et bar sur place proposant une cuisine locale et internationale. Nos spécialités incluent des plats ivoiriens, grillades et poissons frais très appréciés par nos clients !";
    }
    
    if (lowerQuestion.includes('service') || lowerQuestion.includes('équipement') || lowerQuestion.includes('parking')) {
      return "Nos services incluent : parking privé sécurisé, service de navette/taxi, salle de réunion, réception 24h/24, service de blanchisserie et organisation d'excursions locales.";
    }
    
    if (lowerQuestion.includes('paiement') || lowerQuestion.includes('payer') || lowerQuestion.includes('mobile money')) {
      return "Nous acceptons : espèces (FCFA), Mobile Money (Orange Money, MTN Money, Moov Money) et carte bancaire.";
    }
    
    if (lowerQuestion.includes('horaire') || lowerQuestion.includes('ouvert') || lowerQuestion.includes('heure')) {
      return "Nous sommes ouverts 24h/24 et 7j/7 pour votre confort ! Check-in à partir de 14h, check-out avant 12h.";
    }
    
    if (lowerQuestion.includes('avis') || lowerQuestion.includes('recommandation') || lowerQuestion.includes('témoignage')) {
      return "Nos clients nous recommandent ! Keti Mia : 'Très bel accueil, cadre au top ! Rapport qualité prix excellent !' Brice-Roland Kouassi : 'Cadre doux et paisible parfait pour un retour à la nature. Véritable voyage culinaire, on se sent en famille et en sécurité.'";
    }
    
    if (lowerQuestion.includes('wifi') || lowerQuestion.includes('internet')) {
      return "Oui, nous proposons un Wi-Fi gratuit dans toutes nos chambres et espaces communs !";
    }
    
    if (lowerQuestion.includes('famille') || lowerQuestion.includes('enfant') || lowerQuestion.includes('bébé')) {
      return "Bien sûr ! Nous accueillons les familles avec plaisir. Notre cadre sécurisé et paisible est parfait pour les familles en vacances.";
    }
    
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('téléphone') || lowerQuestion.includes('whatsapp')) {
      return "Contactez-nous au +225 07 69 69 21 94 (téléphone et WhatsApp). Nous sommes disponibles 24h/24 pour répondre à vos questions !";
    }
    
    if (lowerQuestion.includes('bonjour') || lowerQuestion.includes('salut') || lowerQuestion.includes('hello')) {
      return "Bonjour ! Bienvenue à l'Hôtel Résidence Sunday ! 🌟 Comment puis-je vous aider aujourd'hui ?";
    }
    
    if (lowerQuestion.includes('merci') || lowerQuestion.includes('thank')) {
      return "Je vous en prie ! N'hésitez pas si vous avez d'autres questions. Nous avons hâte de vous accueillir à l'Hôtel Résidence Sunday ! 😊";
    }
    
    // Réponse par défaut
    return "Je suis là pour vous renseigner sur l'Hôtel Résidence Sunday ! Vous pouvez me poser des questions sur nos chambres, services, tarifs, localisation, réservations, restaurant... N'hésitez pas ! 😊";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulation d'une réponse avec délai
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getKnowledgeBaseResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Bouton flottant */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className={`rounded-full w-16 h-16 shadow-2xl transition-all duration-300 hover:scale-110 ${
            isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
          } bg-gradient-to-r from-gold to-gold-light hover:shadow-gold animate-pulse`}
          size="lg"
        >
          <MessageCircle className="w-8 h-8 text-navy animate-bounce" />
        </Button>
        
        {/* Badge notification */}
        <div className={`absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-ping ${isOpen ? 'hidden' : ''}`}>
          !
        </div>
      </div>

      {/* Interface de chat */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}>
        <Card className="w-96 h-[500px] shadow-2xl border-2 border-gold/20 bg-gradient-to-b from-white to-accent/10 backdrop-blur-sm">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-navy to-navy-light text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center animate-pulse">
                  <Bot className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Hôtel Résidence Sunday</h3>
                  <p className="text-sm opacity-90">Assistant 24/7</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto h-80 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-accent/30 text-navy border border-gold/30'
                      : 'bg-gradient-to-r from-gold to-gold-light text-navy shadow-md'
                  } transition-all duration-300 hover:scale-105`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot && (
                      <Bot className="w-4 h-4 mt-1 text-gold flex-shrink-0" />
                    )}
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    {!message.isBot && (
                      <User className="w-4 h-4 mt-1 text-navy flex-shrink-0" />
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-accent/30 text-navy border border-gold/30 p-3 rounded-2xl max-w-[80%]">
                  <div className="flex items-center space-x-2">
                    <Bot className="w-4 h-4 text-gold" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gold/20 bg-white/50 backdrop-blur-sm">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="💬 Poser une question..."
                className="flex-1 border-2 border-gold/30 focus:border-gold rounded-full px-4"
              />
              <Button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="rounded-full w-12 h-12 bg-gradient-to-r from-gold to-gold-light hover:shadow-gold transition-all duration-300 hover:scale-110"
              >
                <Send className="w-5 h-5 text-navy" />
              </Button>
            </div>
            <p className="text-xs text-center mt-2 text-navy/60">
              Réponses basées sur les informations de l'hôtel
            </p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ChatBot;