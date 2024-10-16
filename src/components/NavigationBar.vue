<script>
  import IconHumburger from "@/components/icons/IconHumburger.vue";
  import {Icon} from "@iconify/vue";
  export default {
    components: {
      Icon,
      IconHumburger,
    },
    data() {
      return {
        isScrolled: false,
        isPopupOpen: false,
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
      document.addEventListener("click", this.handleClickOutside);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
      document.removeEventListener("click", this.handleClickOutside);
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
      togglePopup() {
        this.isPopupOpen = !this.isPopupOpen;
      },
      handleClickOutside(event) {
        const button = this.$refs.button;
        const popup = this.$refs.popup;

        if (popup && !popup.contains(event.target) && !button.contains(event.target)) {
          this.isPopupOpen = false;
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
            <router-link to="About">Home</router-link>
          </li>
          <li class="text-gray-300 hover:text-white font-poppins">
            <router-link to="/#about">About us</router-link>
          </li>
          <li class="text-gray-300 hover:text-white font-poppins">
            <router-link to="/#menus">Menus</router-link>
          </li>
          <li class="text-gray-300 hover:text-white font-poppins">
            <router-link to="/#gallery">Gallery</router-link>
          </li>
          <li class="text-gray-300 hover:text-white font-poppins">
            <router-link to="/#service">Services</router-link>
          </li>
        </ul>
        <button ref="button" @click="togglePopup" class="flex items-center justify-center text-white px-4 py-2 rounded-md focus:outline-none">
          <IconHumburger />
        </button>

        <div
            v-if="isPopupOpen" ref="popup"
            class="absolute right-10 top-16 mt-2 w-48 bg-white shadow-lg border rounded-md block"
        >
          <div class="flex gap-5 px-4 pt-4 pb-4 hover:bg-mediumGrey rounded-t-md">
            <Icon icon="material-symbols-light:comment-outline" width="30" height="30"/>
            <router-link to="/#review" class="mb-2">Review</router-link>
          </div>
          <div class="flex gap-5 px-4 pb-4 pt-4 hover:bg-mediumGrey rounded-b-md">
            <Icon icon="material-symbols-light:call-outline" width="30" height="30"/>
            <router-link to="/#footer" class="mb-2">Contact</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>


<style scoped>

</style>