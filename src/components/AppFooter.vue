<template>
  <footer style="background: #3D2B1F;">
    <!-- CTA Banner -->
    <div
      class="py-14 px-4 text-center"
      style="background: linear-gradient(135deg, #4E3728 0%, #3D2B1F 100%); border-bottom: 1px solid rgba(255,255,255,0.08);"
    >
      <p class="text-sm font-bold tracking-widest uppercase mb-3" style="color: #D4A017;">
        Ready to Book?
      </p>
      <h2 class="text-3xl font-black text-white mb-3">
        Get a free estimate today.
      </h2>
      <p class="text-gray-300 mb-8">No obligation — just honest advice from a neighbor.</p>
      <div class="flex flex-wrap justify-center gap-4">
        <v-btn
          color="accent"
          size="large"
          variant="flat"
          class="font-bold"
          @click="$emit('open-contact')"
        >
          Get a Free Quote
        </v-btn>
        <v-btn
          v-if="SITE.phone"
          :href="`tel:${SITE.phoneFormatted}`"
          size="large"
          variant="outlined"
          class="font-semibold text-white"
          style="border-color: rgba(255,255,255,0.4); color: white;"
        >
          <v-icon start>mdi-phone</v-icon>
          Call Now
        </v-btn>
      </div>
    </div>

    <!-- Footer grid -->
    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

        <!-- Brand column -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <img
              :src="logoSrc"
              alt="Gravely's Grading Service"
              class="h-10 w-auto object-contain"
              @error="logoError = true"
              v-if="!logoError"
            />
            <span class="text-white font-bold text-lg">Gravely's Grading</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            Licensed, insured, and locally owned. Serving Wythe County and surrounding
            Southwest Virginia with professional land clearing, excavation, and grading.
          </p>
          <div class="flex gap-3 mt-5">
            <a
              v-if="SITE.facebook"
              :href="SITE.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg flex items-center justify-center"
              style="background: rgba(255,255,255,0.08);"
            >
              <v-icon color="white" size="18">mdi-facebook</v-icon>
            </a>
            <a
              v-if="SITE.googleReviewsUrl"
              :href="SITE.googleReviewsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg flex items-center justify-center"
              style="background: rgba(255,255,255,0.08);"
            >
              <v-icon color="white" size="18">mdi-google</v-icon>
            </a>
          </div>
        </div>

        <!-- Services column -->
        <div>
          <h3 class="text-white font-bold mb-4 uppercase tracking-wide text-sm">Services</h3>
          <ul class="space-y-2">
            <li v-for="service in SERVICES" :key="service.title">
              <span class="text-gray-400 text-sm flex items-center gap-2">
                <v-icon size="14" color="#D4A017">mdi-chevron-right</v-icon>
                {{ service.title }}
              </span>
            </li>
          </ul>
        </div>

        <!-- Contact column -->
        <div>
          <h3 class="text-white font-bold mb-4 uppercase tracking-wide text-sm">Contact</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-2 text-gray-400 text-sm">
              <v-icon size="16" color="#D4A017" class="mt-0.5 flex-shrink-0">mdi-map-marker</v-icon>
              {{ SITE.address }}
            </li>
            <li v-if="SITE.phone" class="flex items-center gap-2 text-gray-400 text-sm">
              <v-icon size="16" color="#D4A017">mdi-phone</v-icon>
              <a :href="`tel:${SITE.phoneFormatted}`" class="hover:text-white transition-colors">
                {{ SITE.phone }}
              </a>
            </li>
            <li v-if="SITE.email" class="flex items-center gap-2 text-gray-400 text-sm">
              <v-icon size="16" color="#D4A017">mdi-email</v-icon>
              <a :href="`mailto:${SITE.email}`" class="hover:text-white transition-colors">
                {{ SITE.email }}
              </a>
            </li>
            <li class="flex items-center gap-2 text-gray-400 text-sm">
              <v-icon size="16" color="#D4A017">mdi-clock-outline</v-icon>
              {{ SITE.hours }}
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- Bottom bar -->
    <div
      class="border-t px-4 py-5 text-center"
      style="border-color: rgba(255,255,255,0.08);"
    >
      <p class="text-gray-500 text-sm">
        © {{ new Date().getFullYear() }} {{ SITE.name }}. All rights reserved.
        &nbsp;·&nbsp; Wythe County, VA
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { SITE, SERVICES } from '@/config/site'
defineEmits(['open-contact'])
const logoError = ref(false)
const logoSrc = import.meta.env.BASE_URL + 'logo.png'
</script>
