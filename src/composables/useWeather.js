import axios from 'axios';
import { computed, ref } from 'vue';

export default function useWeather() {
  const weather = ref({});
  const loading = ref(false);
  const error = ref('');

  const getWeather = async ({ city, country }) => {
    const key = import.meta.env.VITE_API_KEY;
    loading.value = true;
    weather.value = {};
    error.value = '';
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${key}`;
    try {
      const { data } = await axios(geoUrl);
      const { lat, lon } = data[0];

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
      const { data: weatherData } = await axios(weatherUrl);
      weather.value = weatherData;
    } catch {
      error.value = 'City not found';
    } finally {
      loading.value = false;
    }
  };

  const showWeather = computed(() => Object.values(weather.value).length > 0);

  return {
    getWeather,
    weather,
    showWeather,
    loading,
    error,
  };
}
