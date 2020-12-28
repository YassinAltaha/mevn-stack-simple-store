<template>
  <div id="page-wrap">
    <ProductsGrid :products="products" />
  </div>
</template>

<script>
import axios from "axios";
import ProductsGrid from "../components/ProductsGrid";
export default {
  name: "ProductPage",
  components: {
    ProductsGrid,
  },
  data() {
    return {
      title: "Hellow",
      products: [],
    };
  },
  async created() {
    console.log("test");
    const result = await axios.get("http://localhost:9000/fkdata/");

    const products = result.data;
    console.log(products);
    this.products = products;
  },
};
</script>

<style scoped>
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}
</style>
