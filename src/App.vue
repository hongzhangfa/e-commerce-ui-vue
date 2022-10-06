<template>
  <div id="app">
    <div id="nav">
      <Navbar :cartCount="cartCount" @resetCartCount="resetCartCount"/>
    </div>
    <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->

    <!-- All child components will receive the prop passed in   <router-view> -->
    <div style="min-height: 60vh">
      <router-view v-if="products && categories" :baseURL="baseURL" :products="products" :categories="categories" @fetchData="fetchData">
      </router-view>
    </div>
    
    <Footer />
  </div>
</template>

<script>
/* eslint-disable */
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import axios from "axios";
export default {
  components: {
    Navbar,
    Footer
},
  data() {
    return {
      baseURL: "https://limitless-lake-55070.herokuapp.com/",
      products: null,
      categories: null,
      cartCount: 0,
    };
  },
  methods: {
    async fetchData() {
      //fetch categories
      await axios
        .get(this.baseURL + "category/")
        .then((res) => (this.categories = res.data))
        .catch((err) => console.log(err));

      // fetch products
      await axios
        .get(this.baseURL + "product/")
        .then((res) => (this.products = res.data))
        .catch((err) => console.log(err));

// fetch cart item if token is present i.e logged in
        if (this.token) {
        await axios.get(`${this.baseURL}cart/?token=${this.token}`).then(
          (response) => {
            if (response.status == 200) {
              // update cart
              this.cartCount = Object.keys(response.data.cartItems).length;
              console.log("==> cartCount ", this.cartCount);
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    },

    resetCartCount() {
      this.cartCount = 0;
    },

    
  },
  mounted() {
    this.token = localStorage.getItem('token');
    this.fetchData();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


html {
  overflow-y: scroll;
}
</style>
