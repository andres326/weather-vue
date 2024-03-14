<script setup>
import { formatTemperature } from '../helpers/formatTemperature'

defineProps({
  weather: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="result">
    <h2>Weather on: {{ weather.name }}</h2>
    <p class="current">{{ formatTemperature(weather.main.temp) }} &deg;C</p>
    <div class="temperatures">
      <p>Min: {{ formatTemperature(weather.main.temp_min) }}<span>&deg;C</span></p>
      <p>Max: {{ formatTemperature(weather.main.temp_max) }}<span>&deg;C</span></p>
    </div>
  </div>
</template>
