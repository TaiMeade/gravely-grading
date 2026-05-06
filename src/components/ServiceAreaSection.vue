<template>
  <section id="service-area" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <!-- Text -->
        <div>
          <p class="text-sm font-bold tracking-widest uppercase mb-3" style="color: #D4A017;">
            Coverage
          </p>
          <h2 class="text-4xl font-black mb-6" style="color: #3D2B1F;">
            Serving Southwest Virginia
          </h2>
          <p class="text-gray-600 text-lg mb-8 leading-relaxed">
            Based in Wythe County, VA, Gravely's Grading Service proudly serves
            homeowners, farms, and contractors throughout the surrounding Southwest
            Virginia region.
          </p>

          <!-- Area list -->
          <div class="grid grid-cols-2 gap-3 mb-8">
            <div
              v-for="area in SERVICE_AREA"
              :key="area"
              class="flex items-center gap-2 text-gray-700 font-medium"
            >
              <v-icon size="18" color="#D4A017">mdi-map-marker-check</v-icon>
              {{ area }}
            </div>
          </div>

          <p class="text-gray-500 text-sm mb-4">
            Not sure if we cover your area? Give us a call — we'll let you know and try to help.
          </p>
        </div>

        <!-- Map / Info Card -->
        <div>
          <v-card elevation="0" style="border: 1px solid #E8D9C0; overflow: hidden;">
            <div
              class="h-64 flex items-center justify-center"
              style="background: linear-gradient(135deg, #3D2B1F 0%, #6B4C3B 100%);"
            >
              <div class="text-center text-white p-6">
                <v-icon size="48" color="#D4A017" class="mb-3">mdi-map-marker-radius</v-icon>
                <div class="text-xl font-bold">Wythe County, VA</div>
                <div class="text-gray-300 text-sm mt-1">& Surrounding Areas</div>
                <v-btn
                  variant="outlined"
                  color="white"
                  size="small"
                  class="mt-4"
                  :href="googleMapsUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon start size="16">mdi-directions</v-icon>
                  Get Directions
                </v-btn>
              </div>
            </div>
            <v-card-text class="p-6" style="background: #FAF3E0;">
              <div class="flex items-start gap-3">
                <v-icon color="#D4A017" class="mt-0.5">mdi-map-marker</v-icon>
                <div>
                  <div class="font-semibold" style="color: #3D2B1F;">{{ SITE.name }}</div>
                  <div class="text-gray-600 text-sm">{{ SITE.address }}</div>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { SITE, SERVICE_AREA } from '@/config/site'
const googleMapsUrl = SITE.googleMapsUrl
</script>
