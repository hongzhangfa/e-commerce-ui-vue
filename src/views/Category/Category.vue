<template>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h4 class="pt-3">Our Categories</h4>
          <router-link id="add-category" :to="{name : 'AddCategory'}" >
            <button class="btn btn-secondary">Add a new Category</button>
          </router-link>
        </div>
      </div>

      <!-- <div>{{ categories[0] }} </div> -->
      <div class="row">
        <div v-for="category of categories" :key="category.id" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
          <Category-Box :category="category">
          </Category-Box>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import axios from 'axios';
import CategoryBox from '../../components/Category/CategoryBox.vue';

  export default {
    name: "Cate-gory",
    data() {
      return {
        baseURL : "https://limitless-lake-55070.herokuapp.com/",
        categories: []
      }
    },
    methods: {
      async getCategories() {
        await axios.get(`${this.baseURL}/category/`)
        .then(res => this.categories = res.data)
        .catch(err => console.log(err))
      }
    },
    mounted() {
      this.getCategories();
    },
    components: {
      CategoryBox
    }
  }
  </script>
  
  <style scoped>
  h4 {
    font-family: 'Roboto', sans-serif;
    color: #484848;
    font-weight: 700;
  }
  
  #add-category {
    float: right;
    font-weight: 500;
  }
  </style>
  