// ─── Global Site Configuration ───────────────────────────────────────────────
// Update these values when business details become available.

export const SITE = {
  name: "Gravely's Grading Service",
  shortName: "Gravely's",

  // Contact — update when available
  phone: null,            // e.g. '(276) 555-1234'
  phoneFormatted: null,   // e.g. '+12765551234'
  email: null,            // e.g. 'info@gravelysgrading.com'

  // Location
  address: 'Wythe County, VA',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Wythe+County+VA',

  // Hours
  hours: 'Mon – Fri: 8 AM – 5 PM',
  hoursShort: 'M-F 8 AM – 5 PM',

  // Social
  facebook: null,         // e.g. 'https://facebook.com/gravelysgrading'

  // Google Reviews (update once live)
  googleReviewsUrl: null,
  googleRating: 5.0,
  googleReviewCount: 0,
}

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    title: 'Land Clearing',
    icon: 'mdi-tree',
    description:
      'We clear land of trees, brush, stumps, and debris to prepare your property for construction, farming, or development. We leave your site clean and ready for the next step.',
  },
  {
    title: 'Excavation',
    icon: 'mdi-excavator',
    description:
      'From foundation digs to pond construction and utility trenching, our excavation services are carried out with precision equipment and experienced operators.',
  },
  {
    title: 'Grading',
    icon: 'mdi-terrain',
    description:
      'Proper site grading ensures drainage, stability, and a level foundation. We grade driveways, lots, and building pads to spec — getting your project started right.',
  },
]

// ─── Service Area ─────────────────────────────────────────────────────────────
export const SERVICE_AREA = [
  'Wythe County, VA',
  'Wytheville, VA',
  'Marion, VA',
  'Pulaski County, VA',
  'Smyth County, VA',
  'Grayson County, VA',
  'Carroll County, VA',
  'And surrounding areas',
]

// ─── Why Choose Us ────────────────────────────────────────────────────────────
export const WHY_US = [
  {
    icon: 'mdi-shield-check',
    title: 'Licensed & Insured',
    description:
      'Fully licensed and insured in Virginia. You have peace of mind knowing the job is done right and you\'re protected.',
  },
  {
    icon: 'mdi-currency-usd-off',
    title: 'Free Estimates',
    description:
      'We provide honest, no-obligation estimates before any work begins. No hidden fees, no surprises on your invoice.',
  },
  {
    icon: 'mdi-map-marker',
    title: 'Locally Owned',
    description:
      'We live and work in Wythe County. When you call us, you reach a neighbor — not a call center.',
  },
  {
    icon: 'mdi-tractor',
    title: 'Right Equipment',
    description:
      'We run modern, well-maintained equipment suitable for jobs of all sizes — residential lots to large commercial sites.',
  },
  {
    icon: 'mdi-clock-outline',
    title: 'Mon – Fri, 8 AM – 5 PM',
    description:
      'We keep reliable business hours and always aim to respond quickly. Reach out today to schedule your project.',
  },
  {
    icon: 'mdi-thumb-up',
    title: 'Satisfaction Guaranteed',
    description:
      'We stand behind our work. If something isn\'t right, we make it right — that\'s our commitment to every customer.',
  },
]
