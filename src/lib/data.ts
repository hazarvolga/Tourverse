import type { Booking, Customer, RevenueData, EngagementData, Tour } from './types';

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
