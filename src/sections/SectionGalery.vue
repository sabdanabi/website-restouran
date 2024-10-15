<script>
import ImageGalery from "@/components/section_galery_components/ImageGalery.vue";

export default {
  name: "SectionGalery",
  components:{
    ImageGalery
  }
}
</script>

<template>
  <section id="gallery" class="px-20 py-3 font-poppins mt-24">
    <p class="flex justify-center items-center style-title-section">
      Our Gallery</p>
    <p class="flex justify-center items-center w-[500px] text-center m-auto mt-5 text-mediumGrey text-sm" >
      "A Feast for Your Eyes and Your
      Appetite" – Get a glimpse of our signature
      pizzas, burgers, and more through our gallery."</p>
    <ImageGalery/>
  </section>
</template>

<style scoped>

</style>