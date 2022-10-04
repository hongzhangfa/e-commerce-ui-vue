<template>
  
  <Navbar/>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->

  <!-- All child components will receive the prop passed in   <router-view> -->
    <div style="min-height: 60vh">
  <router-view
  :baseURL="baseURL"
      :products="products"
      :categories="categories"
      @fetchData="fetchData"
  >

    </router-view>
  </div>

  
</template>


<script>
  /* eslint-disable */ 
  import Navbar from './components/Navbar.vue';
  import axios from 'axios';
export default {
  components:{
    Navbar,
},
  data() {
    return {
      baseURL: 'https://limitless-lake-55070.herokuapp.com/',
      products: null,
      categories: null,
    }
  },
  methods: {
    async fetchData() {

      //fetch categories
      await axios
        .get(this.baseURL + 'category/')
        .then((res) => (this.categories = res.data))
        .catch((err) => console.log(err));

      // fetch products
      await axios
        .get(this.baseURL + 'product/')
        .then((res) => (this.products = res.data))
        .catch((err) => console.log(err));
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

html {
  overflow-y: scroll;
}
</style>
