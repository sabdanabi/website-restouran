<script>
import SectionHome from "@/sections/SectionHome.vue"
import SectionAbout from "@/sections/SectionAbout.vue";
import SectionMenu from "@/sections/SectionMenu.vue";
import SectionGalery from "@/sections/SectionGalery.vue";
import SectionService from "@/sections/SectionService.vue";
import SectionReview from "@/sections/SectionReview.vue";
import SectionFooter from "@/sections/SectionFooter.vue";
import NavigationBar from "@/components/NavigationBar.vue";
export default {
  data() {
    return {
      dataReview: [
        {
          userName: "Daniel Thompson",
          review: "Thanks for dinner last night! It was amazing! Definitely\n" +
              "            the best meal in a while. We'll be regulars now. My wife loved it,\n" +
              "            and we can't wait to bring our parents!",
          image: "/assets_Image/assets-image-review/daniel.png",
        },
        {
          userName: "Samantha Reed",
          review: "Delicious is our favorite spot for quality\n" +
              "            family time and delicious comfort food! Friendly staff, inviting atmosphere,\n" +
              "            and something for everyone on the menu.",
          image: "/assets_Image/assets-image-review/reed.png",
        },
        {
          userName: "Daniel Thompson",
          review: "Delicious is our go-to for pizza night!\n" +
              "            Fresh toppings, perfect crust, and a relaxed atmosphere make it a\n" +
              "            family favorite.",
          image: "/assets_Image/assets-image-review/alex.png",
        },
      ],
      newDataReview:[
        {
          userName: "",
          review: "",
        }
      ]
    }
  },
  methods: {
    addNewDataReview() {
      this.dataReview.push({ ...this.newDataReview });
      this.newDataReview = {userName: "", review: "",};
    }
  },
  components: {
    NavigationBar,
    SectionFooter,
    SectionReview,
    SectionService,
    SectionGalery,
    SectionMenu,
    SectionHome,
    SectionAbout
  },
}
</script>

<template>
  <body class="scroll-smooth">
    <NavigationBar/>
    <SectionHome/>
    <SectionAbout/>
    <SectionMenu/>
    <SectionGalery/>
    <SectionService/>
    <SectionReview :reviews="dataReview" />
    <SectionFooter :onAddReview="addNewDataReview" :newReview="newDataReview"/>
  </body>
</template>

<style scoped>

</style>
