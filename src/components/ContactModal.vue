<template>
  <v-dialog v-model="model" max-width="600" scrollable>
    <v-card>
      <!-- Header -->
      <div
        class="flex items-center justify-between px-6 py-4"
        style="background: #3D2B1F;"
      >
        <div>
          <h2 class="text-white font-bold text-xl">Get a Free Estimate</h2>
          <p class="text-gray-300 text-sm mt-0.5">We'll get back to you promptly.</p>
        </div>
        <v-btn icon variant="text" color="white" @click="model = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <v-card-text class="px-6 py-6">
        <!-- Success state -->
        <div v-if="success" class="text-center py-8">
          <v-icon size="56" color="success" class="mb-4">mdi-check-circle</v-icon>
          <h3 class="text-xl font-bold mb-2" style="color: #3D2B1F;">Message Sent!</h3>
          <p class="text-gray-600">
            Thanks for reaching out! We'll be in touch shortly to discuss your project.
          </p>
          <v-btn
            color="primary"
            variant="flat"
            class="mt-6 font-semibold"
            @click="handleClose"
          >
            Close
          </v-btn>
        </div>

        <!-- Form -->
        <v-form v-else ref="formRef" @submit.prevent="handleSubmit">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <v-text-field
              v-model="form.name"
              label="Your Name *"
              variant="outlined"
              density="comfortable"
              :rules="[requiredRule]"
              prepend-inner-icon="mdi-account"
            />
            <v-text-field
              v-model="form.phone"
              label="Phone Number"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-phone"
              type="tel"
            />
          </div>

          <v-text-field
            v-model="form.email"
            label="Email Address *"
            variant="outlined"
            density="comfortable"
            class="mb-4"
            :rules="[requiredRule, emailRule]"
            prepend-inner-icon="mdi-email"
            type="email"
          />

          <v-select
            v-model="form.service"
            label="Service Needed *"
            variant="outlined"
            density="comfortable"
            class="mb-4"
            :items="serviceOptions"
            :rules="[requiredRule]"
            prepend-inner-icon="mdi-tractor"
          />

          <v-textarea
            v-model="form.message"
            label="Tell us about your project *"
            variant="outlined"
            rows="4"
            class="mb-4"
            :rules="[requiredRule]"
            placeholder="Describe your project, approximate acreage, timeline, or any questions..."
          />

          <!-- Error message -->
          <v-alert
            v-if="error"
            type="error"
            variant="tonal"
            class="mb-4 text-sm"
            closable
            @click:close="reset"
          >
            {{ error }}
          </v-alert>

          <v-btn
            type="submit"
            color="primary"
            size="large"
            block
            variant="flat"
            class="font-bold"
            :loading="loading"
          >
            <v-icon start>mdi-send</v-icon>
            Send Request
          </v-btn>

          <p class="text-gray-400 text-xs text-center mt-3">
            No spam. We'll only use this to respond to your request.
          </p>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useEmailJS } from '@/composables/useEmailJS'
import { SERVICES } from '@/config/site'

const model = defineModel({ default: false })

const { loading, success, error, sendEmail, reset } = useEmailJS()
const formRef = ref(null)

const serviceOptions = SERVICES.map((s) => s.title)

const emptyForm = () => ({
  name: '',
  phone: '',
  email: '',
  service: null,
  message: '',
})

const form = ref(emptyForm())

const requiredRule = (v) => !!v || 'This field is required'
const emailRule = (v) => /.+@.+\..+/.test(v) || 'Please enter a valid email'

async function handleSubmit() {
  const { valid } = await formRef.value.validate()
  if (!valid) return

  await sendEmail({
    from_name: form.value.name,
    from_phone: form.value.phone || 'Not provided',
    from_email: form.value.email,
    service: form.value.service,
    message: form.value.message,
  })
}

function handleClose() {
  model.value = false
  reset()
  form.value = emptyForm()
  formRef.value?.resetValidation()
}

// Reset form when dialog closes
watch(model, (val) => {
  if (!val) {
    // Small delay so animation finishes before reset
    setTimeout(() => {
      reset()
      form.value = emptyForm()
      formRef.value?.resetValidation()
    }, 300)
  }
})
</script>
