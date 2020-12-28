<template>
  <div class="grid-wrap">
    <ProductGridItem
      :key="product.id"
      v-for="product in products"
      :product="product"
    />
  </div>
</template>

<script>
import ProductGridItem from "./ProductsGridItem";
export default {
  name: "ProductGrid",
  props: ["products"],
  components: {
    ProductGridItem,
  },
};
</script>
