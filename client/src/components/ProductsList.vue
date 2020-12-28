<template>
  <div v-if="products.length > 0">
    <ProductListItem
      v-for="product in products"
      v-on:remove-from-cart="$emit('remove-from-cart', $event)"
      :key="product.id"
      :product="product"
    />
  </div>
  <div v-else>
    <h1>You haven't added anything to your template</h1>
  </div>
</template>

<script>
import ProductListItem from "./ProductsListItem";
export default {
  name: "ProductList",
  props: ["products"],
  components: {
    ProductListItem,
  },
};
</script>

<style scoped></style>
