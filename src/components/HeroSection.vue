<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background image overlay -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style="background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80'); filter: brightness(0.35);"
    />
    <!-- Gradient overlay for depth -->
    <div
      class="absolute inset-0"
      style="background: linear-gradient(135deg, rgba(61,43,31,0.85) 0%, rgba(30,20,10,0.6) 100%);"
    />

    <!-- Content -->
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <!-- Eyebrow badge -->
      <div class="flex justify-center mb-6">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
          style="background: rgba(212,160,23,0.2); border: 1px solid rgba(212,160,23,0.5); color: #D4A017;"
        >
          <v-icon size="16" color="#D4A017">mdi-map-marker</v-icon>
          Wythe County & Surrounding Areas
        </div>
      </div>

      <h1 class="text-white font-black leading-tight mb-6" style="font-size: clamp(2.5rem, 6vw, 4.5rem);">
        Wythe County's
        <span style="color: #D4A017; display: block;">Grading Experts</span>
      </h1>

      <p class="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
        Professional land clearing, excavation, and grading services for homeowners, 
        contractors, and businesses. Licensed, insured, and locally owned — we get your
        site ready right.
      </p>

      <!-- Stat badges -->
      <div class="flex flex-wrap justify-center gap-4 mb-10 text-sm">
        <div v-for="badge in badges" :key="badge" class="flex items-center gap-1.5 text-white">
          <v-icon size="16" color="#D4A017">mdi-check-circle</v-icon>
          <span class="font-medium">{{ badge }}</span>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap justify-center gap-4">
        <v-btn
          color="accent"
          size="x-large"
          variant="flat"
          class="font-bold px-8"
          @click="$emit('open-contact')"
        >
          <v-icon start>mdi-clipboard-text</v-icon>
          Get a Free Estimate
        </v-btn>
        <v-btn
          variant="outlined"
          size="x-large"
          class="font-semibold px-8 text-white"
          style="border-color: rgba(255,255,255,0.5); color: white;"
          @click="scrollTo('services')"
        >
          Our Services
          <v-icon end>mdi-arrow-down</v-icon>
        </v-btn>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <v-icon color="rgba(255,255,255,0.5)" size="28">mdi-chevron-double-down</v-icon>
    </div>
  </section>
</template>

<script setup>
defineEmits(['open-contact'])

const badges = [
  'Licensed & Insured',
  'Free Estimates',
  'Family Owned',
  'Mon – Fri 8 AM–5 PM',
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
