<script>
  import FilterSectionMenu from "@/components/section_menu_components/FilterSectionMenu.vue";
  import axios from 'axios';

  export default  {
    components: {FilterSectionMenu},
    data() {
      return {
        cocktails: [],
        filteredMenus: []
      }
    },
    mounted() {
      this.fetchCocktails();
    },
    methods: {
      async fetchCocktails() {
        try {
          const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
          if (response.data.drinks && response.data.drinks.length > 0) {
            this.cocktails = response.data.drinks;
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
      extractIngredients(cocktail) {
        const ingredients = [];
        for (let i = 1; i <= 15; i++) {
          const ingredient = cocktail[`strIngredient${i}`];
          if (ingredient) {
            ingredients.push(ingredient);
          }
        }
        return ingredients;
      }
    }
  };
</script>

<template>
<!--  <FilterSectionMenu @filter="filterBySold" @showAll="showAllMenus"-->
<!--                     @filterPizza="filterPizza" @filterBurger="filterBurger"-->
<!--                     @filterIceCream="filterIceCream" @filterSpecificIds="filterSpecificIds"/>-->
  <div class="grid grid-cols-4 gap-7 mt-12 h-[400px] overflow-auto" v-if="cocktails.length > 0">
    <div class="w-72 mb-5" v-for="cocktail in cocktails" :key="cocktail.idDrink">
      <span class="mb-7 overflow-hidden">
        <img :src="cocktail.strDrinkThumb" alt="image pizza" >
      </span>
      <div>
       <div class="mt-4 h-32">
         <p class="font-semibold text-lg mb-1">{{ cocktail.strDrink}}</p>
         <article class="font-medium text-sm w-72 text-mediumGrey mb-4">{{ingredient}}</article>
       </div>
        <ul class="list-disc list-inside">
          <li v-for="(ingredient, index) in extractIngredients(cocktail)" :key="index">{{ ingredient }}</li>
        </ul>
        <p class="font-semibold text-electricBlue ">Rp1000.000</p>
      </div>

    </div>
  </div>
  <p v-else class="text-center">Loading...</p>
</template>

<style scoped>

</style>