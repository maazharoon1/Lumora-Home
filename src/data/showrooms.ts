import { Showroom } from '../types';

export const showrooms: Showroom[] = [
  {
    id: 'new-york',
    city: 'New York',
    name: 'Lumora Home — New York Flagship',
    address: '241 Mercer Street, New York, NY 10012',
    street: '241 Mercer Street',
    cityStateZip: 'New York, NY 10012',
    phone: '+1 (212) 845-9200',
    email: 'mercer@lumorahome.com',
    hours: [
      { days: 'Monday – Saturday', time: '10:00 AM – 7:00 PM' },
      { days: 'Sunday', time: '11:00 AM – 6:00 PM' }
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    description: 'Located in the historic cast-iron district of SoHo, our 12,000 sq ft flagship design studio showcases full room architectural environments, our complete natural material library, and private client consultation suites.',
    features: [
      'Full-scale architectural room vignettes',
      'Extensive textile, wood, and stone sample library',
      'Complimentary private interior design suites',
      'White-glove swatch dispatch on site',
      'Valet parking assistance available'
    ]
  },
  {
    id: 'los-angeles',
    city: 'Los Angeles',
    name: 'Lumora Home — Los Angeles Design Studio',
    address: '850 Melrose Avenue, Los Angeles, CA 90069',
    street: '850 Melrose Avenue',
    cityStateZip: 'Los Angeles, CA 90069',
    phone: '+1 (310) 924-6700',
    email: 'melrose@lumorahome.com',
    hours: [
      { days: 'Monday – Saturday', time: '10:00 AM – 6:00 PM' },
      { days: 'Sunday', time: '12:00 PM – 5:00 PM' }
    ],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    description: 'Set along the iconic design corridor of West Hollywood, our LA studio features expansive sun-drenched indoor galleries and an outdoor courtyard dedicated to the Solara Outdoor Collection.',
    features: [
      'Indoor-outdoor open air living pavilion',
      'Natural lighting simulation studio',
      'Private trade & architect lounge',
      'Beverage bar serving organic espresso & natural wines'
    ]
  },
  {
    id: 'chicago',
    city: 'Chicago',
    name: 'Lumora Home — Chicago Clybourn Gallery',
    address: '1820 North Clybourn Avenue, Chicago, IL 60614',
    street: '1820 North Clybourn Avenue',
    cityStateZip: 'Chicago, IL 60614',
    phone: '+1 (312) 715-3800',
    email: 'clybourn@lumorahome.com',
    hours: [
      { days: 'Monday – Saturday', time: '10:00 AM – 7:00 PM' },
      { days: 'Sunday', time: '11:00 AM – 6:00 PM' }
    ],
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1600&q=80',
    description: 'Occupying a restored timber and brick warehouse in Lincoln Park, our Chicago gallery highlights the monumental scale of our dining tables, sectional systems, and statement stone lighting.',
    features: [
      'Restored architectural timber beam setting',
      'Full dining & entertainment layout studio',
      'Custom stone slab selection table',
      'Dedicated Trade & Contract specialist team'
    ]
  }
];

export const getShowroomById = (id: string): Showroom | undefined => {
  return showrooms.find(s => s.id === id);
};
