<script>
export default {
  name: 'FilterSectionMenu',
};
</script>

<template>
  <nav class="pt-2">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#" class="style-title-section">Our Menu</a>
      <div class="flex justify-between items-center gap-20">
        <ul class="hidden md:flex space-x-8 font-medium">
          <li><button @click="$emit('filter')" class="style-filter-menu focus:text-electricBlue">Best Seller</button></li>
          <li><button @click="$emit('showAll')" class="style-filter-menu focus:text-electricBlue">All Menus</button></li>
          <li><button @click="$emit('filterPizza')" class="style-filter-menu focus:text-electricBlue">Pizza</button></li>
          <li><button @click="$emit('filterBurger')" class="style-filter-menu focus:text-electricBlue">Burger</button></li>
          <li><button @click="$emit('filterIceCream')" class="style-filter-menu focus:text-electricBlue">Ice Cream</button></li>
          <li><button @click="$emit('filterSpecificIds')" class="style-filter-menu focus:text-electricBlue">Drinks</button></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
