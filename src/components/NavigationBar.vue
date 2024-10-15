<script>
  import IconHumburger from "@/components/icons/IconHumburger.vue";
  export default {
    components: {
      IconHumburger,
    },
    data() {
      return {
        isScrolled: false,
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
          this.isScrolled = true;
        } else {
          this.isScrolled = false;
        }
      },
    },
  }

</script>

<template>
  <nav :class="['font-poppins w-full flex z-10 px-20', isScrolled ? 'fixed top-0 left-0 bg-black bg-opacity-75 backdrop-filter backdrop-blur-lg z-[9999] pb-5' : 'absolute top-0 left-0 bg-transparent']">
    <div class="container mx-auto flex justify-between items-center pt-4">
      <div class="text-white text-2xl font-bold">
        <router-link to="/" class="font-poppins">LeT'S EaT</router-link>
      </div>
      <div class="flex justify-between items-center gap-20">
        <ul class="hidden md:flex space-x-8">
          <li class="text-gray-300 hover:text-white font-poppins">
            <router-link to="/">Home</router-link>
          </li>
          <li class="text-gray-300 hover:text-white font-poppins">
            <router-link to="/about">About us</router-link>
          </li>
          <li class="text-gray-300 hover:text-white font-poppins">
            <router-link to="/menus">Menus</router-link>
          </li>
          <li class="text-gray-300 hover:text-white font-poppins">
            <router-link to="/gallery">Gallery</router-link>
          </li>
          <li class="text-gray-300 hover:text-white font-poppins">
            <router-link to="/service">Services</router-link>
          </li>
        </ul>
        <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
      </div>
    </div>
  </nav>
</template>


<style scoped>

</style>