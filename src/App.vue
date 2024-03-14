<script setup>
import Form from './components/Form.vue'
import Weather from './components/Weather.vue';
import Spinner from './components/Spinner.vue';
import useWeather from './composables/useWeather';

const { getWeather, weather, showWeather, loading } = useWeather()
</script>

<template>
  <h1 class="title">Weather Finder</h1>
  <div class="container weather-search">
    <Form @get-weather="getWeather" />
    <Spinner v-if="loading" />
    <Weather v-if="showWeather" :weather="weather" />
  </div>
</template>

<style scoped></style>
