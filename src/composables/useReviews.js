import { computed } from 'vue'
import { reviews } from '@/data/reviews'

export function useReviews() {
  const overallRating = computed(() => {
    if (!reviews.length) return 0
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0)
    return Math.round((sum / reviews.length) * 10) / 10
  })

  const totalRatings = computed(() => reviews.length)

  return { reviews, overallRating, totalRatings }
}
