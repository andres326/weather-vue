<script setup>
import { reactive, ref } from 'vue';
import Alert from './Alert.vue'

const search = reactive({
  city: '',
  country: ''
})
const error = ref('')

const emit = defineEmits(['get-weather'])

const countries = [
  { code: 'US', name: 'United States' },
  { code: 'MX', name: 'Mexico' },
  { code: 'DE', name: 'Germany' },
  { code: 'AR', name: 'Argentina' },
  { code: 'CO', name: 'Colombia' },
  { code: 'ES', name: 'Spain' },
]

const searchWeather = () => {
  if (Object.values(search).includes('')) {
    error.value = 'All fields are required'
    return
  }
  error.value = ''
  emit('get-weather', search)
}
</script>
<template>
  <form class="form" @submit.prevent="searchWeather">
    <Alert v-if="error">{{ error }}</Alert>
    <div class="field">
      <label for="city">City</label>
      <input type="text" id="city" placeholder="City" v-model="search.city">
    </div>
    <div class="field">
      <label for="country">Country</label>
      <select type="text" id="country" v-model="search.country">
        <option value="">-- Select --</option>
        <option v-for="country in countries" :value="country.code">{{ country.name }}</option>
      </select>
    </div>
    <input type="submit" value="Search">
  </form>
</template>