import type { Booking, Customer, RevenueData, EngagementData, Tour, Staff, BlogPost } from './types';

export const bookingsData: Booking[] = [
  { id: 'BK001', customerName: 'Alice Johnson', customerEmail: 'alice@example.com', tourName: 'Parisian Wonders', date: '2024-09-15', status: 'Confirmed', price: 1200 },
  { id: 'BK002', customerName: 'Bob Williams', customerEmail: 'bob@example.com', tourName: 'Roman Holiday', date: '2024-09-20', status: 'Confirmed', price: 1500 },
  { id: 'BK003', customerName: 'Charlie Brown', customerEmail: 'charlie@example.com', tourName: 'Tokyo Express', date: '2024-10-05', status: 'Pending', price: 2200 },
  { id: 'BK004', customerName: 'Diana Prince', customerEmail: 'diana@example.com', tourName: 'Andean Adventure', date: '2024-10-12', status: 'Confirmed', price: 3000 },
  { id: 'BK005', customerName: 'Ethan Hunt', customerEmail: 'ethan@example.com', tourName: 'Parisian Wonders', date: '2024-08-25', status: 'Cancelled', price: 1150 },
  { id: 'BK006', customerName: 'Fiona Glenanne', customerEmail: 'fiona@example.com', tourName: 'Roman Holiday', date: '2024-11-01', status: 'Confirmed', price: 1550 },
  { id: 'BK007', customerName: 'George Costanza', customerEmail: 'george@example.com', tourName: 'Alaskan Expedition', date: '2024-11-15', status: 'Pending', price: 4500 },
];

export const customersData: Customer[] = [
  { id: 'CUST01', name: 'Alice Johnson', email: 'alice@example.com', avatarId: 'avatar1', joinDate: '2023-03-12', tourHistoryCount: 3, preferences: ['History', 'Art', 'Cuisine'] },
  { id: 'CUST02', name: 'Bob Williams', email: 'bob@example.com', avatarId: 'avatar2', joinDate: '2023-05-21', tourHistoryCount: 2, preferences: ['Adventure', 'Nature'] },
  { id: 'CUST03', name: 'Diana Prince', email: 'diana@example.com', avatarId: 'avatar3', joinDate: '2023-08-01', tourHistoryCount: 5, preferences: ['Culture', 'Photography', 'Shopping'] },
  { id: 'CUST04', name: 'Ethan Hunt', email: 'ethan@example.com', avatarId: 'avatar4', joinDate: '2024-01-10', tourHistoryCount: 1, preferences: ['Thrill-seeking', 'Urban Exploration'] },
];

export const revenueData: RevenueData[] = [
    { month: 'Jan', revenue: 6500 },
    { month: 'Feb', revenue: 5900 },
    { month: 'Mar', revenue: 8000 },
    { month: 'Apr', revenue: 8100 },
    { month: 'May', revenue: 5600 },
    { month: 'Jun', revenue: 9500 },
    { month: 'Jul', revenue: 7300 },
];

export const engagementData: EngagementData[] = [
    { date: '24-07-01', Bookings: 30, Inquiries: 70 },
    { date: '24-07-02', Bookings: 40, Inquiries: 85 },
    { date: '24-07-03', Bookings: 25, Inquiries: 60 },
    { date: '24-07-04', Bookings: 50, Inquiries: 90 },
    { date: '24-07-05', Bookings: 45, Inquiries: 88 },
    { date: '24-07-06', Bookings: 60, Inquiries: 105 },
    { date: '24-07-07', Bookings: 55, Inquiries: 95 },
];

export const toursData: Tour[] = [
  { id: 'TOUR01', name: 'Parisian Wonders', destination: 'Paris, France', price: 1200, duration: 7, rating: 4.8, category: 'Cultural', imageId: 'feature1' },
  { id: 'TOUR02', name: 'Roman Holiday', destination: 'Rome, Italy', price: 1500, duration: 7, rating: 4.9, category: 'Cultural', imageId: 'feature2' },
  { id: 'TOUR03', name: 'Andean Adventure', destination: 'Cusco, Peru', price: 3000, duration: 10, rating: 4.7, category: 'Adventure', imageId: 'feature3' },
  { id: 'TOUR04', name: 'Tokyo Express', destination: 'Tokyo, Japan', price: 2200, duration: 5, rating: 4.6, category: 'City Break', imageId: 'feature4' },
  { id: 'TOUR05', name: 'Beach Paradise', destination: 'Maldives', price: 4000, duration: 7, rating: 4.9, category: 'Relaxation', imageId: 'hero' },
  { id: 'TOUR06', name: 'Mountain Trek', destination: 'Himalayas, Nepal', price: 2800, duration: 14, rating: 4.8, category: 'Adventure', imageId: 'avatar1' },
];

export const staffData: Staff[] = [
    { id: 'STAFF01', name: 'John Doe', email: 'john.doe@tourverse.com', role: 'Guide', avatarId: 'avatar1', assignedTours: 5, rating: 4.8, onDuty: true },
    { id: 'STAFF02', name: 'Jane Smith', email: 'jane.smith@tourverse.com', role: 'Tour Manager', avatarId: 'avatar2', assignedTours: 10, rating: 4.9, onDuty: true },
    { id: 'STAFF03', name: 'Peter Jones', email: 'peter.jones@tourverse.com', role: 'Guide', avatarId: 'avatar3', assignedTours: 3, rating: 4.7, onDuty: false },
    { id: 'STAFF04', name: 'Mary Johnson', email: 'mary.j@tourverse.com', role: 'Support', avatarId: 'avatar4', assignedTours: 0, rating: 5.0, onDuty: true },
];

export const blogPostsData: BlogPost[] = [
  {
    slug: 'top-10-destinations-for-2025',
    title: 'Top 10 Must-Visit Destinations for 2025',
    summary: 'Discover the most exciting and trending travel spots for the upcoming year. From hidden gems to bustling cities, we have got you covered.',
    author: 'Jane Smith',
    authorAvatarId: 'avatar2',
    date: '2024-07-15',
    readTime: 8,
    category: 'Travel Tips',
    imageId: 'hero-slide-1',
    content: `<p>The world is vast and full of wonders, and 2025 is the perfect year to explore it. Here is our curated list of the top 10 destinations you should consider for your next adventure:</p>
<br/>
<ol>
  <li><strong>Kyoto, Japan:</strong> A seamless blend of ancient tradition and modern life.</li>
  <li><strong>The Azores, Portugal:</strong> A volcanic archipelago with stunning landscapes.</li>
  <li><strong>Slovenia:</strong> A green paradise with mountains, lakes, and a charming coastline.</li>
  <li><strong>Siargao, Philippines:</strong> A surfer's dream with pristine beaches and crystal-clear waters.</li>
  <li><strong>Medellín, Colombia:</strong> A city of eternal spring, reborn and vibrant.</li>
  <li><strong>Cairo, Egypt:</strong> The long-awaited Grand Egyptian Museum is finally open.</li>
  <li><strong>Greenland:</strong> Witness the raw power and beauty of glaciers and icebergs.</li>
  <li><strong>Oman:</strong> A treasure of the Middle East with rich history and dramatic landscapes.</li>
  <li><strong>New Orleans, USA:</strong> A melting pot of cultures, music, and incredible food.</li>
  <li><strong>Kaikoura, New Zealand:</strong> A marine wonderland where mountains meet the sea.</li>
</ol>
<br/>
<p>Each of these destinations offers a unique experience, promising unforgettable memories. Whether you're a seasoned traveler or planning your first big trip, 2025 is the year to make it happen. Start planning today!</p>`
  },
  {
    slug: 'how-to-pack-light-for-any-trip',
    title: 'The Ultimate Guide: How to Pack Light for Any Trip',
    summary: 'Say goodbye to heavy luggage and checked bag fees. Our guide will teach you the art of packing light without sacrificing the essentials.',
    author: 'John Doe',
    authorAvatarId: 'avatar1',
    date: '2024-06-28',
    readTime: 5,
    category: 'Travel Hacks',
    imageId: 'feature1',
    content: `<p>Packing light is a skill that can transform your travel experience. Less luggage means more freedom and less stress. Here are our top tips:</p>
<br/>
<ul>
  <li><strong>Choose the Right Bag:</strong> A carry-on sized backpack or suitcase is your best friend.</li>
  <li><strong>Use Packing Cubes:</strong> They are a game-changer for organization and compression.</li>
  <li><strong>The 5-4-3-2-1 Rule:</strong> For a week-long trip, consider packing 5 tops, 4 bottoms, 3 accessories, 2 pairs of shoes, and 1 swimsuit/special item.</li>
  <li><strong>Wear Your Heaviest Items:</strong> Wear your bulkiest shoes and jacket on the plane.</li>
  <li><strong>Solid Toiletries:</strong> Switch to solid shampoo, conditioner, and toothpaste to save space and avoid liquid restrictions.</li>
  <li><strong>Plan for Laundry:</strong> If you're on a longer trip, plan to do laundry once.</li>
</ul>
<br/>
<p>Mastering the art of packing light will make your travels more enjoyable and flexible. Give it a try on your next trip!</p>`
  },
];
