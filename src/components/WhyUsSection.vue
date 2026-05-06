<template>
  <section id="why-us" class="py-20" style="background: #3D2B1F;">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-14">
        <p class="text-sm font-bold tracking-widest uppercase mb-3" style="color: #D4A017;">
          Why Choose Us
        </p>
        <h2 class="text-4xl font-black text-white mb-4">The Gravely's Difference</h2>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          We're not a franchise. We're your neighbors — and that means you get honest
          advice, dependable service, and work done right the first time.
        </p>
      </div>

      <!-- Feature Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="item in WHY_US"
          :key="item.title"
          class="rounded-xl p-6 flex flex-col gap-3"
          style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);"
        >
          <div
            class="w-12 h-12 rounded-lg flex items-center justify-center"
            style="background: rgba(212,160,23,0.15);"
          >
            <v-icon :icon="item.icon" color="#D4A017" size="24" />
          </div>
          <h3 class="text-white font-bold text-lg">{{ item.title }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { WHY_US } from '@/config/site'
</script>
