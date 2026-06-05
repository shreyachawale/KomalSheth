import Liveevent1 from '../assets/Live Event 1.mp4';
import pancake from '../assets/99pan.jpg';
import barclays from '../assets/barclays.jpg';
import abk from '../assets/abk.mp4';
import deli from '../assets/Happiness Deli.jpeg';
import Publicspeaking from '../assets/Public speaking.mp4';
import Foodworkshop from '../assets/Food Workshop.mp4'
import Artworkshop from '../assets/Art Workshop.mp4';
import tarot from '../assets/Tarot.jpg';
import Publicspeaking1 from '../assets/Publicspeaking.mp4'
import event from '../assets/Live events.jpeg'
import interview from '../assets/Interviews.mp4';
import wedding from '../assets/Wedding.mp4';
import interview2 from '../assets/Interview2.mp4';
import celebrity from '../assets/Celebrity.mp4';

export interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  caption?: string;
}

export interface CategoryCard {
  id: string;
  title: string;
  coverImage?: string;
  video?: string;
  gallery: GalleryItem[];
}

export interface ClientCard {
  id: string;
  name: string;
  image?: string;
  video?: string;
  description: string;
  caseStudy?: string;
}

export interface WorkshopCategory {
  id: string;
  title: string;
  coverImage: string;
  video?: string;
  gallery: GalleryItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  photo: string;
  review: string;
}

export const heroData = {
  name: 'Komal Sheth',
  tagline: 'Presenter | Emcee | Business Consultant | Workshop Facilitator | Tarot Reader',
  intro:
    'A dynamic professional who brings energy, elegance, and expertise to every stage — from live events and TV shows to business consulting and creative workshops.',
  image:
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
};

export const emceeCategories: CategoryCard[] = [
  {
    id: 'live-events',
    title: 'Live Events',
    coverImage: event,
    gallery: [
      { type: 'video', src: Liveevent1, caption: 'Live Event Hosting' },
      { type: 'image', src: 'https://images.pexels.com/photos/2609/pexels-photo-2609.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Audience Engagement' },
      { type: 'image', src: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Stage Performance' },
      { type: 'image', src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Event Opening' },
    ],
  },
  {
    id: 'digital-tv',
    title: 'Digital / TV Shows',
    video : interview,
    gallery: [
      { type: 'image', src: 'https://images.pexels.com/photos/2580331/pexels-photo-2580331.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'TV Show Hosting' },
      { type: 'image', src: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Digital Broadcast' },
      { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', poster: 'https://images.pexels.com/photos/2580331/pexels-photo-2580331.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Showreel Clip' },
    ],
  },
  {
    id: 'weddings',
    title: 'Weddings',
    video: wedding,
    gallery: [
      { type: 'image', src: 'https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Wedding Emceeing' },
      { type: 'image', src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Ceremony Hosting' },
      { type: 'image', src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Reception Night' },
      { type: 'image', src: 'https://images.pexels.com/photos/2959343/pexels-photo-2959343.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Sangeet Night' },
    ],
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    video : Publicspeaking1,
    gallery: [
      { type: 'image', src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Corporate Gala' },
      { type: 'image', src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Conference Stage' },
      { type: 'image', src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Award Ceremony' },
    ],
  },
  {
    id: 'interviews',
    title: 'Interviews',
    video : interview2,
    gallery: [
      { type: 'image', src: 'https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Interview Session' },
      { type: 'image', src: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Panel Discussion' },
      { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', poster: 'https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Interview Highlight' },
    ],
  },
  {
    id: 'celebrity-hni',
    title: 'Celebrity & HNI Events',
    video: celebrity,
    gallery: [
      { type: 'image', src: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Celebrity Event' },
      { type: 'image', src: 'https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'VIP Gathering' },
      { type: 'image', src: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'High-profile Evening' },
    ],
  },
];

export const consultantData = {
  title: 'Business Consultant',
  subtitle:
    'Helping brands grow through business development, digital marketing, and strategic media outreach.',
  services: ['Business Development', 'Digital Marketing', 'PR & Media Outreach'],
  clients: [
    {
      id: 'happiness-deli',
      name: 'Happiness Deli',
      image: deli,
      description: 'A lifestyle brand focused on curating joyful experiences across Delhi.',
      caseStudy:
        'Helped Happiness Deli scale their event portfolio by 3x through targeted digital campaigns and strategic influencer partnerships.',
    },
    {
      id: '99-pancakes',
      name: '99 Pancakes',
      image: pancake,
      description: 'A popular food chain known for its creative pancake offerings.',
      caseStudy:
        'Drove 40% footfall increase through local SEO, social media engagement, and community event collaborations.',
    },
    {
      id: 'abk-media',
      name: 'ABK Media',
      video: abk,
      description: 'Red carpet event for Vietnamese film launch.',
      caseStudy:
        'Expanded their client base by 60% through PR placements in top-tier publications and media outreach strategy.',
    },
  ] as ClientCard[],
};

export const workshopData = {
  categories: [
    {
      id: 'food-workshops',
      title: 'Food Workshops',
      video: Foodworkshop,
      gallery: [
        { type: 'image', src: 'https://images.pexels.com/photos/37646/pexels-photo-37646.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Culinary Workshop' },
        { type: 'image', src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Cooking Session' },
        { type: 'image', src: 'https://images.pexels.com/photos/1126756/pexels-photo-1126756.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Food Presentation' },
      ],
    },
    {
      id: 'art-workshops',
      title: 'Art Workshops',
      video: Artworkshop,
      gallery: [
        { type: 'image', src: 'https://images.pexels.com/photos/1762862/pexels-photo-1762862.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Art Workshop' },
        { type: 'image', src: 'https://images.pexels.com/photos/2859724/pexels-photo-2859724.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Painting Session' },
        { type: 'image', src: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Creative Expression' },
      ],
    },
    {
      id: 'public-speaking',
      title: 'Public Speaking Workshops',
      video: Publicspeaking1,
      gallery: [
        { type: 'image', src: 'https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Public Speaking' },
        { type: 'image', src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Workshop Session' },
      ],
    },
    {
      id: 'corporate-workshops',
      title: 'Corporate Workshops',
      video: Publicspeaking,
      gallery: [
        { type: 'image', src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Corporate Training' },
        { type: 'image', src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Team Building' },
      ],
    },
  ] as WorkshopCategory[],
  featuredClient: {
    name: 'Barclays',
    logo: barclays ,
    description: 'Facilitated leadership and communication workshops for Barclays teams.',
  },
};

export const tarotData = {
  title: 'Personalized Tarot Sessions',
  description:
    'Personalized tarot sessions for wisdom seekers seeking clarity, guidance, and self-reflection.',
  badge: 'Available By Appointment Only',
  cta: 'Book A Session',
  image: tarot,
};

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Riya Mehta',
    designation: 'Event Director, Luxe Events',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    review:
      'Komal brought an unmatched energy to our gala. Her ability to engage the audience while maintaining elegance is truly rare. Every moment felt effortless.',
  },
  {
    id: '2',
    name: 'Arjun Kapoor',
    designation: 'Marketing Head, 99 Pancakes',
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    review:
      'Her digital marketing strategy transformed our brand presence. We saw measurable growth within weeks. Komal understands both the creative and analytical side.',
  },
  {
    id: '3',
    name: 'Natasha Singh',
    designation: 'Founder, Happiness Delhi',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    review:
      'Working with Komal on our brand strategy was a game-changer. She brings clarity, creativity, and commitment to every project she touches.',
  },
  {
    id: '4',
    name: 'Vikram Desai',
    designation: 'VP, Barclays India',
    photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
    review:
      'The corporate workshop she facilitated was insightful and engaging. Our team left with real, actionable takeaways. Highly recommended.',
  },
];

export const contactData = {
  email: 'komal@komalsheth.com',
  whatsapp: 'https://wa.me/919999999999',
  instagram: 'https://instagram.com/komalsheth',
  linkedin: 'https://linkedin.com/in/komalsheth',
};

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Portfolio', href: '#emcee' },
  { label: 'Consulting', href: '#consulting' },
  { label: 'Workshops', href: '#workshops' },
  { label: 'Tarot', href: '#tarot' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];
