<template>
  <section id="reviews" class="py-20" style="background: #FAF3E0;">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-14">
        <p class="text-sm font-bold tracking-widest uppercase mb-3" style="color: #D4A017;">
          Customer Reviews
        </p>
        <h2 class="text-4xl font-black mb-4" style="color: #3D2B1F;">What Our Customers Say</h2>

        <!-- Overall rating badge -->
        <div class="flex items-center justify-center gap-3 mt-4">
          <div class="text-5xl font-black" style="color: #3D2B1F;">{{ overallRating }}</div>
          <div>
            <div class="flex gap-0.5">
              <v-icon
                v-for="i in 5"
                :key="i"
                size="22"
                :color="i <= Math.round(overallRating) ? '#D4A017' : '#D1D5DB'"
              >
                mdi-star
              </v-icon>
            </div>
            <div class="text-gray-500 text-sm mt-0.5">({{ totalRatings }} Google Reviews)</div>
          </div>
        </div>
      </div>

      <!-- Review Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <v-card
          v-for="review in reviews"
          :key="review.author"
          elevation="0"
          style="border: 1px solid #E8D9C0; background: white;"
        >
          <v-card-text class="p-6 flex flex-col h-full">
            <!-- Stars -->
            <div class="flex gap-0.5 mb-4">
              <v-icon
                v-for="i in 5"
                :key="i"
                size="18"
                :color="i <= review.rating ? '#D4A017' : '#D1D5DB'"
              >
                mdi-star
              </v-icon>
            </div>
            <!-- Review text -->
            <p class="text-gray-700 leading-relaxed flex-1 mb-4 italic">"{{ review.text }}"</p>
            <!-- Author row -->
            <div class="flex items-center gap-3 pt-4" style="border-top: 1px solid #F0E6D0;">
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style="background: #3D2B1F;"
              >
                {{ review.author.charAt(0) }}
              </div>
              <div>
                <div class="font-semibold text-sm" style="color: #3D2B1F;">{{ review.author }}</div>
                <div class="text-xs text-gray-400 flex items-center gap-1">
                  {{ review.relativeTime }} · Google Review
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>

      <!-- See All on Google -->
      <div class="text-center" v-if="SITE.googleReviewsUrl">
        <v-btn
          :href="SITE.googleReviewsUrl"
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          color="primary"
          size="large"
          class="font-semibold"
        >
          <v-icon start>mdi-google</v-icon>
          See All Reviews on Google
        </v-btn>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useReviews } from '@/composables/useReviews'
import { SITE } from '@/config/site'
const { reviews, overallRating, totalRatings } = useReviews()
</script>
