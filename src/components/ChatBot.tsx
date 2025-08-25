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
  
  // Expose chatbot state globally for WhatsApp button
  useEffect(() => {
    const event = new CustomEvent('chatbotToggle', { detail: { isOpen } });
    window.dispatchEvent(event);
  }, [isOpen]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [collectingReservation, setCollectingReservation] = useState(false);
  const [reservationStep, setReservationStep] = useState(0);
  const [reservationData, setReservationData] = useState({
    nom: '',
    prenom: '',
    heureArrivee: '',
    dateArrivee: '',
    dateDepart: '',
    nombreJours: '',
    telephone: ''
  });
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

  const [lastUserMessage, setLastUserMessage] = useState<string>("");
  
  const processReservation = (userResponse: string) => {
    const reservationSteps = [
      { field: 'nom', question: "Quel est votre nom de famille ?" },
      { field: 'prenom', question: "Quel est votre prénom ?" },
      { field: 'dateArrivee', question: "Quelle est votre date d'arrivée ? (format: JJ/MM/AAAA)" },
      { field: 'heureArrivee', question: "À quelle heure arriverez-vous ?" },
      { field: 'dateDepart', question: "Quelle est votre date de départ ? (format: JJ/MM/AAAA)" },
      { field: 'nombreJours', question: "Combien de jours resterez-vous ?" },
      { field: 'telephone', question: "Quel est votre numéro de téléphone ?" }
    ];

    // Sauvegarder la réponse actuelle
    const currentStep = reservationSteps[reservationStep];
    if (currentStep && reservationStep > 0) {
      setReservationData(prev => ({
        ...prev,
        [currentStep.field]: userResponse
      }));
    }

    // Passer à l'étape suivante
    const nextStep = reservationStep + 1;
    setReservationStep(nextStep);

    if (nextStep < reservationSteps.length) {
      return reservationSteps[nextStep].question;
    } else {
      // Toutes les informations sont collectées, envoyer sur WhatsApp
      const data = { ...reservationData, [currentStep.field]: userResponse };
      const message = `Nouvelle réservation:
Nom: ${data.nom}
Prénom: ${data.prenom}
Date d'arrivée: ${data.dateArrivee}
Heure d'arrivée: ${data.heureArrivee}
Date de départ: ${data.dateDepart}
Nombre de jours: ${data.nombreJours}
Téléphone: ${data.telephone}`;

      const whatsappUrl = `https://wa.me/2250769692194?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      // Réinitialiser la réservation
      setCollectingReservation(false);
      setReservationStep(0);
      setReservationData({
        nom: '',
        prenom: '',
        heureArrivee: '',
        dateArrivee: '',
        dateDepart: '',
        nombreJours: '',
        telephone: ''
      });

      return "✅ Parfait ! J'ai envoyé votre demande de réservation sur WhatsApp. Notre équipe vous contactera très rapidement pour confirmer votre réservation.\n\n📞 Vous pouvez aussi nous appeler directement au +225 07 69 69 21 94";
    }
  };

  const getKnowledgeBaseResponse = (question: string): string => {
    setLastUserMessage(question);
    const lowerQuestion = question.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // Normaliser pour gérer les accents
    
    // Package Détente - Vérifier en premier
    if (lowerQuestion.includes('package detente') || lowerQuestion.includes('excursion') || 
        lowerQuestion.includes('baie') || lowerQuestion.includes('milliardaire') ||
        lowerQuestion.includes('12000') || lowerQuestion.includes('12 000')) {
      return "🌴 **PACKAGE DÉTENTE - BAIE DES MILLIARDAIRES** 🌴\n\n" +
        "💰 **Prix : 12 000 FCFA/personne**\n" +
        "📅 Disponible tous les jours\n" +
        "📍 Île Boulay (Baie des Milliardaires)\n\n" +
        "**✅ Ce que comprend le package :**\n" +
        "• Transport aller-retour en pinasse sécurisée\n" +
        "• Repas : ½ poulet OU ½ poisson + 2 accompagnements (alloco, frites, attiéké)\n" +
        "• Boisson au choix + eau 0,5L\n" +
        "• Dessert (jus ou glace)\n\n" +
        "**🎮 Activités gratuites incluses :**\n" +
        "Piscine, Baby-foot, Canoë, Volley Beach, Jeux de société, Pétanque\n\n" +
        "**⏰ Horaires :**\n" +
        "• Départs : 9h, 10h, 11h, 12h\n" +
        "• Retour : 17h\n\n" +
        "**📍 Point de départ :** Yopougon Azito village\n\n" +
        "📞 **Réservation : 07 69 69 21 94**";
    }
    
    // Vérifier si l'utilisateur veut faire une réservation
    if (lowerQuestion.includes('reservation') || lowerQuestion.includes('reserver') || 
        lowerQuestion.includes('je veux reserver') || lowerQuestion.includes('passer une reservation')) {
      setCollectingReservation(true);
      setReservationStep(0);
      return "Je vais vous aider à passer une réservation. Je vais collecter vos informations étape par étape.\n\nQuel est votre nom de famille ?";
    }

    // Si on est en train de collecter les infos de réservation
    if (collectingReservation) {
      return processReservation(question);
    }
    
    // Base de connaissances complète avec toutes les informations de l'hôtel
    const knowledgeBase = {
      // Informations sur les prix et chambres
      pricing: {
        keywords: ['prix', 'tarif', 'cout', 'combien', 'montant', 'budget', 'cher', 'abordable', 'reduction', 'promo', 'offre', 'package'],
        chambres: {
          packageCouple: {
            nom: "PACKAGE CHAMBRE STANDARD COUPLE",
            tarifs: "55.000 FCFA (via Yopougon/Azito) | 70.000 FCFA (via Biétry/Village)",
            inclus: "Transport aller-retour, Canal+ évasion, Chambre climatisée, Tous repas (déjeuner + dîner + petit-déj), Toutes activités gratuites",
            duree: "24h (12h → 12h le lendemain)"
          },
          standard: {
            nuitee: "25.000 FCFA (de 12h à 12h le lendemain)",
            journee: "15.000 FCFA (lundi au jeudi de 10h à 17h)",
            inclus: "Canal+ formule accès, Climatisation, Petit-Déjeuner, Accès Piscine"
          },
          standardPlus: {
            nuitee: "30.000 FCFA (de 12h à 12h le lendemain)",
            journee: "20.000 FCFA (lundi au jeudi de 10h à 17h)",
            inclus: "Canal+ formule évasion, Climatisation, Petit-Déjeuner, Accès Piscine"
          },
          suiteJunior: {
            nuitee: "40.000 FCFA (de 12h à 12h le lendemain)",
            journee: "25.000 FCFA (lundi au jeudi de 10h à 17h)",
            inclus: "Canal+ formule évasion, Climatisation, Petit-Déjeuner, Accès Piscine, Eau chaude"
          }
        },
        response: () => {
          return `🏷️ Nos Tarifs Chambres (Excellent rapport qualité-prix!)\n\n` +
            `🌟 PACKAGE CHAMBRE STANDARD COUPLE (TOUT COMPRIS):\n` +
            `💑 55.000 FCFA (via Yopougon) | 70.000 FCFA (via Biétry)\n` +
            `✅ Transport aller-retour + Tous repas + Toutes activités\n\n` +
            `📌 Chambre Standard: 25.000 FCFA/nuit | 15.000 FCFA/journée\n` +
            `📌 Chambre Standard Plus: 30.000 FCFA/nuit | 20.000 FCFA/journée\n` +
            `📌 Suite Junior: 40.000 FCFA/nuit | 25.000 FCFA/journée\n\n` +
            `✨ Horaires nuitée: 12h → 12h le lendemain (24h)\n` +
            `🎁 RÉDUCTION à partir de 3 jours de séjour!\n\n` +
            `📞 Réservez: +225 07 69 69 21 94 (WhatsApp disponible)`;
        }
      },
      
      // Réservations
      reservations: {
        keywords: ['reserver', 'reservation', 'booking', 'disponibilite', 'libre', 'comment reserver', 'je veux reserver', 'j aimerais reserver'],
        response: () => "🎯 Pour réserver votre séjour:\n📱 WhatsApp/Téléphone: +225 07 69 69 21 94\n⏰ Disponible 24h/24 et 7j/7\n✅ Réservation simple et rapide\n💳 Paiement: Espèces, Mobile Money (Wave, Orange, MTN, Moov) ou Carte bancaire\n\nCliquez sur le bouton 'Réserver maintenant' pour remplir notre formulaire de réservation en ligne!"
      },
      
      // Chambres et équipements
      rooms: {
        keywords: ['chambre', 'room', 'suite', 'hebergement', 'logement', 'dormir', 'lit', 'equipement chambre', 'confort'],
        response: () => "🛏️ Nos Types de Chambres:\n\n" +
          "✨ Chambre Standard - Idéale pour voyageurs solo ou couples\n" +
          "✨ Chambre Standard Plus - Plus spacieuse avec Canal+ évasion\n" +
          "✨ Suite Junior - Luxueuse avec eau chaude\n\n" +
          "Équipements dans toutes les chambres:\n" +
          "✅ Climatisation\n✅ Wi-Fi gratuit haut débit\n✅ TV écran plat avec Canal+\n" +
          "✅ Salle de bain privative\n✅ Service de ménage quotidien\n✅ Accès piscine"
      },
      
      // Localisation et accès
      location: {
        keywords: ['adresse', 'ou', 'localisation', 'situe', 'emplacement', 'comment venir', 'se rendre', 'aller', 'acces', 'transport', 'bateau', 'pinasse', 'traversee', 'azito', 'bietry', 'yopougon'],
        response: () => "📍 Localisation: Yopougon, Baie des Milliardaires, Abidjan\n\n" +
          "🚤 Accès depuis Yopougon:\n" +
          "• Rendez-vous à Yopougon Azito village (terminus wôrô-wôrô)\n" +
          "• Descendre jusqu'au bord de la lagune\n" +
          "• Traversée en pinasse: 2.500 FCFA aller-retour\n" +
          "• Dernier départ: 18h30\n\n" +
          "⛵ Accès depuis Biétry:\n" +
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
        response: () => "🍽️ Restaurant & Bar Sur Place\n\n" +
          "🎯 Nos Spécialités:\n" +
          "• Poisson frais grillé (12.000-20.000 FCFA)\n" +
          "• Kedjenou de poulet/pintade (12.000 FCFA)\n" +
          "• Agouti braisé (15.000 FCFA)\n" +
          "• Poulet braisé (10.000 FCFA)\n" +
          "• Marmite de pêcheur (15.000 FCFA)\n\n" +
          "🥗 Entrées: 5.000-6.000 FCFA\n" +
          "🍚 Accompagnements: Attiéké, Alloco, Frites (1.000 FCFA)\n" +
          "🍷 Cave à vins & Champagnes disponibles\n" +
          "🍺 Bières locales et importées\n\n" +
          "✨ Cuisine locale et internationale de qualité!"
      },
      
      // Services et loisirs
      services: {
        keywords: ['service', 'equipement', 'parking', 'piscine', 'activite', 'loisir', 'detente', 'sport', 'jeu', 'animation', 'navette', 'taxi', 'blanchisserie', 'excursion', 'ludo', 'babyfoot', 'baby-foot', 'volley', 'arc', 'canoe', 'petanque', 'package detente', 'baie', 'milliardaire'],
        response: () => "🌟 Services & Loisirs Disponibles:\n\n" +
          "🎯 Activités GRATUITES à l'hôtel:\n• Piscine\n• Ludo\n• Baby-foot\n• Volley beach\n• Tir à l'arc\n• Canoë\n• Pétanque\n\n" +
          "🌴 **PACKAGE DÉTENTE SPÉCIAL (12 000 F/personne):**\n" +
          "Journée complète à la Baie des Milliardaires incluant:\n" +
          "• Transport aller-retour en pinasse\n" +
          "• Repas complet avec boissons\n" +
          "• Toutes les activités\n\n" +
          "🚗 Services Pratiques:\n• Parking privé sécurisé gratuit\n• Service navette/taxi sur demande\n• Réception 24h/24\n• Service de blanchisserie\n• Wi-Fi haut débit gratuit\n\n" +
          "💼 Business:\n• Espaces de coworking\n• Organisation d'événements\n\n" +
          "📞 Infos et réservations: 07 69 69 21 94"
      },
      
      // Paiements
      payment: {
        keywords: ['paiement', 'payer', 'mobile money', 'orange money', 'mtn', 'wave', 'moov', 'carte', 'espece', 'reglement'],
        response: () => "💳 Moyens de Paiement Acceptés:\n\n" +
          "💵 Espèces (FCFA)\n" +
          "📱 Mobile Money:\n• Wave\n• Orange Money\n• MTN Money\n• Moov Money\n" +
          "💳 Carte bancaire\n\n" +
          "✅ Paiement sécurisé et facile!"
      },
      
      // Horaires
      hours: {
        keywords: ['horaire', 'ouvert', 'ferme', 'heure', 'check in', 'check out', 'arrivee', 'depart'],
        response: () => "⏰ Horaires & Disponibilité:\n\n" +
          "🏨 Hôtel ouvert 24h/24 et 7j/7\n" +
          "✅ Check-in: À partir de 12h\n" +
          "✅ Check-out: 12h le lendemain (24h de séjour)\n\n" +
          "📞 Réception disponible 24h/24\n" +
          "🚤 Dernier bateau/pinasse: 18h30"
      },
      
      // Événements et séminaires
      events: {
        keywords: ['evenement', 'seminaire', 'conference', 'reunion', 'mariage', 'anniversaire', 'fete', 'celebration', 'entreprise', 'formation', 'colloque'],
        response: () => "🎉 Organisation d'Événements:\n\n" +
          "✨ Nous accueillons:\n" +
          "• Séminaires d'entreprise\n• Conférences et formations\n" +
          "• Mariages et anniversaires\n• Réunions d'affaires\n" +
          "• Lancements de produits\n• Assemblées générales\n\n" +
          "Nos atouts:\n" +
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
        response: () => "⭐ Avis de nos Clients Satisfaits:\n\n" +
          "💬 Keti Mia: \"Très bel accueil, cadre au top ! Rapport qualité prix excellent ! Très très satisfaite.\"\n\n" +
          "💬 Brice-Roland Kouassi: \"Cadre doux et paisible parfait pour un retour à la nature. Véritable voyage culinaire, accueil chaleureux, on se sent en famille et en sécurité.\"\n\n" +
          "💬 Kouadio Serge: \"Les chambres sont spacieuses, modernes et incroyablement confortables. Se détendre au bord de la piscine est un vrai bonheur !\"\n\n" +
          "💬 Kouassi Didier: \"Le confort des chambres et la qualité des services rendent le séjour vraiment agréable. La piscine est un vrai plus pour se relaxer.\"\n\n" +
          "💬 N'Guessan Christophe: \"Chambres lumineuses, propres et ultra-confortables. Se réveiller et profiter de la piscine est un vrai plaisir.\"\n\n" +
          "🌟 Rejoignez nos clients satisfaits!"
      },
      
      // Contact
      contact: {
        keywords: ['contact', 'telephone', 'whatsapp', 'appeler', 'joindre', 'numero', 'coordonnees'],
        response: () => "📞 Contactez-nous:\n\n" +
          "📱 Téléphone & WhatsApp: +225 07 69 69 21 94\n" +
          "⏰ Disponible 24h/24 et 7j/7\n" +
          "📍 Yopougon, Baie des Milliardaires, Abidjan\n\n" +
          "💬 N'hésitez pas à nous contacter pour toute question ou réservation!"
      },
      
      // WiFi et connectivité
      wifi: {
        keywords: ['wifi', 'internet', 'connexion', 'reseau', 'connectivite'],
        response: () => "📶 Wi-Fi Gratuit Haut Débit\n\n✅ Disponible dans toutes les chambres\n✅ Disponible dans tous les espaces communs\n✅ Connexion rapide et stable\n✅ Idéal pour le télétravail\n✅ Streaming et visioconférence sans problème"
      },
      
      // Familles et enfants
      family: {
        keywords: ['famille', 'enfant', 'bebe', 'familial', 'kid', 'parents'],
        response: () => "👨‍👩‍👧‍👦 Hôtel Familial par Excellence!\n\n" +
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
    
    // Fonction améliorée pour trouver la meilleure correspondance
    const findBestMatch = () => {
      let bestMatch = null;
      let maxScore = 0;
      let partialMatches = [];
      
      // Diviser la question en mots individuels pour une recherche plus flexible
      const questionWords = lowerQuestion.split(/\s+/);
      
      for (const [key, category] of Object.entries(knowledgeBase)) {
        const keywords = category.keywords;
        let score = 0;
        let matchedKeywords = [];
        
        // Vérifier chaque mot clé
        for (const keyword of keywords) {
          if (lowerQuestion.includes(keyword)) {
            score += keyword.split(' ').length > 1 ? 3 : 2;
            matchedKeywords.push(keyword);
            
            if (lowerQuestion.startsWith(keyword)) {
              score += 2;
            }
          }
        }
        
        // Vérifier chaque mot de la question individuellement
        for (const word of questionWords) {
          if (word.length > 2) { // Ignorer les mots très courts
            for (const keyword of keywords) {
              if (keyword.includes(word) && !matchedKeywords.includes(keyword)) {
                score += 1; // Score plus faible pour les correspondances partielles
                matchedKeywords.push(keyword);
              }
            }
          }
        }
        
        if (score > 0) {
          partialMatches.push({ category, score, matchedKeywords });
        }
        
        if (score > maxScore) {
          maxScore = score;
          bestMatch = category;
        }
      }
      
      // Si aucune correspondance parfaite mais des correspondances partielles
      if (!bestMatch && partialMatches.length > 0) {
        partialMatches.sort((a, b) => b.score - a.score);
        bestMatch = partialMatches[0].category;
      }
      
      return bestMatch;
    };
    
    // Salutations et politesse
    if (lowerQuestion.match(/^(bonjour|salut|bonsoir|hello|hi|hey|coucou)/)) {
      return "👋 Bonjour et bienvenue à l'Hôtel Résidence Sunday ! 🌟\n\nJe suis votre assistant virtuel disponible 24h/24. Comment puis-je vous aider aujourd'hui ?\n\n" +
        "Vous pouvez me poser des questions sur:\n• Nos chambres et tarifs\n• Les réservations\n• Notre restaurant\n• Les services et activités\n• Comment nous rejoindre\n\nN'hésitez pas, je suis là pour vous! 😊";
    }

    // Questions sur le package couple
    if (lowerQuestion.includes('package') || lowerQuestion.includes('couple') || lowerQuestion.includes('tout compris')) {
      return "🌟 PACKAGE CHAMBRE STANDARD COUPLE (Offre TOUT COMPRIS):\n\n" +
        "💑 Pour couple uniquement - 24h de bonheur total!\n\n" +
        "✅ INCLUS dans le package:\n" +
        "• Transport aller-retour\n" +
        "• Canal+ formule évasion\n" +
        "• Chambre climatisée\n" +
        "• Déjeuner (pour le couple)\n" +
        "• Dîner (pour le couple)\n" +
        "• Petit déjeuner (pour le couple)\n\n" +
        "🎯 Activités GRATUITES illimitées:\n" +
        "• Piscine • Ludo • Baby-foot\n" +
        "• Volley beach • Tir à l'arc\n" +
        "• Canoë • Pétanque\n\n" +
        "💰 TARIFS:\n" +
        "• 55.000 FCFA (via Yopougon/Azito)\n" +
        "• 70.000 FCFA (via Biétry/Village)\n\n" +
        "⏰ Durée: 12h → 12h le lendemain (24h)\n\n" +
        "📞 Réservez vite: +225 07 69 69 21 94";
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
      return "🎁 Offres Spéciales:\n\n✨ RÉDUCTION pour séjours de 3 jours et plus!\n\n" +
        "Contactez-nous pour connaître nos offres du moment:\n📞 +225 07 69 69 21 94\n\n" +
        "Nous proposons régulièrement des tarifs préférentiels pour:\n• Les séjours longue durée\n• Les groupes\n• Les événements d'entreprise";
    }
    
    // Questions sur la sécurité
    if (lowerQuestion.includes('securite') || lowerQuestion.includes('securise') || lowerQuestion.includes('sur')) {
      return "🔒 Sécurité & Tranquillité:\n\n" +
        "✅ Établissement entièrement sécurisé 24h/24\n" +
        "✅ Parking privé surveillé\n" +
        "✅ Cadre paisible sur une île privée\n" +
        "✅ Personnel de sécurité professionnel\n" +
        "✅ Coffres-forts disponibles\n\n" +
        "Votre sécurité et votre confort sont nos priorités!";
    }
    
    // Réponse par défaut - Si aucune correspondance trouvée, donner le numéro de l'hôtel
    return "Je n'ai pas trouvé de réponse précise à votre question dans ma base de connaissances.\n\n" +
      "Pour obtenir une réponse personnalisée et détaillée, je vous invite à contacter directement notre équipe:\n\n" +
      "📞 Téléphone & WhatsApp: +225 07 69 69 21 94\n" +
      "⏰ Disponible 24h/24 et 7j/7\n\n" +
      "Notre équipe se fera un plaisir de répondre à toutes vos questions spécifiques!";
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
      {/* Floating chat button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            className="rounded-full w-16 h-16 bg-gradient-to-br from-gold via-gold/90 to-gold/80 hover:from-gold/90 hover:via-gold hover:to-gold/90 shadow-2xl hover:shadow-gold hover:scale-110 transition-all duration-300 group animate-pulse"
            aria-label="Ouvrir le chat"
          >
            <MessageCircle className="w-7 h-7 text-navy group-hover:scale-110 transition-transform" />
          </Button>
        )}
      </div>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[95vw] sm:w-[450px] max-w-lg">
          <div className="bg-gradient-to-b from-white to-cream/20 dark:from-navy-dark dark:to-navy-light rounded-3xl shadow-2xl border border-gold/30 overflow-hidden animate-slideUp backdrop-blur-lg">
            {/* Header with gradient and glassmorphism */}
            <div className="bg-gradient-to-r from-navy via-navy-light to-navy p-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5"></div>
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold/80 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                    <Bot className="w-7 h-7 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Sunday Assistant</h3>
                    <p className="text-gold/90 text-sm font-medium">Votre conciergerie virtuelle</p>
                  </div>
                </div>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20 rounded-2xl transition-all duration-200 hover:rotate-90"
                  aria-label="Fermer le chat"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Main chat area with fixed height */}
            <div className="h-[calc(100vh-250px)] sm:h-[500px] flex flex-col">
              {/* Welcome section - always visible at top when no messages */}
              {messages.length === 1 && (
                <div className="p-6 bg-gradient-to-b from-gold/5 to-transparent border-b border-gold/10">
                  <div className="text-center space-y-2">
                    <h4 className="text-2xl font-bold bg-gradient-to-r from-navy to-navy-light bg-clip-text text-transparent">
                      Bienvenue à l'Hôtel Résidence Sunday! 🌴
                    </h4>
                    <p className="text-navy-light/80 dark:text-cream/70 text-sm">
                      Je suis votre assistant personnel. Comment puis-je vous aider aujourd'hui?
                    </p>
                  </div>
                </div>
              )}

              {/* Messages or FAQ section */}
              <div 
                ref={messagesEndRef}
                className="flex-1 overflow-y-auto p-4 space-y-4"
              >
                {messages.length === 1 ? (
                  /* FAQ/Quick actions - centered when no conversation */
                  <div className="flex flex-col justify-center h-full space-y-6">
                    <div className="text-center">
                      <p className="text-sm text-navy/60 dark:text-cream/60 font-medium mb-4">
                        Cliquez sur une option pour commencer
                      </p>
                      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                        {[
                          { icon: "📍", text: "Comment venir ?", color: "from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20 border-blue-500/30" },
                          { icon: "🛏️", text: "Voir les chambres", color: "from-purple-500/10 to-purple-600/10 hover:from-purple-500/20 hover:to-purple-600/20 border-purple-500/30" },
                          { icon: "💰", text: "Tarifs", color: "from-green-500/10 to-green-600/10 hover:from-green-500/20 hover:to-green-600/20 border-green-500/30" },
                          { icon: "🍽️", text: "Restaurant", color: "from-orange-500/10 to-orange-600/10 hover:from-orange-500/20 hover:to-orange-600/20 border-orange-500/30" },
                          { icon: "🏊", text: "Services", color: "from-cyan-500/10 to-cyan-600/10 hover:from-cyan-500/20 hover:to-cyan-600/20 border-cyan-500/30" },
                          { icon: "📞", text: "Contact", color: "from-rose-500/10 to-rose-600/10 hover:from-rose-500/20 hover:to-rose-600/20 border-rose-500/30" }
                        ].map((item) => (
                          <button
                            key={item.text}
                            onClick={() => handleQuickReply(item.text)}
                            className={`bg-gradient-to-br ${item.color} border backdrop-blur-sm p-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group`}
                          >
                            <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">{item.icon}</span>
                            <span className="text-navy dark:text-cream font-semibold text-sm">{item.text}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Messages display */
                  <>
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fadeIn`}
                      >
                        <div
                          className={`max-w-[85%] p-4 rounded-2xl shadow-lg ${
                            message.isBot
                              ? 'bg-white dark:bg-navy-light text-navy dark:text-cream border border-gray-200/50 dark:border-navy/30 rounded-tl-none'
                              : 'bg-gradient-to-br from-gold via-gold/95 to-gold/90 text-navy shadow-gold rounded-tr-none'
                          }`}
                        >
                          <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                          <span className="text-xs opacity-60 mt-2 block">
                            {message.timestamp.toLocaleTimeString('fr-FR', { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </span>
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex justify-start animate-fadeIn">
                        <div className="bg-white dark:bg-navy-light p-4 rounded-2xl rounded-tl-none shadow-lg border border-gray-200/50 dark:border-navy/30">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 bg-gradient-to-br from-gold to-gold/70 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                            <span className="w-2.5 h-2.5 bg-gradient-to-br from-gold to-gold/70 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-2.5 h-2.5 bg-gradient-to-br from-gold to-gold/70 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Input area - always at bottom */}
              <div className="p-4 border-t border-gold/20 bg-gradient-to-b from-white/50 to-cream/30 dark:from-navy-dark/50 dark:to-navy-light/50 backdrop-blur-sm">
                <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Écrivez votre message ici..."
                      className="w-full px-5 py-3 pr-12 border-2 border-gold/30 rounded-2xl bg-white/80 dark:bg-navy-light/80 backdrop-blur-sm text-navy dark:text-cream placeholder-navy/40 dark:placeholder-cream/40 focus:outline-none focus:ring-3 focus:ring-gold/30 focus:border-gold/50 transition-all text-sm font-medium"
                      disabled={isTyping}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-navy/30 dark:text-cream/30">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    disabled={!inputValue.trim() || isTyping}
                    className="rounded-2xl bg-gradient-to-br from-gold via-gold/95 to-gold/90 hover:from-gold/90 hover:via-gold hover:to-gold text-navy px-6 py-3 shadow-lg hover:shadow-gold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 font-semibold"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;