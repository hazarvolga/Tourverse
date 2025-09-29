import type { Booking, Customer, RevenueData, EngagementData, Tour, Staff, BlogPost } from './types';

export const bookingsData: Booking[] = [
  { id: 'BK001', customerName: 'Alice Johnson', customerEmail: 'alice@example.com', tourName: 'Cappadocia Dream', date: '2024-09-15', status: 'Confirmed', price: 1200 },
  { id: 'BK002', customerName: 'Bob Williams', customerEmail: 'bob@example.com', tourName: 'Istanbul\'s Legacy', date: '2024-09-20', status: 'Confirmed', price: 1500 },
  { id: 'BK003', customerName: 'Charlie Brown', customerEmail: 'charlie@example.com', tourName: 'Ephesus & Pamukkale', date: '2024-10-05', status: 'Pending', price: 2200 },
  { id: 'BK004', customerName: 'Diana Prince', customerEmail: 'diana@example.com', tourName: 'Turquoise Coast Cruise', date: '2024-10-12', status: 'Confirmed', price: 3000 },
  { id: 'BK005', customerName: 'Ethan Hunt', customerEmail: 'ethan@example.com', tourName: 'Cappadocia Dream', date: '2024-08-25', status: 'Cancelled', price: 1150 },
  { id: 'BK006', customerName: 'Fiona Glenanne', customerEmail: 'fiona@example.com', tourName: 'Istanbul\'s Legacy', date: '2024-11-01', status: 'Confirmed', price: 1550 },
  { id: 'BK007', customerName: 'George Costanza', customerEmail: 'george@example.com', tourName: 'Black Sea Wonders', date: '2024-11-15', status: 'Pending', price: 4500 },
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
  { id: 'TOUR01', name: 'Cappadocia Dream', destination: 'Cappadocia, Turkey', price: 800, duration: 4, rating: 4.9, category: 'Adventure', imageId: 'hero-slide-1' },
  { id: 'TOUR02', name: 'Istanbul\'s Legacy', destination: 'Istanbul, Turkey', price: 650, duration: 5, rating: 4.8, category: 'Cultural', imageId: 'hero-slide-2' },
  { id: 'TOUR03', name: 'Ephesus & Pamukkale', destination: 'Izmir, Turkey', price: 950, duration: 3, rating: 4.7, category: 'Cultural', imageId: 'hero-slide-3' },
  { id: 'TOUR04', name: 'Turquoise Coast Cruise', destination: 'Antalya, Turkey', price: 1500, duration: 7, rating: 4.9, category: 'Relaxation', imageId: 'hero' },
  { id: 'TOUR05', name: 'Flavors of Anatolia', destination: 'Gaziantep, Turkey', price: 1100, duration: 6, rating: 4.8, category: 'City Break', imageId: 'feature1' },
  { id: 'TOUR06', name: 'Black Sea Wonders', destination: 'Trabzon, Turkey', price: 1300, duration: 8, rating: 4.6, category: 'Adventure', imageId: 'feature2' },
];

export const staffData: Staff[] = [
    { id: 'STAFF01', name: 'John Doe', email: 'john.doe@tourverse.com', role: 'Guide', avatarId: 'avatar1', assignedTours: 5, rating: 4.8, onDuty: true },
    { id: 'STAFF02', name: 'Jane Smith', email: 'jane.smith@tourverse.com', role: 'Tour Manager', avatarId: 'avatar2', assignedTours: 10, rating: 4.9, onDuty: true },
    { id: 'STAFF03', name: 'Peter Jones', email: 'peter.jones@tourverse.com', role: 'Guide', avatarId: 'avatar3', assignedTours: 3, rating: 4.7, onDuty: false },
    { id: 'STAFF04', name: 'Mary Johnson', email: 'mary.j@tourverse.com', role: 'Support', avatarId: 'avatar4', assignedTours: 0, rating: 5.0, onDuty: true },
];

export const blogPostsData: BlogPost[] = [
  {
    slug: 'top-5-dishes-to-try-in-istanbul',
    title: 'Top 5 Dishes You Must Try in Istanbul',
    summary: 'A culinary journey through the vibrant streets of Istanbul. Discover the flavors that define this historic city.',
    author: 'Ayla Tan',
    authorAvatarId: 'avatar2',
    date: '2024-07-15',
    readTime: 6,
    category: 'Cuisine',
    imageId: 'feature1',
    content: `<p>Istanbul is a city that tantalizes all the senses, and its food is no exception. Here are five dishes you absolutely cannot miss on your next trip:</p>
<br/>
<ol>
  <li><strong>Simit:</strong> The quintessential Turkish street food. This sesame-crusted bread ring is perfect for a quick breakfast on the go.</li>
  <li><strong>Balık Ekmek:</strong> A fresh fish sandwich, typically served right off the boats by the Galata Bridge. Simple, fresh, and delicious.</li>
  <li><strong>Iskender Kebap:</strong> Thinly sliced lamb doner served over pita bread, smothered in tomato sauce and sizzling butter.</li>
  <li><strong>Künefe:</strong> A sweet and savory dessert made with cheese baked between two layers of shredded phyllo dough, soaked in syrup.</li>
  <li><strong>Turkish Breakfast (Kahvaltı):</strong> Not a single dish, but an experience. A spread of cheeses, olives, jams, honey, eggs, and more.</li>
</ol>
<br/>
<p>Each bite tells a story of the city's rich history and diverse culture. Afiyet olsun!</p>`
  },
  {
    slug: 'cappadocia-hot-air-balloons-guide',
    title: 'A Complete Guide to Cappadocia\'s Hot Air Balloons',
    summary: 'Everything you need to know to experience the magical hot air balloon rides in Cappadocia, from booking to the best viewpoints.',
    author: 'Emre Can',
    authorAvatarId: 'avatar1',
    date: '2024-06-28',
    readTime: 7,
    category: 'Travel Tips',
    imageId: 'hero-slide-1',
    content: `<p>Floating above the fairy chimneys of Cappadocia in a hot air balloon is a bucket-list experience. Here's how to make it happen:</p>
<br/>
<ul>
  <li><strong>Best Time to Go:</strong> April to October offers the best weather conditions for balloon flights.</li>
  <li><strong>Booking in Advance:</strong> Balloons fill up quickly, especially during peak season. Book your spot at least a month in advance.</li>
  <li><strong>What to Expect:</strong> You'll be picked up from your hotel before sunrise, watch the balloon inflation, and then enjoy a roughly one-hour flight as the sun comes up.</li>
  <li><strong>Best Viewing Spots:</strong> If you're not flying, head to Lover's Hill in Göreme for breathtaking views of the balloons at sunrise.</li>
  <li><strong>Choosing a Company:</strong> Look for reputable companies with experienced pilots and a good safety record.</li>
</ul>
<br/>
<p>Whether you're in the air or on the ground, the sight of hundreds of balloons coloring the dawn sky is a memory that will last a lifetime.</p>`
  },
];
