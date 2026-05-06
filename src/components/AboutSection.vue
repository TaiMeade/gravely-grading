<template>
  <section id="about" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Text content -->
        <div>
          <p class="text-sm font-bold tracking-widest uppercase mb-3" style="color: #D4A017;">
            About Us
          </p>
          <h2 class="text-4xl font-black mb-6 leading-tight" style="color: #3D2B1F;">
            Locally Rooted,<br />
            <span style="color: #D4A017;">Professionally Driven</span>
          </h2>
          <p class="text-gray-600 text-lg mb-5 leading-relaxed">
            Gravely's Grading Service has built its reputation on honest work and
            quality results right here in Wythe County. We're your neighbors — and
            we treat every project on your property the way we'd want ours treated.
          </p>
          <p class="text-gray-600 text-lg mb-8 leading-relaxed">
            From clearing overgrown lots and digging foundations to final grading and
            site prep, our experienced team brings the skill and integrity that local
            homeowners and contractors deserve. No shortcuts. No hidden costs. Just
            reliable earthwork you can count on.
          </p>

          <!-- Feature pills -->
          <div class="flex flex-wrap gap-3">
            <div
              v-for="feat in features"
              :key="feat"
              class="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style="background: #FAF3E0; color: #6B4C3B; border: 1px solid #D4A01730;"
            >
              <v-icon size="16" color="#D4A017">mdi-check-circle</v-icon>
              {{ feat }}
            </div>
          </div>
        </div>

        <!-- Stats / visual block -->
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="rounded-2xl p-6 text-center flex flex-col items-center gap-2"
            :style="stat.highlight
              ? 'background: #3D2B1F; color: white;'
              : 'background: #FAF3E0; color: #3D2B1F;'"
          >
            <v-icon :color="stat.highlight ? '#D4A017' : '#D4A017'" size="32">{{ stat.icon }}</v-icon>
            <div class="text-3xl font-black">{{ stat.value }}</div>
            <div class="text-sm font-medium opacity-80">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  'Licensed & Insured',
  'Family-Owned',
  'Free Estimates',
  'Satisfaction Guaranteed',
]

const stats = [
  { icon: 'mdi-tractor', value: '100%', label: 'Licensed & Insured', highlight: true },
  { icon: 'mdi-currency-usd-off', value: 'Free', label: 'Estimates', highlight: false },
  { icon: 'mdi-map-marker', value: 'Local', label: 'Wythe County', highlight: false },
  { icon: 'mdi-thumb-up', value: '5★', label: 'Rated Service', highlight: true },
]
</script>
