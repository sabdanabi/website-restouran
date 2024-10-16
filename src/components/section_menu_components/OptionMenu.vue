<script>
import FilterSectionMenu from "@/components/section_menu_components/FilterSectionMenu.vue";
import axios from 'axios';

export default {
  components: { FilterSectionMenu },
  data() {
    return {
      cocktails: [],
      categories: [],
      glasses: [],
      ingredients: [],
      alcoholFilters: [],
      selectedCategory: '',
      selectedGlass: '',
      selectedIngredient: '',
      selectedAlcohol: ''
    };
  },
  mounted() {
    this.fetchCocktails();
    this.fetchFilterData();
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

    async fetchFilterData() {
      try {
        const categoryResponse = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        this.categories = categoryResponse.data.drinks;

        const glassResponse = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list');
        this.glasses = glassResponse.data.drinks;

        const ingredientResponse = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
        this.ingredients = ingredientResponse.data.drinks;

        const alcoholResponse = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list');
        this.alcoholFilters = alcoholResponse.data.drinks;
      } catch (error) {
        console.error('Error fetching filter data:', error);
      }
    },

    async filterByCategory(category) {
      this.selectedCategory = category;
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
        if (response.data.drinks) {
          this.cocktails = response.data.drinks;
        }
      } catch (error) {
        console.error('Error filtering by category:', error);
      }
    },

    async filterByGlass(glass) {
      this.selectedGlass = glass;
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass}`);
        if (response.data.drinks) {
          this.cocktails = response.data.drinks;
        }
      } catch (error) {
        console.error('Error filtering by glass:', error);
      }
    },

    async filterByIngredient(ingredient) {
      this.selectedIngredient = ingredient;
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        if (response.data.drinks) {
          this.cocktails = response.data.drinks;
        }
      } catch (error) {
        console.error('Error filtering by ingredient:', error);
      }
    },

    async filterByAlcohol(alcohol) {
      this.selectedAlcohol = alcohol;
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alcohol}`);
        if (response.data.drinks) {
          this.cocktails = response.data.drinks;
        }
      } catch (error) {
        console.error('Error filtering by alcohol:', error);
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
  <FilterSectionMenu
      :categories="categories"
      :glasses="glasses"
      :ingredients="ingredients"
      :alcoholFilters="alcoholFilters"
      @filterCategory="filterByCategory"
      @filterGlass="filterByGlass"
      @filterIngredient="filterByIngredient"
      @filterAlcohol="filterByAlcohol"
  />
  <div class="grid grid-cols-4 gap-7 mt-12 h-[400px] overflow-auto" v-if="cocktails.length > 0">
    <div class="w-72 mb-5" v-for="cocktail in cocktails" :key="cocktail.idDrink">
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