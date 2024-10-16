<script>
  export default {
    name: 'ImageGrid',
  };
</script>

<template>
  <div class="container mx-auto p-6">
    <div class=" flex gap-4 ">
      <div class="">
        <div class="rounded-lg overflow-hidden mb-4">
          <img src="/assets_Image/assets-image-gallery/image1-galery.png" alt="image" class="image-hover-style">
        </div>
        <div class="rounded-lg overflow-hidden">
          <img src="/assets_Image/assets-image-gallery/image4-galery.png" alt="image" class="image-hover-style">
        </div>
      </div>
      <div>
        <div class="rounded-lg overflow-hidden mb-4">
          <img src="/assets_Image/assets-image-gallery/image2-galery.png" alt="image" class="image-hover-style">
        </div>
        <div class="rounded-lg overflow-hidden">
          <img src="/assets_Image/assets-image-gallery/image5-gallery.png" alt="image" class="image-hover-style">
        </div>
      </div>
      <div class="">
        <div class="mb-4 overflow-hidden rounded-lg">
          <img src="/assets_Image/assets-image-gallery/image3-galery.png" alt="image" class="image-hover-style">
        </div>
        <div class=" h-[335px] overflow-hidden rounded-lg">
          <img src="/assets_Image/assets-image-gallery/image6-gallery.png" alt="image" class="image-hover-style">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1024px;
}
</style>