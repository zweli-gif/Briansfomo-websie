
import { Gathering } from './types';

export const VIBE_PILLS = [
  'Deep Conversations', 'Light & Playful', 'Good Listener', 'Storyteller', 'Quiet Presence',
  'Foodie', 'Music Lover', 'Bookworm', 'Creative Soul', 'Wellness Minded',
  'First Timer', 'Connector', 'Solo Explorer', 'Regular Host', 'Open Book'
];

export const GATHERINGS: Gathering[] = [
  {
    id: '1',
    title: 'Sunday Soul Food & Jazz',
    type: 'Come sit with us',
    curator: {
      name: 'Thabo',
      avatar: 'https://picsum.photos/seed/thabo/100/100',
      since: '2023',
      bio: "Keeping the spirit of Ubuntu alive through food and music."
    },
    date: 'Sunday, Feb 14',
    time: '14:00',
    endTime: '18:00',
    location: 'Soweto',
    fullAddress: '42 Vilakazi St, Orlando West, Soweto',
    price: 250,
    capacity: 8,
    spotsLeft: 3,
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=800',
    color: 'bg-primary',
    description: "Join us for a slow afternoon of traditional home-cooked soul food and South African jazz vinyls. We'll start with a communal prayer and sharing of bread.",
    whatsIncluded: ['3-course meal', 'Drinks', 'Live Vinyl Set'],
    houseRules: ['Shoes off at the door', 'No phones at the table'],
    confirmedGuests: [
      { name: 'Lerato', avatar: 'https://i.pravatar.cc/150?u=1', vibes: ['Good Listener', 'Foodie'] },
      { name: 'John', avatar: 'https://i.pravatar.cc/150?u=2', vibes: ['Storyteller', 'Music Lover'] }
    ]
  },
  {
    id: '2',
    title: 'Melville Koppies Morning Hike',
    type: 'Come walk with us',
    curator: {
      name: 'Sarah',
      avatar: 'https://picsum.photos/seed/sarah/100/100',
      since: '2024',
      bio: "Urban explorer and nature enthusiast."
    },
    date: 'Saturday, Feb 13',
    time: '07:00',
    location: 'Melville',
    price: 150,
    capacity: 12,
    spotsLeft: 5,
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800',
    color: 'bg-sage',
    description: "A gentle morning walk through the historic Melville Koppies. We'll find a quiet spot for a 10-minute collective silence before coffee.",
    whatsIncluded: ['Guided walk', 'Bottled water', 'Post-walk coffee'],
    houseRules: ['Strict 7am start', 'Wear comfortable shoes'],
    confirmedGuests: []
  }
];
