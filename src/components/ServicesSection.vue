<template>
  <section id="services" class="py-20" style="background: #FAF3E0;">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-14">
        <p class="text-sm font-bold tracking-widest uppercase mb-3" style="color: #D4A017;">
          What We Do
        </p>
        <h2 class="text-4xl font-black mb-4" style="color: #3D2B1F;">Our Services</h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          From raw land to a level, build-ready site — we handle every phase of
          your ground-preparation needs with the right equipment and experienced crews.
        </p>
      </div>

      <!-- Service Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <v-card
          v-for="service in SERVICES"
          :key="service.title"
          class="h-full"
          elevation="0"
          style="border: 1px solid #E8D9C0; background: white;"
        >
          <v-card-text class="p-8 flex flex-col h-full">
            <div
              class="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
              style="background: #3D2B1F;"
            >
              <v-icon :icon="service.icon" color="#D4A017" size="28" />
            </div>
            <h3 class="text-xl font-bold mb-3" style="color: #3D2B1F;">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed flex-1">{{ service.description }}</p>
          </v-card-text>
        </v-card>
      </div>

      <!-- CTA strip -->
      <div class="text-center">
        <p class="text-gray-500 mb-4">Don't see what you need? Give us a call and we'll help.</p>
        <v-btn
          color="primary"
          size="large"
          variant="flat"
          class="font-semibold"
          @click="$emit('open-contact')"
        >
          Request a Free Estimate
        </v-btn>
      </div>
    </div>
  </section>
</template>

<script setup>
import { SERVICES } from '@/config/site'
defineEmits(['open-contact'])
</script>
