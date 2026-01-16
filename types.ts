
export type Page = 
  | 'home' 
  | 'explore' 
  | 'event-detail' 
  | 'book' 
  | 'booking-status'
  | 'onboarding' 
  | 'create' 
  | 'curator-dashboard'
  | 'safe-exit'
  | 'login'
  | 'signup';

export interface Curator {
  name: string;
  avatar: string;
  since: string;
  bio: string;
}

export interface Guest {
  name: string;
  avatar: string;
  vibes: string[];
}

export interface Gathering {
  id: string;
  title: string;
  type: string;
  curator: Curator;
  date: string;
  time: string;
  endTime?: string;
  location: string;
  fullAddress?: string;
  price: number;
  capacity: number;
  spotsLeft: number;
  image: string;
  color: string;
  description: string;
  whatsIncluded: string[];
  houseRules: string[];
  confirmedGuests: Guest[];
}
