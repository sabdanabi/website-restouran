<script>
  import FilterSectionMenu from "@/components/section_menu_components/FilterSectionMenu.vue";
  import axios from 'axios';

  export default  {
    components: {FilterSectionMenu},
    data() {
      return {
        menus: [
          {
            id: 1,
            name: 'Pepperoni Pizza',
            decs: 'Pizza with tomato sauce, mozzarella cheese and crispy pepperoni topping.',
            price: 70000,
            sold: 58,
            image: '/assets_Image/assest-image-menu/image-menu-pizza.png'
          },
          {
            id: 2,
            name: 'Hawaiian Pizza',
            decs: 'Pizza topped with fresh pineapple, ham and mozzarella cheese.',
            price: 65000,
            sold: 60,
            image: '/assets_Image/assest-image-menu/pizza7.png'
          },
          {
            id: 3,
            name: 'BBQ Chicken Pizza',
            decs: 'Pizza with BBQ sauce, shredded chicken, bell peppers, red onions and cheddar cheese.',
            price: 72000,
            sold: 45,
            image: '/assets_Image/assest-image-menu/pizza-extra-chees.png'
          },
          {
            id: 4,
            name: 'Veggie Deluxe Pizza',
            decs: 'Pizza with tomato sauce, mozzarella cheese, peppers, onions and mushrooms.',
            price: 68000,
            sold: 34,
            image: '/assets_Image/assest-image-menu/pizza-chees.png'
          },
          {
            id: 5,
            name: 'Meat Lovers Pizza',
            decs: 'Pizza with different types of meat such as sausage, pepperoni, ham, and beef.',
            price: 75000,
            sold: 45,
            image: '/assets_Image/assest-image-menu/pizza-extra-chees.png'
          },
          {
            id: 6,
            name: 'Paperoni Lovers Pizza',
            decs: 'Pizza with different types of Paperoni such as sausage, pepperoni, ham, and beef.',
            price: 73000,
            sold: 40,
            image: '/assets_Image/assest-image-menu/pizza-extra-paperoni.png'
          },
          {
            id: 7,
            name: 'Classic Cheeseburger',
            decs: 'Roast beef, cheddar cheese, lettuce, tomato, pickles and special sauce on a brioche bun.',
            price: 45000,
            sold: 30,
            image: '/assets_Image/assest-image-menu/burger2.png'
          },
          {
            id: 8,
            name: 'Bacon BBQ Burger',
            decs: 'Beef, crispy bacon, BBQ sauce, caramelized onions and mozzarella cheese.',
            price: 52000,
            sold: 23,
            image: '/assets_Image/assest-image-menu/burger3.png'
          },
          {
            id: 9,
            name: 'Spicy Chicken Burger',
            decs: 'Beef, crispy bacon, BBQ sauce, caramelized onions and mozzarella cheese.Spicy fried chicken fillet, lettuce, tomato and spicy mayo sauce.',
            price: 48000,
            sold: 66,
            image: '/assets_Image/assest-image-menu/burger4.png'
          },
          {
            id: 10,
            name: 'Mushroom Swiss Burger',
            decs: 'Daging sapi, jamur panggang, keju Swiss, dan saus krim jamur.',
            price: 50000,
            sold: 69,
            image: '/assets_Image/assest-image-menu/burger.png'
          },
          {
            id: 11,
            name: 'Double Beef Bacon Burger',
            decs: 'Two beef patties, crispy bacon, cheddar cheese and special sauce.',
            price:  60000,
            sold: 34,
            image: '/assets_Image/assest-image-menu/burger5.png'
          },
          {
            id: 12,
            name: 'Double Beef Bacon',
            decs: 'Two beef patties, crispy bacon, cheddar',
            price:  47000,
            sold: 40,
            image: '/assets_Image/assest-image-menu/burger6.png'
          },
          {
            id: 13,
            name: 'Double Beef Bacon',
            decs: 'Two beef patties, crispy bacon, cheddar',
            price:  47000,
            sold: 40,
            image: '/assets_Image/assest-image-menu/burger6.png'
          },
          {
            id: 14,
            name: 'Chocolate Fudge Sundae Ice Cream',
            decs: 'Vanilla ice cream with dark chocolate sauce, almond pieces and whipped cream.',
            price:  20000,
            sold: 67,
            image: '/assets_Image/assest-image-menu/choclat-ice-cream.png'
          },
          {
            id: 15,
            name: 'Strawberry Dream Ice Cream',
            decs: 'Fresh strawberry ice cream topped with strawberry pieces and strawberry sauce.',
            price:  30000,
            sold: 50,
            image: '/assets_Image/assest-image-menu/setrawberry-ice-ceram.png'
          },
          {
            id: 16,
            name: 'Matcha Madness Ice Cream',
            decs: 'Matcha ice cream topped with sweet red beans and mochi pieces.',
            price:  18000,
            sold: 35,
            image: '/assets_Image/assest-image-menu/macha-ice-cream.png'
          },
          {
            id: 17,
            name: 'Salted Caramel Pretzel Ice Cream',
            decs: 'Caramel ice cream with crunchy salty pretzels and caramel sauce.',
            price:  20000,
            sold: 30,
            image: '/assets_Image/assest-image-menu/tiramisu-ice-cream.png'
          },
          {
            id: 18,
            name: 'Tropical Paradise Ice Cream',
            decs: 'Coconut ice cream with pineapple chunks and sweet coconut sauce.',
            price:  31000,
            sold: 55,
            image: '/assets_Image/assest-image-menu/berry-ice-cream.png'
          },
          {
            id: 19,
            name: 'Hazelnut Chocolate Crunch Ice Cream',
            decs: 'Chocolate ice cream with roasted hazelnuts and chocolate wafer flakes.',
            price:  25000,
            sold: 50,
            image: '/assets_Image/assest-image-menu/cokies-and-cream-ice-cream.png'
          },
          {
            id: 20,
            name: 'Iced Mocha Latte',
            decs: 'Espresso, chocolate and cold milk with ice cubes.',
            price:  25000,
            sold: 56,
            image: '/assets_Image/assest-image-menu/milk-coffe.png'
          },
          {
            id: 21,
            name: 'Cola',
            decs: 'Blueberry flavored soda with syrup and fresh blueberry pieces.',
            price:  22000,
            sold: 30,
            image: '/assets_Image/assest-image-menu/cola.png'
          },
          {
            id: 22,
            name: 'Americano',
            decs: 'Espresso with cold milk, caramel sauce and ice cubes.',
            price:  26000,
            sold: 37,
            image: '/assets_Image/assest-image-menu/americano.png'
          },
          {
            id: 23,
            name: 'Guava Juice',
            decs: 'Fresh guava blended with milk and ice cubes.',
            price:  20000,
            sold: 55,
            image: '/assets_Image/assest-image-menu/guava-juice.png'
          },
          {
            id: 24,
            name: 'Brownis',
            decs: 'Topping variants such as almonds, walnuts, or choco chips.',
            price:  27000,
            sold: 55,
            image: '/assets_Image/assest-image-menu/brownise.png'
          },
          {
            id: 25,
            name: 'Sandwich',
            decs: 'The fillings can vary from meat (such as ham, chicken, or beef), cheese, vegetables, etc.',
            price:  27000,
            sold: 55,
            image: '/assets_Image/assest-image-menu/sandwich.png'
          },
          {
            id: 26,
            name: 'Hotdog',
            decs: 'Cooked and served inside a long oval-shaped bun. Hot dog sausages can be grilled',
            price:  30000,
            sold: 34,
            image: '/assets_Image/assest-image-menu/hot-dog.png'
          },
          {
            id: 26,
            name: 'Onion Rings',
            decs: ' The onions are dipped in flour batter, then fried until crispy and golden.',
            price:  38000,
            sold: 55,
            image: '/assets_Image/assest-image-menu/onion-rings.png'
          },
        ],
        filteredMenus: []
      }
    },
    methods: {
      filterBySold() {
        this.filteredMenus = this.menus.filter(menu => menu.sold > 50);
      },
      showAllMenus() {
        this.filteredMenus = [];
      },
      filterPizza() {
        this.filteredMenus = this.menus.filter(menu => menu.name.toLowerCase().includes('pizza'));
      },
      filterBurger() {
        this.filteredMenus = this.menus.filter(menu => menu.name.toLowerCase().includes('burger'));
      },
      filterIceCream() {
        this.filteredMenus = this.menus.filter(menu => menu.name.toLowerCase().includes('ice cream'));
      },
      filterSpecificIds() {
        const specificIds = [20, 21, 22, 23];
        this.filteredMenus = this.menus.filter(menu => specificIds.includes(menu.id));
      }
    },
    computed: {
      displayedMenus() {
        return this.filteredMenus.length > 0 ? this.filteredMenus : this.menus;
      },
    },
  };
</script>

<template>
  <FilterSectionMenu
      @filter="filterBySold"
      @showAll="showAllMenus"
      @filterPizza="filterPizza"
      @filterBurger="filterBurger"
      @filterIceCream="filterIceCream"
      @filterSpecificIds="filterSpecificIds"
  />
  <div class="grid grid-cols-4 gap-7 mt-12 h-[400px] overflow-auto">
    <div
        class="w-72 mb-5"
        v-for="menu in displayedMenus"
        :key="menu.id"
    >
      <span class="mb-7 overflow-hidden">
        <img
            :src="menu.image"
            alt="image menu"
        />
      </span>
      <div>
        <div class="mt-4 h-32">
          <p class="font-semibold text-lg mb-1">{{ menu.name }}</p>
          <article class="font-medium text-sm w-72 text-mediumGrey mb-4">
            {{ menu.decs }}
          </article>
        </div>
        <p class="font-semibold text-electricBlue ">Rp{{ menu.price.toLocaleString() }}</p>
        <p class="text-sm text-gray-500">Sold: {{ menu.sold }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>