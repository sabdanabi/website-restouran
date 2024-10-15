<script>
  import FilterSectionMenu from "@/components/section_menu_components/FilterSectionMenu.vue";
  import OptionMenu from "@/components/section_menu_components/OptionMenu.vue";
  export default {
    name: "SectionMenu",
    components: {
      FilterSectionMenu,
      OptionMenu
    }
  }
</script>

<template>
  <section id="menus" class="px-20 font-poppins">
    <OptionMenu/>
  </section>
</template>

<style scoped>

</style>