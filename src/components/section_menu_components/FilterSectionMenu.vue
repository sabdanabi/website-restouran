<script>
export default {
  name: 'FilterSectionMenu',
  methods: {
    // Emit events for each button with specific names.
    filterBestSellers() {
      this.$emit('filterBestSellers');
    },
    showAllMenus() {
      this.$emit('showAllMenus');
    },
    filterAlcoholic() {
      this.$emit('filterAlcoholic');
    },
    filterBurger() {
      this.$emit('filterBurger');
    },
    filterIceCream() {
      this.$emit('filterIceCream');
    },
    filterDrinks() {
      this.$emit('filterDrinks');
    }
  }
};
</script>

<template>
  <nav class="pt-2">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#" class="style-title-section">Our Menu</a>
      <div class="flex justify-between items-center gap-20">
        <ul class="hidden md:flex space-x-8 font-medium">
          <!-- Update the click handlers to call the methods defined in the script -->
          <li><button @click="filterBestSellers" class="style-filter-menu focus:text-electricBlue">Best Sellers</button></li>
          <li><button @click="showAllMenus" class="style-filter-menu focus:text-electricBlue">All Menus</button></li>
          <li><button @click="filterAlcoholic" class="style-filter-menu">Alcoholic</button></li>
          <li><button @click="filterBurger" class="style-filter-menu">Burger</button></li>
          <li><button @click="filterIceCream" class="style-filter-menu">Ice Cream</button></li>
          <li><button @click="filterDrinks" class="style-filter-menu">Drinks</button></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Add your styles here */
</style>
