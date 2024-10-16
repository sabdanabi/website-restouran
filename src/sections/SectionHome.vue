<script>
import NavigationBar from "@/components/NavigationBar.vue"
export default {
  name: "SectionHome",
  components: {
    NavigationBar
  },
}
</script>

<template>
  <section id="home" class="bg-hero-baner-background h-[100vh] px-20 py-3 font-poppins container">
    <div class="container flex mt-20">
      <article class="w-[55%] mt-32">
        <p class="text-white font-semibold text-5xl leading-relaxed">
          Savor, Relax & Discover the
          Authentic Flavors with
          Gourmet Delights
        </p>
        <p class="text-white leading-relaxed mt-4 text-lg w-[66%]">
          LeT’S EaT is your go-to neighborhood spot for seasonal dishes inspired by international cuisine.
        </p>
        <button class="bg-[#FD872D] py-3 text-white font-medium text-sm px-6 rounded-lg mt-9
        hover:border-2 hover:border-[#FD872D] hover:bg-transparent">
          <router-link to="/#menus">Explore Menu</router-link>
        </button>
      </article>
      <div>
        <img src="/assets_Image/hero_baner_image.png">
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>