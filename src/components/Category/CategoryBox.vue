<template>

<div class="card h-100 w-100" style="margin-top: 10px"  >
    <div class="embed-responsive embed-responsive-16by9">
        <img :src="category.imageURL" class="card-img-top" alt="...">
    </div>

  <div class="card-body">
    <h5 class="card-title">{{ category.categoryName }} </h5>
    <p class="card-text">{{ category.description }} </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

  </template>
  
  <script>
  export default {
    name: "CategoryBox",
    props: ["category"],
    methods: { },
  };
  </script>
  
  <style scoped>
  .embed-responsive .card-img-top {
    object-fit: cover;
  }
  
  a {
    text-decoration: none;
  }
  
  .card-title {
    color: #484848;
    font-size: 1.1rem;
    font-weight: 400;
  }
  
  .card-title:hover {
    font-weight: bold;
  }
  
  .card-text {
    font-size: 0.9rem;
  }
  
  #edit-category {
    float: right;
  }
  </style>
  