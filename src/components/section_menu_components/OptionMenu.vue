<script>
import FilterSectionMenu from "@/components/section_menu_components/FilterSectionMenu.vue";
import axios from 'axios';

export default {
  components: { FilterSectionMenu },
  data() {
    return {
      cocktails: [],
      filteredMenus: [],
      filterType: 'Alcoholic',
    };
  },

  mounted() {
    this.fetchCocktails();
  },

  methods: {
    async fetchCocktails() {
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${this.filterType}`);
        if (response.data.drinks && response.data.drinks.length > 0) {
          this.cocktails = response.data.drinks;
          this.filteredMenus = this.cocktails;
        } else {
          this.filteredMenus = [];
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },

    showAllMenus() {
      this.filterType = 'Alcoholic';
      this.fetchCocktails();
    },

    filterByAlcoholic() {
      this.filterType = 'Alcoholic';
      this.fetchCocktails();
    },

    filterByNonAlcoholic() {
      this.filterType = 'Non_Alcoholic';
      this.fetchCocktails();
    },
  },
};
</script>


<template>
  <FilterSectionMenu :onFilter="filterByAlcoholic"
                     :onShowAll="showAllMenus"
                     @filterNonAlcohol="filterByNonAlcoholic"/>
  <div class="grid grid-cols-4 gap-7 mt-12 h-[400px] overflow-auto" v-if="filteredMenus.length > 0">
    <div class="w-72 mb-5" v-for="cocktail in filteredMenus" :key="cocktail.idDrink">
      <span class="mb-7 overflow-hidden h-32">
        <img :src="cocktail.strDrinkThumb" alt="image pizza" class="image-hover-style" >
      </span>
      <div>
       <div class="mt-4 h-32">
         <p class="font-semibold text-lg mb-1">{{ cocktail.strDrink}}</p>
         <article class="font-medium text-sm w-72 text-mediumGrey mb-4 line-clamp-3">
           {{ cocktail.strInstructions }}
         </article>
       </div>
<!--        <ul class="">-->
<!--          <li v-for="(ingredient, index) in extractIngredients(cocktail)" :key="index">{{ ingredient }}</li>-->
<!--        </ul>-->
        <p class="font-semibold text-electricBlue ">Rp1000.000</p>
      </div>

    </div>
  </div>
  <p v-else class="text-center">Loading...</p>
</template>

<style scoped>

</style>