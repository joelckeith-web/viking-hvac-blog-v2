export const siteConfig = {
  name: 'Viking Heating & Air Conditioning',
  shortName: 'Viking HVAC',
  description: 'Family-owned HVAC contractor serving the Phoenix Metro Valley since 2016. AC repair, furnace installation, maintenance, and 24/7 emergency service.',
  url: 'https://blog.viking-hvac.com',
  mainSiteUrl: 'https://www.viking-hvac.com',
  phone: '(480) 689-5167',
  phoneHref: 'tel:+14806895167',
  email: 'info@viking-hvac.com',
  address: {
    street: '3225 N Arizona Ave Suite C-12',
    city: 'Chandler',
    state: 'AZ',
    zip: '85225',
    country: 'US',
  },
  rocLicense: '323699',
  googleBusinessProfile: 'https://g.co/kgs/ZD1yBA6',
  foundedYear: 2016,
  reviewCount: 240,
  averageRating: 4.9,
  serviceAreas: [
    'Chandler', 'Gilbert', 'Mesa', 'Phoenix',
    'Scottsdale', 'Queen Creek', 'Tempe',
    'Apache Junction', 'Ahwatukee',
  ],
  social: {
    google: 'https://g.co/kgs/ZD1yBA6',
  },
  colors: {
    navy: '#0E2340',
    navyLight: '#1B4580',
    red: '#EB1C23',
  },
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || '',
  // HCP Online Booking — set this once Viking completes HCP migration
  // Find it in HCP: Settings > Online Booking > Share Link
  // Format: https://book.housecallpro.com/book/Viking-Heating-and-Air/abc123
  hcpBookingUrl: '',
};
