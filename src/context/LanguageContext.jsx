import { createContext, useContext, useState } from 'react';

const translations = {
  FR: {
    nav: {
      about: 'A propos de moi',
      conferences: 'Conférences',
      formations: 'Formations',
      books: 'Livres',
      contact: 'Contact',
    },
    hero: {
      tagline: 'EXPERT EN COPROPRIÉTÉ DEPUIS PLUS DE 40 ANS',
      title: 'Gestion de Copropriétés',
      titleAccent: 'Formation Spécialisée',
      subtitle: 'Jean-Pierre Lannoy accompagne copropriétaires et syndics en Belgique, en France et au Québec. Conseil, gestion et formation pour une copropriété maîtrisée.',
      cta: 'Prendre rendez-vous',
      conferences: 'Découvrir CoPro Academy',
    },
  about: {
    bio1: 'Depuis plus de 40 ans, Jean-Pierre Lannoy s\'est imposé comme une référence incontournable dans le domaine de la copropriété en Belgique, en France et au Québec.',
    bio2: 'Syndic, formateur, conférencier et auteur de 6 ouvrages publiés aux éditions Anthemis, il met son expertise au service des copropriétaires, syndics et professionnels de l\'immobilier.',
    bio3: 'Ancien président du CEFIM, il a contribué à structurer et professionnaliser le secteur à travers des formations certifiées, des conférences internationales et un accompagnement terrain concret.',
    bio4: 'Son approche conjugue rigueur juridique, sens pédagogique et expérience du terrain — pour une copropriété mieux gérée, plus sereine et durable.',
  },
    stats: {
    assemblies: 'Assemblées sur la gestion copropriétés',
    books: 'Livres',
    training: 'De formation',
    conferences: 'Conférences internationales',
  },
  agenda: {
    title: 'AGENDA 2026',
    event1: 'Salon de la copropriété et l\'Habitat',
    event2: 'Salon de la copropriété et de l\'Habitat',
    event3: 'Salon de la copropriété et de l\'Habitat',
    cta: 'Nous contacter',
    conferences: 'CONFÉRENCES',
  },
  formations: {
    subtitle: 'Mes formations',
    title: 'Copro Academy',
    cta: 'Découvrir',
    card1: {
      title: 'Formations certifiées par l\'IDI',
      desc: 'Formations reconnues et certifiées IDI, garantissant un apprentissage de qualité conforme aux standards sectoriels. Programmes conçus pour une montée en compétence progressive et durable.',
    },
    card2: {
      title: 'Formations en ligne via LMS',
      desc: 'Bénéficiez de formations modulaires, accessibles à tout moment, 24h/24 et 7j/7. Apprenez à votre rythme grâce aux cours en ligne adaptés aux disponibilités.',
    },
    card3: {
      title: 'Formations sur mesure',
      desc: 'Nous adaptons chaque formation aux besoins réels de nos clients. Après analyse de leur problématique, nous concevons un parcours personnalisé mêlant théorie, pratique et accompagnement ciblé.',
    },
  },
    books: {
    title: 'MES LIVRES',
    book1: { title: 'La gestion administrative d\'une copropriété' },
    book2: { title: 'La gestion technique d\'une copropriété' },
    book3: { title: 'La gestion financière d\'une copropriété' },
    book4: { title: 'Les copropriétés en difficulté : Constats et solutions' },
    book5: { title: 'De la prévention à la résolution des conflits en copropriété' },
    book6: { title: 'Forum de l\'Immobilier', role: 'Membre du Comité de Rédaction' },
    cta: 'Boutique'
  },
    contact: {
    title: 'PRENDRE CONTACT',
    name: 'Votre nom',
    email: 'Votre email',
    message: 'Message',
    send: 'Envoyer',

  }
  },
    

  EN: {
    nav: {
      about: 'About me',
      conferences: 'Conferences',
      formations: 'Training',
      books: 'Books',
      contact: 'Contact',
    },
    hero: {
      tagline: 'EXPERT IN CO-OWNERSHIP FOR OVER 40 YEARS',
      title: 'Co-ownership Management',
      titleAccent: 'Specialized Training',
      subtitle: 'Jean-Pierre Lannoy supports co-owners and property managers in Belgium, France and Quebec. Advice, management and training for a well-managed co-ownership.',
      cta: 'Book an appointment',
      conferences: 'Discover CoPro Academy'
    },
  about: {
    bio1: 'For over 40 years, Jean-Pierre Lannoy has established himself as a leading authority in co-ownership management across Belgium, France and Quebec.',
    bio2: 'Property manager, trainer, speaker and author of 6 books published by Anthemis, he brings his expertise to co-owners, property managers and real estate professionals.',
    bio3: 'As former president of CEFIM, he has helped structure and professionalize the sector through certified training programs, international conferences and hands-on field support.',
    bio4: 'His approach combines legal rigor, teaching skills and field experience — for co-ownership that is better managed, more peaceful and sustainable.',
  },
     stats: {
    assemblies: 'Assemblies on co-ownership management',
    books: 'Books',
    training: 'Of training',
    conferences: 'International conferences',
  },
   agenda: {
    title: 'AGENDA 2026',
    event1: 'Co-ownership and Housing Fair',
    event2: 'Co-ownership and Housing Fair',
    event3: 'Co-ownership and Housing Fair',
    cta: 'Contact us',
    conferences: 'CONFERENCES',
  },
    formations: {
    subtitle: 'My training courses',
    title: 'Copro Academy',
    cta: 'Discover',
    card1: {
      title: 'IDI-certified training',
      desc: 'Recognized and IDI-certified training programs, ensuring quality learning in line with industry standards. Designed for progressive and lasting skill development.',
    },
    card2: {
      title: 'Online training via LMS',
      desc: 'Benefit from modular training, accessible anytime, 24/7. Learn at your own pace with online courses adapted to your availability.',
    },
    card3: {
      title: 'Tailored training',
      desc: 'We adapt each training to the real needs of our clients. After analyzing their situation, we design a personalized path combining theory, practice and targeted support.',
    }
  

  },
    books: {
    title: 'MY BOOKS',
    book1: { title: 'Administrative management of a co-ownership' },
    book2: { title: 'Technical management of a co-ownership' },
    book3: { title: 'Financial management of a co-ownership' },
    book4: { title: 'Co-ownerships in difficulty: Observations and solutions' },
    book5: { title: 'From prevention to conflict resolution in co-ownership' },
    book6: { title: 'Real Estate Forum', role: 'Member of the Editorial Committee' },
    cta: 'Shop'
  },
    contact: {
    title: 'GET IN TOUCH',
    name: 'Your name',
    email: 'Your email',
    message: 'Message',
    send: 'Send',
    bio1: 'More than four decades navigating co-ownership, from Belgium to Quebec, have taught me one thing:',
    bio2: 'my expertise is never more useful than when it is shared.',
    bio3: 'Former president of CEFIM',
    bio4: 'Let\'s put my experience at the service of your projects.',
  }
  },
  NL: {
    nav: {
      about: 'Over mij',
      conferences: 'Conferenties',
      formations: 'Opleidingen',
      books: 'Boeken',
      contact: 'Contact',
    },
    hero: {
      tagline: 'EXPERT IN MEDE-EIGENDOM SINDS MEER DAN 40 JAAR',
      title: 'Beheer van Mede-eigendom',
      titleAccent: 'Gespecialiseerde Opleiding',
      subtitle: 'Jean-Pierre Lannoy begeleidt mede-eigenaars en syndici in België, Frankrijk en Quebec. Advies, beheer en opleiding voor een beheerste mede-eigendom.',
      cta: 'Maak een afspraak',
      conferences: 'Ontdek CoPro Academy'
    },
  about: {
    bio1: 'Gedurende meer dan 40 jaar heeft Jean-Pierre Lannoy zich gevestigd als een toonaangevende autoriteit op het gebied van mede-eigendom in België, Frankrijk en Quebec.',
    bio2: 'Syndicus, opleider, spreker en auteur van 6 boeken uitgegeven door Anthemis, stelt hij zijn expertise ter beschikking van mede-eigenaars, syndici en vastgoedprofessionals.',
    bio3: 'Als voormalig voorzitter van CEFIM heeft hij bijgedragen aan de structurering en professionalisering van de sector via gecertificeerde opleidingen, internationale conferenties en concrete terreinbegeleiding.',
    bio4: 'Zijn aanpak combineert juridische strengheid, pedagogisch inzicht en terreinervaring — voor een mede-eigendom die beter beheerd, serener en duurzamer is.',
  },
    stats: {
    assemblies: 'Vergaderingen over mede-eigendom beheer',
    books: 'Boeken',
    training: 'Uur opleiding',
    conferences: 'Internationale conferenties',
  },
    agenda: {
    title: 'AGENDA 2026',
    event1: 'Salon voor Mede-eigendom en Habitat',
    event2: 'Salon voor Mede-eigendom en Habitat',
    event3: 'Salon voor Mede-eigendom en Habitat',
    cta: 'Neem contact op',
    conferences: 'CONFERENTIES',
  },
    formations: {
    subtitle: 'Mijn opleidingen',
    title: 'Copro Academy',
    cta: 'Ontdekken',
    card1: {
      title: 'IDI-gecertificeerde opleidingen',
      desc: 'Erkende en IDI-gecertificeerde opleidingen die kwaliteitsvol leren garanderen in lijn met sectorstandaarden. Programma\'s ontworpen voor progressieve en duurzame competentieontwikkeling.',
    },
    card2: {
      title: 'Online opleidingen via LMS',
      desc: 'Profiteer van modulaire opleidingen, op elk moment toegankelijk, 24u/24 en 7d/7. Leer op uw eigen tempo dankzij online cursussen aangepast aan uw beschikbaarheid.',
    },
    card3: {
      title: 'Opleidingen op maat',
      desc: 'Wij passen elke opleiding aan de werkelijke behoeften van onze klanten aan. Na analyse van hun problematiek ontwerpen we een gepersonaliseerd traject dat theorie, praktijk en gerichte begeleiding combineert.',
    }
  },
    books: {
    title: 'MIJN BOEKEN',
    book1: { title: 'Het administratief beheer van een mede-eigendom' },
    book2: { title: 'Het technisch beheer van een mede-eigendom' },
    book3: { title: 'Het financieel beheer van een mede-eigendom' },
    book4: { title: 'Mede-eigendommen in moeilijkheden: Vaststellingen en oplossingen' },
    book5: { title: 'Van preventie tot conflictoplossing in mede-eigendom' },
    book6: { title: 'Vastgoedforum', role: 'Lid van de Redactiecommissie' },
    cta: 'winkel'
  },
    contact: {
    title: 'NEEM CONTACT OP',
    name: 'Uw naam',
    email: 'Uw e-mail',
    message: 'Bericht',
    send: 'Verzenden',
    bio1: 'Meer dan vier decennia navigeren in mede-eigendom, van België tot Quebec, hebben mij één ding geleerd:',
    bio2: 'mijn expertise is nooit nuttiger dan wanneer ze gedeeld wordt.',
    bio3: 'Voormalig voorzitter van CEFIM',
    bio4: 'Laten we mijn ervaring ten dienste stellen van uw projecten.',
  }
}

  };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState('FR');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
      value = value?.[k];
    }
    return value ?? key;
  };

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);