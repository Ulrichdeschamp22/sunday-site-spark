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
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Questions rapides basées sur la FAQ
  const quickReplies = [
    "Quels sont vos tarifs ?",
    "Comment réserver une chambre ?",
    "Où êtes-vous situés ?",
    "Quels services proposez-vous ?",
    "Comment venir depuis Yopougon ?",
    "Avez-vous une piscine ?",
    "Proposez-vous un service de restauration ?",
    "Acceptez-vous le mobile money ?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getKnowledgeBaseResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // Normaliser pour gérer les accents
    
    // Base de connaissances complète avec toutes les informations de l'hôtel
    const knowledgeBase = {
      // Informations sur les prix et chambres
      pricing: {
        keywords: ['prix', 'tarif', 'cout', 'combien', 'montant', 'budget', 'cher', 'abordable', 'reduction', 'promo', 'offre'],
        chambres: {
          standard: {
            nuitee: "25.000 FCFA (de 11h à 11h le lendemain)",
            journee: "15.000 FCFA (lundi au jeudi de 10h à 17h)",
            inclus: "Canal+ formule accès, Climatisation, Petit-Déjeuner, Accès Piscine"
          },
          standardPlus: {
            nuitee: "30.000 FCFA (de 11h à 11h le lendemain)",
            journee: "20.000 FCFA (lundi au jeudi de 10h à 17h)",
            inclus: "Canal+ formule évasion, Climatisation, Petit-Déjeuner, Accès Piscine"
          },
          suiteJunior: {
            nuitee: "40.000 FCFA (de 11h à 11h le lendemain)",
            journee: "25.000 FCFA (lundi au jeudi de 10h à 17h)",
            inclus: "Canal+ formule évasion, Climatisation, Petit-Déjeuner, Accès Piscine, Eau chaude"
          }
        },
        response: () => {
          return `🏷️ **Nos Tarifs Chambres** (Excellent rapport qualité-prix!)\n\n` +
            `📌 **Chambre Standard**: 25.000 FCFA/nuit | 15.000 FCFA/journée\n` +
            `📌 **Chambre Standard Plus**: 30.000 FCFA/nuit | 20.000 FCFA/journée\n` +
            `📌 **Suite Junior**: 40.000 FCFA/nuit | 25.000 FCFA/journée\n\n` +
            `✨ Toutes incluent: Petit-déjeuner, Accès piscine, Canal+ et Climatisation\n` +
            `🎁 **RÉDUCTION à partir de 3 jours de séjour!**\n\n` +
            `📞 Réservez: +225 07 69 69 21 94 (WhatsApp disponible)`;
        }
      },
      
      // Réservations
      reservations: {
        keywords: ['reserver', 'reservation', 'booking', 'disponibilite', 'libre', 'comment reserver', 'je veux reserver', 'j aimerais reserver'],
        response: () => "🎯 **Pour réserver votre séjour:**\n📱 WhatsApp/Téléphone: +225 07 69 69 21 94\n⏰ Disponible 24h/24 et 7j/7\n✅ Réservation simple et rapide\n💳 Paiement: Espèces, Mobile Money (Wave, Orange, MTN, Moov) ou Carte bancaire\n\n*Cliquez sur le bouton 'Réserver maintenant' pour remplir notre formulaire de réservation en ligne!*"
      },
      
      // Chambres et équipements
      rooms: {
        keywords: ['chambre', 'room', 'suite', 'hebergement', 'logement', 'dormir', 'lit', 'equipement chambre', 'confort'],
        response: () => "🛏️ **Nos Types de Chambres:**\n\n" +
          "✨ **Chambre Standard** - Idéale pour voyageurs solo ou couples\n" +
          "✨ **Chambre Standard Plus** - Plus spacieuse avec Canal+ évasion\n" +
          "✨ **Suite Junior** - Luxueuse avec eau chaude\n\n" +
          "**Équipements dans toutes les chambres:**\n" +
          "✅ Climatisation\n✅ Wi-Fi gratuit haut débit\n✅ TV écran plat avec Canal+\n" +
          "✅ Salle de bain privative\n✅ Service de ménage quotidien\n✅ Accès piscine"
      },
      
      // Localisation et accès
      location: {
        keywords: ['adresse', 'ou', 'localisation', 'situe', 'emplacement', 'comment venir', 'se rendre', 'aller', 'acces', 'transport', 'bateau', 'pinasse', 'traversee', 'azito', 'bietry', 'yopougon'],
        response: () => "📍 **Localisation:** Yopougon, Baie des Milliardaires, Abidjan\n\n" +
          "🚤 **Accès depuis Yopougon:**\n" +
          "• Rendez-vous à Yopougon Azito village (terminus wôrô-wôrô)\n" +
          "• Descendre jusqu'au bord de la lagune\n" +
          "• Traversée en pinasse: 2.500 FCFA aller-retour\n" +
          "• Dernier départ: 18h30\n\n" +
          "⛵ **Accès depuis Biétry:**\n" +
          "• Descendre jusqu'au bord lagune (après hôtel Wafou)\n" +
          "• Traversée en bateau: 10.000 FCFA aller-retour\n" +
          "• Dernier départ: 18h30\n\n" +
          "🏝️ Cadre paisible sur une île exclusive!"
      },
      
      // Restaurant et gastronomie
      restaurant: {
        keywords: ['restaurant', 'manger', 'repas', 'petit dejeuner', 'dejeuner', 'diner', 'cuisine', 'plat', 'menu', 'gastronomie', 'nourriture', 'bar', 'boisson', 'boire'],
        menuDetails: {
          entrees: "Avocat au thon (5.000), Salade pommes de terre (6.000), Salade légumes crevettes (6.000)",
          plats: "Poisson grillé (12-20.000), Poulet braisé (10.000), Kedjenou (12-15.000), Agouti (15.000), Lapin (12-15.000)",
          accompagnements: "Attiéké, Alloco, Frites, Igname, Riz (1.000 chacun)",
          boissons: "Bières (1.000-1.500), Vins (8-15.000), Champagne LP/Moët (40-45.000)",
          desserts: "Glaces, Yaourt, Fruits de saison (1.000)"
        },
        response: () => "🍽️ **Restaurant & Bar Sur Place**\n\n" +
          "🎯 **Nos Spécialités:**\n" +
          "• Poisson frais grillé (12.000-20.000 FCFA)\n" +
          "• Kedjenou de poulet/pintade (12.000 FCFA)\n" +
          "• Agouti braisé (15.000 FCFA)\n" +
          "• Poulet braisé (10.000 FCFA)\n" +
          "• Marmite de pêcheur (15.000 FCFA)\n\n" +
          "🥗 **Entrées:** 5.000-6.000 FCFA\n" +
          "🍚 **Accompagnements:** Attiéké, Alloco, Frites (1.000 FCFA)\n" +
          "🍷 **Cave à vins & Champagnes disponibles**\n" +
          "🍺 **Bières locales et importées**\n\n" +
          "✨ Cuisine locale et internationale de qualité!"
      },
      
      // Services et loisirs
      services: {
        keywords: ['service', 'equipement', 'parking', 'piscine', 'activite', 'loisir', 'detente', 'sport', 'jeu', 'animation', 'navette', 'taxi', 'blanchisserie', 'excursion'],
        response: () => "🌟 **Services & Équipements Premium:**\n\n" +
          "🏊 **Loisirs:**\n• Piscine extérieure\n• Baby-foot\n• Balançoires\n• Tir à l'arc\n• Terrasses et jardins privatifs\n\n" +
          "🚗 **Services Pratiques:**\n• Parking privé sécurisé gratuit\n• Service navette/taxi sur demande\n• Réception 24h/24\n• Service de blanchisserie\n• Wi-Fi haut débit gratuit\n\n" +
          "💼 **Business:**\n• Salles de réunion\n• Espaces de coworking\n• Organisation d'événements\n\n" +
          "🌴 Organisation d'excursions locales sur demande"
      },
      
      // Paiements
      payment: {
        keywords: ['paiement', 'payer', 'mobile money', 'orange money', 'mtn', 'wave', 'moov', 'carte', 'espece', 'reglement'],
        response: () => "💳 **Moyens de Paiement Acceptés:**\n\n" +
          "💵 Espèces (FCFA)\n" +
          "📱 **Mobile Money:**\n• Wave\n• Orange Money\n• MTN Money\n• Moov Money\n" +
          "💳 Carte bancaire\n\n" +
          "✅ Paiement sécurisé et facile!"
      },
      
      // Horaires
      hours: {
        keywords: ['horaire', 'ouvert', 'ferme', 'heure', 'check in', 'check out', 'arrivee', 'depart'],
        response: () => "⏰ **Horaires & Disponibilité:**\n\n" +
          "🏨 Hôtel ouvert **24h/24 et 7j/7**\n" +
          "✅ Check-in: À partir de **11h**\n" +
          "✅ Check-out: Avant **11h le lendemain**\n\n" +
          "📞 Réception disponible 24h/24\n" +
          "🚤 Dernier bateau/pinasse: **18h30**"
      },
      
      // Événements et séminaires
      events: {
        keywords: ['evenement', 'seminaire', 'conference', 'reunion', 'mariage', 'anniversaire', 'fete', 'celebration', 'entreprise', 'formation', 'colloque'],
        response: () => "🎉 **Organisation d'Événements:**\n\n" +
          "✨ **Nous accueillons:**\n" +
          "• Séminaires d'entreprise\n• Conférences et formations\n" +
          "• Mariages et anniversaires\n• Réunions d'affaires\n• Lancements de produits\n• Assemblées générales\n\n" +
          "**Nos atouts:**\n" +
          "✅ Salles modulables climatisées\n" +
          "✅ Wi-Fi haut débit\n" +
          "✅ Restauration sur mesure\n" +
          "✅ Hébergement sur place\n" +
          "✅ Cadre inspirant et calme\n" +
          "✅ Parking sécurisé\n\n" +
          "📞 Contactez-nous pour un devis personnalisé: +225 07 69 69 21 94"
      },
      
      // Avis clients
      testimonials: {
        keywords: ['avis', 'temoignage', 'commentaire', 'opinion', 'experience', 'satisfaction', 'recommandation', 'note', 'evaluation'],
        response: () => "⭐ **Avis de nos Clients Satisfaits:**\n\n" +
          "💬 **Keti Mia:** *\"Très bel accueil, cadre au top ! Rapport qualité prix excellent ! Très très satisfaite.\"*\n\n" +
          "💬 **Brice-Roland Kouassi:** *\"Cadre doux et paisible parfait pour un retour à la nature. Véritable voyage culinaire, accueil chaleureux, on se sent en famille et en sécurité.\"*\n\n" +
          "💬 **Kouadio Serge:** *\"Les chambres sont spacieuses, modernes et incroyablement confortables. Se détendre au bord de la piscine est un vrai bonheur !\"*\n\n" +
          "💬 **N'Guessan Christophe:** *\"Chambres lumineuses, propres et ultra-confortables. Se réveiller et profiter de la piscine est un vrai plaisir.\"*\n\n" +
          "🌟 Rejoignez nos clients satisfaits!"
      },
      
      // Contact
      contact: {
        keywords: ['contact', 'telephone', 'whatsapp', 'appeler', 'joindre', 'numero', 'coordonnees'],
        response: () => "📞 **Contactez-nous:**\n\n" +
          "📱 Téléphone & WhatsApp: **+225 07 69 69 21 94**\n" +
          "⏰ Disponible 24h/24 et 7j/7\n" +
          "📍 Yopougon, Baie des Milliardaires, Abidjan\n\n" +
          "💬 N'hésitez pas à nous contacter pour toute question ou réservation!"
      },
      
      // WiFi et connectivité
      wifi: {
        keywords: ['wifi', 'internet', 'connexion', 'reseau', 'connectivite'],
        response: () => "📶 **Wi-Fi Gratuit Haut Débit**\n\n✅ Disponible dans toutes les chambres\n✅ Disponible dans tous les espaces communs\n✅ Connexion rapide et stable\n✅ Idéal pour le télétravail\n✅ Streaming et visioconférence sans problème"
      },
      
      // Familles et enfants
      family: {
        keywords: ['famille', 'enfant', 'bebe', 'familial', 'kid', 'parents'],
        response: () => "👨‍👩‍👧‍👦 **Hôtel Familial par Excellence!**\n\n" +
          "✅ Chambres spacieuses pour familles\n" +
          "✅ Cadre sécurisé et paisible\n" +
          "✅ Piscine adaptée aux enfants\n" +
          "✅ Aires de jeux (balançoires)\n" +
          "✅ Activités ludiques (baby-foot, tir à l'arc)\n" +
          "✅ Menus enfants au restaurant\n" +
          "✅ Personnel attentionné aux besoins des familles\n\n" +
          "🌟 Vos enfants vont adorer leur séjour!"
      }
    };
    
    // Fonction pour trouver la meilleure correspondance
    const findBestMatch = () => {
      let bestMatch = null;
      let maxScore = 0;
      
      for (const [key, category] of Object.entries(knowledgeBase)) {
        const keywords = category.keywords;
        let score = 0;
        
        for (const keyword of keywords) {
          if (lowerQuestion.includes(keyword)) {
            // Donner plus de poids aux mots exacts
            score += keyword.split(' ').length > 1 ? 3 : 2;
            
            // Bonus si le mot est au début de la question
            if (lowerQuestion.startsWith(keyword)) {
              score += 2;
            }
          }
        }
        
        if (score > maxScore) {
          maxScore = score;
          bestMatch = category;
        }
      }
      
      return bestMatch;
    };
    
    // Salutations et politesse
    if (lowerQuestion.match(/^(bonjour|salut|bonsoir|hello|hi|hey|coucou)/)) {
      return "👋 Bonjour et bienvenue à l'Hôtel Résidence Sunday ! 🌟\n\nJe suis votre assistant virtuel disponible 24h/24. Comment puis-je vous aider aujourd'hui ?\n\n" +
        "Vous pouvez me poser des questions sur:\n• Nos chambres et tarifs\n• Les réservations\n• Notre restaurant\n• Les services et activités\n• Comment nous rejoindre\n\nN'hésitez pas, je suis là pour vous! 😊";
    }
    
    if (lowerQuestion.includes('merci') || lowerQuestion.includes('thank')) {
      return "😊 Je vous en prie ! C'est un plaisir de vous aider.\n\nN'hésitez pas si vous avez d'autres questions. Nous avons hâte de vous accueillir à l'Hôtel Résidence Sunday pour un séjour inoubliable ! 🌟\n\n📞 Pour réserver: +225 07 69 69 21 94";
    }
    
    if (lowerQuestion.includes('au revoir') || lowerQuestion.includes('bye') || lowerQuestion.includes('a bientot')) {
      return "👋 Au revoir et à très bientôt !\n\nNous espérons vous accueillir prochainement à l'Hôtel Résidence Sunday. Passez une excellente journée ! 🌟\n\n📞 N'oubliez pas: +225 07 69 69 21 94 pour vos réservations!";
    }
    
    // Chercher la meilleure correspondance
    const match = findBestMatch();
    
    if (match && match.response) {
      return match.response();
    }
    
    // Questions sur les réductions et offres spéciales
    if (lowerQuestion.includes('reduction') || lowerQuestion.includes('promotion') || lowerQuestion.includes('offre')) {
      return "🎁 **Offres Spéciales:**\n\n✨ **RÉDUCTION pour séjours de 3 jours et plus!**\n\n" +
        "Contactez-nous pour connaître nos offres du moment:\n📞 +225 07 69 69 21 94\n\n" +
        "Nous proposons régulièrement des tarifs préférentiels pour:\n• Les séjours longue durée\n• Les groupes\n• Les événements d'entreprise";
    }
    
    // Questions sur la sécurité
    if (lowerQuestion.includes('securite') || lowerQuestion.includes('securise') || lowerQuestion.includes('sur')) {
      return "🔒 **Sécurité & Tranquillité:**\n\n" +
        "✅ Établissement entièrement sécurisé 24h/24\n" +
        "✅ Parking privé surveillé\n" +
        "✅ Cadre paisible sur une île privée\n" +
        "✅ Personnel de sécurité professionnel\n" +
        "✅ Coffres-forts disponibles\n\n" +
        "Votre sécurité et votre confort sont nos priorités!";
    }
    
    // Réponse par défaut enrichie
    return "💬 Je suis l'assistant virtuel de l'Hôtel Résidence Sunday, disponible 24h/24 pour répondre à toutes vos questions!\n\n" +
      "**Voici ce que je peux vous dire sur:**\n" +
      "🏨 Nos chambres et tarifs\n" +
      "📅 Les réservations\n" +
      "🍽️ Notre restaurant et menu\n" +
      "🏊 Nos services et activités\n" +
      "📍 Comment nous rejoindre\n" +
      "💳 Les moyens de paiement\n" +
      "🎉 L'organisation d'événements\n\n" +
      "**Posez-moi votre question plus précisément** et je vous donnerai tous les détails!\n\n" +
      "Exemples: \"Quels sont vos tarifs?\", \"Comment réserver?\", \"Avez-vous une piscine?\"";
  };

  const handleSend = (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    // Garder les questions rapides visibles

    // Simulation d'une réponse avec délai
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getKnowledgeBaseResponse(messageText),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (question: string) => {
    handleSend(question);
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

          {/* Questions rapides en haut */}
          {showQuickReplies && messages.length === 1 && (
            <div className="px-4 py-3 bg-gradient-to-r from-gold/10 to-gold-light/10 border-b border-gold/20">
              <p className="text-xs text-center text-navy/70 font-semibold mb-2">Questions fréquentes :</p>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {quickReplies.slice(0, 4).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(question)}
                    className="text-xs px-2.5 py-1.5 bg-white hover:bg-gold/10 text-navy border border-gold/30 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    {question}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5 justify-center mt-1.5">
                {quickReplies.slice(4).map((question, index) => (
                  <button
                    key={index + 4}
                    onClick={() => handleQuickReply(question)}
                    className="text-xs px-2.5 py-1.5 bg-white hover:bg-gold/10 text-navy border border-gold/30 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

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
                onClick={() => handleSend()}
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