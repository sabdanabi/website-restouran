<script>
  export default {
    name: "SectionReview",
    props: {
      reviews: {
        type: Array,
        required: true
      }
    }

  }
</script>
1
<template>
  <section id="review" class="container px-20 font-poppins py-16 ">
    <div>
      <p class="font-semibold text-mediumGrey">Testimonials</p>
      <p class="text-3xl font-semibold font-poppins mb-14">What they’re
        <span class="text-electricBlue">saying</span> about us </p>
    </div>

    <div class="grid-cols-3 grid overflow-auto gap-20 h-[340px]">
      <div class="relative" v-for="review in reviews" :key="review.id">
        <div class="border-4 border-electricBlue w-96 pt-5 px-10 pb-7">
          <article class="mb-20">{{review.review}}</article>
          <p class="ml-36 font-semibold">{{review.userName}}</p>
        </div>
        <img :src="review.image" alt="image-daniel"
             class="border-4 rounded-full border-electricBlue absolute top-48 left-5 w-36">
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>