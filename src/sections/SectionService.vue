<script>
import IconCard from "@/components/icons/IconCard.vue";
import {Icon} from "@iconify/vue";

export default {
  name: "SectionService",
  components: {
    Icon,
    IconCard,
  },
}
</script>

<template>
  <section id="service" class="container px-20 font-poppins py-24">
    <div class="">
      <p class="text-3xl font-semibold font-poppins text-orangeCrayola mb-14">Our Services</p>
     <div class="grid grid-cols-3 gap-5">

       <div class="bg-orangeLight py-8 px-7 rounded-2xl w-96">
         <div class="bg-white w-16 h-16  text-lg flex items-center justify-center rounded-full">
           <Icon icon="solar:card-broken" width="45" height="45" class="text-orangeCrayola font-light"/></div>
         <p class="font-semibold text-darkJungleGreen my-5">Membership Cards</p>
         <p class="text-rhino font-light w-80 mb-10">
           Offer a membership card with benefits such as
           exclusive discounts or special offers.</p>
       </div>

       <div class="bg-orangeLight py-8 px-7 rounded-2xl w-96">
         <div class="bg-white w-16 h-16  text-lg flex items-center justify-center rounded-full">
           <Icon icon="material-symbols-light:wifi" width="45" height="45" class="text-orangeCrayola font-light"/></div>
         <p class="font-semibold text-darkJungleGreen my-5">Wi-Fi & Charging Stations</p>
         <p class="text-rhino font-light w-80 mb-10">
           Offer free internet access to attract customers who want to work or relax while eating.</p>
       </div>

       <div class="bg-orangeLight py-8 px-7 rounded-2xl w-96">
         <div class="bg-white w-16 h-16  text-lg flex items-center justify-center rounded-full">
           <Icon icon="icon-park-outline:family" width="45" height="45" class="text-orangeCrayola font-light"/></div>
         <p class="font-semibold text-darkJungleGreen my-5">Family-Friendly Area</p>
         <p class="text-rhino font-light w-80 mb-10">
           Offer a membership card with benefits such as exclusive discounts or special offers.</p>
       </div>
     </div>
    </div>
  </section>
</template>

<style scoped>

</style>