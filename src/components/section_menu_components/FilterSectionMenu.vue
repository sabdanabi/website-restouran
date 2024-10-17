<script>export default {
  name: 'FilterSectionMenu',
  props: {
    onShowAll: {
      type: Function,
      required: true
    },
    filter: {
      type: Function,
      required: true
    },
    filterNonAlcohol: {
      type: Function,
      required: true
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
          <li><button @click="filter" class="style-filter-menu focus:text-electricBlue">Best Sellers</button></li>
          <li><button @click="showAll" class="style-filter-menu focus:text-electricBlue">All Menus</button></li>
          <li><button @click="$emit('filter')" class="style-filter-menu">Alcoholic</button></li>
          <li><button @click="$emit('filterNonAlcohol')" class="style-filter-menu">Non-Alcoholic</button></li>
          <li><button @click="filterIceCream" class="style-filter-menu">Ice Cream</button></li>
          <li><button @click="filterDrinks" class="style-filter-menu">Drinks</button></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
