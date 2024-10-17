<script setup>

import {Icon} from "@iconify/vue";
</script>

<template>
  <section class="container px-48 font-poppins py-16" id="information">
    <div class="flex gap-20">
      <img src="/public/assets_Image/image-restourant2.png" alt="img-palce" class="w-64 h-64">
      <div>
        <div class="flex gap-3">
          <Icon icon="mynaui:location" width="30" height="30"/>
          <p class="text-xl font-semibold">Address</p>
        </div>

        <p class="mt-4 ml-11">8819 Ohio St. South Gate,
          CA 90280</p>
      </div>
      <div>
        <div class="flex gap-3">
          <Icon icon="material-symbols:call-outline"  width="30" height="30"/>
          <p class="text-xl font-semibold">Contact Information</p>
        </div>
        <div class="mt-4 ml-11">
          <p>+62 386-688-3295</p>
          <p>letseat@hello.com</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>