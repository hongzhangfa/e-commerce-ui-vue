<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Edit Category</h4>
        {{ id }}
      </div>
    </div>

    <div class="row">
      <div class="col-3"></div>
      <div class="col-md-6 px-5 px-md-0">
        <form v-if="category">
          <div class="form-group m-3">
            <label>Category Name</label>
            <input type="text" class="form-control" v-model="category.categoryName" required />
          </div>
          <div class="form-group m-3">
            <label>Description</label>
            <input type="text" class="form-control" v-model="category.description" required />
          </div>
          <div class="form-group m-3">
            <label>ImageURL</label>
            <input type="url" class="form-control" v-model="category.imageUrl" required />
          </div>
          <button type="button" class="btn btn-primary" @click="editCategory">Submit</button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
const axios = require("axios");
// eslint-disable-next-line no-unused-vars
const swal = require("sweetalert");

export default {
  data() {
    return {
      category: null,
      id: null
    };
  },
  props: ["baseURL", "categories"],
  methods: {
    async editCategory() {
      console.log("editCategory: ", this.category);
      // 删除 category 对象 key ["products"]
        delete this.category["products"]
        await axios.post(this.baseURL+"category/update/"+this.id, this.category)
        .then(res => {
            console.log("==>EditCategory res", res);
            //sending the event to parent to handle
          this.$emit("fetchData");
          this.$router.push({name:'AdminCategory'});
          swal({
            text: "Category Updated Successfully!",
            icon: "success",
            closeOnClickOutside: false,
          });
        })
        .catch(err => console.log(err));
    }
  },
  mounted() {
    // if (!localStorage.getItem('token')) {
    //   this.$router.push({name : 'Signin'});
    //   return;
    // }
    this.id = this.$route.params.id;
    // console.log(typeof this.id);  // string
    this.category = this.categories.find((category) => 
      category.id == this.id
      // console.log(typeof category.id); // number
    );
    console.log("category", this.category);
  }
};
</script>

<style></style>
