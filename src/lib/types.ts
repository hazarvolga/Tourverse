export type Booking = {
  id: string;
  customerName: string;
  customerEmail: string;
  tourName: string;
  date: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  price: number;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  avatarId: string;
  joinDate: string;
  tourHistoryCount: number;
  preferences: string[];
};

export type RevenueData = {
  month: string;
  revenue: number;
};

export type EngagementData = {
  date: string;
  Bookings: number;
  Inquiries: number;
};

export type Tour = {
  id: string;
  name: string;
  destination: string;
  price: number;
  duration: number; // in days
  rating: number;
  category: 'Adventure' | 'Cultural' | 'Relaxation' | 'City Break';
  imageId: string;
};

export type Staff = {
  id: string;
  name: string;
  email: string;
  role: 'Guide' | 'Tour Manager' | 'Support' | 'Admin';
  avatarId: string;
  assignedTours: number;
  rating: number;
  onDuty: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  author: string;
  authorAvatarId: string;
  date: string;
  readTime: number; // in minutes
  category: string;
  imageId: string;
  content: string; // Markdown or HTML content
};
