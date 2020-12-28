<template>
  <div id="page-wrap" v-if="product">
    <div id="img-wrap">
      <img v-bind:src="product.imageUrl" alt="" />
      <div id="product-details">
        <h1>{{ product.name }}</h1>
        <h3 id="price">{{ product.price }}</h3>
        <p>Average Raiting: {{ product.averageRating }}</p>
        <button
          v-on:click="addToCart"
          v-if="!itemInCart && !showSuccessMsg"
          id="add-to-cart"
        >
          Add To Cart
        </button>
        <button
          v-if="!itemInCart && showSuccessMsg"
          class="greenBtn"
          id="add-to-cart"
        >
          Success Fully added item to cart
        </button>
        <button v-if="itemInCart" class="grayBtn" id="add-to-cart">
          Item already in cart
        </button>

        <h4>Description</h4>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
  <NotFoundPage v-else />
</template>

<script>
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
export default {
  name: "ProductDetailPage",
  components: {
    NotFoundPage,
  },
  data() {
    return {
      cartItems: [],
      product: {},
      showSuccessMsg: false,
    };
  },
  methods: {
    async addToCart() {
      await axios.post("http://localhost:9000/fkdata/users/12345/cart", {
        productId: this.$route.params.id,
      });
      this.showSuccessMsg = true;
      setTimeout(() => {
        this.$router.push("/products");
      }, 1500);
    },
  },
  computed: {
    itemInCart() {
      return this.cartItems.some((item) => item.id === this.product.id);
    },
  },
  async created() {
    const result = await axios.get(
      `http://localhost:9000/fkdata/products/${this.$route.params.id}`
    );
    const product = result.data;
    this.product = product;

    const result2 = await axios.get(
      "http://localhost:9000/fkdata/users/12345/cart"
    );
    const cartItems = result2.data;
    this.cartItems = cartItems;
  },
};
</script>

<style scoped>
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 400px;
}

#product-details {
  padding: 16px;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

#price {
  position: absolute;
  top: 24px;
  right: 16px;
}
.greenBtn {
  background-color: green;
}
.grayBtn {
  background-color: grey;
}
</style>
