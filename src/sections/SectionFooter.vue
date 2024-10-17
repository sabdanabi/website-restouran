<script>

import {Icon} from "@iconify/vue";
import MapLocationComponents from "@/components/footer_components/MapLocationComponents.vue";

  export default {
    name: "SectionFooter",
    components: {MapLocationComponents, Icon},
    props: {
      newReview: {
        type: Object,
        required: true
      },
      onAddReview: {
        type: Function,
        required: true
      }
    },
  }
</script>

<template>
  <footer id="footer" class="bg-bgLightBlue px-20 pt-20 pb-5 font-poppins">
    <div class="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-4 text-gray-600">
      <div>
        <h3 class="text-blue-600 font-bold mb-4">LeT'S EaT</h3>
        <p class="w-72">LeT'S EaT, founded in 1990, serves pizzas, burgers, and similar fast food.</p>
      </div>

      <div>
        <h3 class="text-blue-600 font-bold mb-4">Get in Touch</h3>
        <ul class="space-y-2">
          <li class="flex items-center">
            <Icon icon="lsicon:location-outline" width="20" height="20" class="mr-2"/> 8819 Ohio St. South Gate, CA 90280
          </li>
          <li class="flex items-center">
            <Icon icon="ic:outline-email" width="20" height="20" class="mr-2"/> letseat@hello.com
          </li>
          <li class="flex items-center">
            <Icon icon="material-symbols:call-outline" width="20" height="20" class="mr-2"/> +62 386-688-3295
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-blue-600 font-bold mb-4">Service</h3>
        <ul class="space-y-2">
          <li>Full-Service Dining</li>
          <li>Family-Friendly Area</li>
          <li>Special Event Nights</li>
          <li>Web Design</li>
          <li>Charging Stations</li>
        </ul>
      </div>

      <div>
        <div class="flex gap-8">
          <div class="w-20">
            <span class="bg-electricBlue w-12 h-12 text-lg flex items-center justify-center rounded-full ml-5">
              <Icon icon="mdi:instagram" width="25" height="25" class="text-white"/>
            </span>
            <p class="flex items-center justify-center text-xs font-medium mt-2">@LetsEat_Restaurant</p>
          </div>
          <div class="w-20">
            <span class="bg-electricBlue w-12 h-12 text-lg flex items-center justify-center rounded-full ml-5">
              <Icon icon="iconoir:x" width="25" height="25" class="text-white"/>
            </span>
            <p class="flex items-center justify-center text-xs font-medium mt-2">@LetsEat_1990</p>
          </div>
          <div class="w-20">
            <span class="bg-electricBlue w-12 h-12 text-lg flex items-center justify-center rounded-full ml-5">
              <Icon icon="ri:facebook-line" width="25" height="25" class="text-white"/>
            </span>
            <p class="flex items-center justify-center text-xs font-medium mt-2">LeT'SEaTOfficial</p>
          </div>
        </div>

        <div class="mt-7">
          <input v-model="newReview.userName" placeholder="Enter your name..." class="border-electricBlue border-2 rounded-lg w-80 p-3 bg-transparent">
          <textarea placeholder="Enter your review..." v-model="newReview.review"
                    class="border-electricBlue border-2 rounded-lg w-80 h-32 p-3 bg-transparent mt-3"></textarea>
          <button @click="onAddReview" type="submit" class="rounded-lg bg-electricBlue w-80 h-10 text-white font-medium">Submit</button>
        </div>
      </div>
    </div>
    <p class="mt-4 flex items-center justify-center">&copy;2024 Copyright Pandu Sabdanabi</p>
  </footer>

</template>

<style scoped>

</style>