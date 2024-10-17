<script setup>
import { onMounted } from 'vue';
import L from 'leaflet';

onMounted(() => {
  const map = L.map('map').setView([33.950282568258274, -118.22167016139555], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([33.950282568258274, -118.22167016139555]).addTo(map)
      .bindPopup('LeT\'S EaT Location')
      .openPopup();
});
</script>

<template>
  <section id="map">
    <div id="map" class="w-full h-80"></div>
  </section>

</template>

<style scoped>
</style>
