<template>
  <v-app-bar
    color="primary"
    :elevation="4"
  >
    <!-- Logo / Brand -->
    <v-app-bar-title>
      <div class="flex items-center gap-3 cursor-pointer" @click="scrollToTop">
        <img
          :src="logoSrc"
          alt="Gravely's Grading Service logo"
          class="h-10 w-auto object-contain"
          @error="logoError = true"
          v-if="!logoError"
        />
        <span
          :class="['font-bold text-lg leading-tight', scrolled ? 'text-white' : 'text-white']"
          style="text-shadow: 0 1px 3px rgba(0,0,0,0.5);"
        >
          Gravely's Grading
        </span>
      </div>
    </v-app-bar-title>

    <!-- Desktop Nav Links -->
    <template #append>
      <div class="hidden md:flex items-center gap-1 mr-2">
        <v-btn
          v-for="link in navLinks"
          :key="link.label"
          variant="text"
          :class="['text-white font-medium', 'hover:text-yellow-300']"
          style="text-shadow: 0 1px 2px rgba(0,0,0,0.4);"
          @click="scrollTo(link.id)"
        >
          {{ link.label }}
        </v-btn>
        <v-btn
          color="accent"
          variant="flat"
          class="ml-2 font-semibold text-stone-900"
          @click="$emit('open-contact')"
        >
          Get a Free Quote
        </v-btn>
      </div>

      <!-- Mobile Menu Button -->
      <v-app-bar-nav-icon
        class="md:hidden text-white"
        @click="drawer = true"
      />
    </template>
  </v-app-bar>

  <!-- Mobile Drawer -->
  <v-navigation-drawer v-model="drawer" location="right" temporary width="280">
    <div class="bg-brown-900 h-full flex flex-col" style="background-color: #3D2B1F;">
      <div class="flex items-center justify-between px-4 py-4 border-b border-white/10">
        <span class="text-white font-bold text-lg">Navigation</span>
        <v-btn icon variant="text" color="white" @click="drawer = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <v-list bg-color="transparent" class="flex-1">
        <v-list-item
          v-for="link in navLinks"
          :key="link.label"
          :title="link.label"
          class="text-white"
          @click="scrollTo(link.id); drawer = false"
        />
      </v-list>
      <div class="px-4 py-4 border-t border-white/10">
        <v-btn
          color="accent"
          block
          variant="flat"
          class="font-semibold"
          @click="$emit('open-contact'); drawer = false"
        >
          Get a Free Quote
        </v-btn>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineEmits(['open-contact'])

const scrolled = ref(false)
const drawer = ref(false)
const logoError = ref(false)
const logoSrc = import.meta.env.BASE_URL + 'logo.png'

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Why Us', id: 'why-us' },
  { label: 'Service Area', id: 'service-area' },
  { label: 'Reviews', id: 'reviews' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 60
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
