import moment from 'moment'

export const reviews = [
  {
    author: 'Jason M.',
    rating: 5,
    text: 'Gravely\'s did an outstanding job clearing about 3 acres for our new home site. They were on time, professional, and left the property looking clean and ready to build. Highly recommend!',
    date: '2026-04-10 09:15:00',
    profilePhotoUrl: null,
    get relativeTime() {
      return moment(this.date).fromNow()
    },
  },
  {
    author: 'Brenda H.',
    rating: 5,
    text: 'We needed a driveway graded and a small pond excavated. Gravely\'s handled both perfectly — fair price, no surprises, and they finished ahead of schedule. Great local company!',
    date: '2026-04-18 14:30:00',
    profilePhotoUrl: null,
    get relativeTime() {
      return moment(this.date).fromNow()
    },
  },
  {
    author: 'Mike T.',
    rating: 5,
    text: 'I\'ve used several grading companies over the years and Gravely\'s is by far the best in the area. Honest, hardworking, and they know what they\'re doing. Will use again for my next project.',
    date: '2026-04-25 11:00:00',
    profilePhotoUrl: null,
    get relativeTime() {
      return moment(this.date).fromNow()
    },
  },
]
