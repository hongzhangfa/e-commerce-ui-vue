<template>
  <!-- Navbar content -->

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <!--    Logo-->
      <router-link class="navbar-brand" :to="{ name: 'Home' }">
        <img id="logo" src="../assets/logo.png" />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <!-- <li class="nav-item">
          <a class="nav-link active" href="#">Link</a>
        </li> -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Browse </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" :to="{ name: 'Home' }">Home</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: 'Product' }">Product</router-link></li>
              <li><router-link class="dropdown-item" :to="{ name: 'Category' }">Category</router-link></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle active" href="#" id="navbarAccount" data-bs-toggle="dropdown" aria-expanded="false"> Accounts </a>
            <div class="dropdown-menu" aria-labelledby="navbarAccount">
              <router-link class="dropdown-item" v-if="token" :to="{ name: 'Wishlist' }">Wishlist </router-link>
              <router-link class="dropdown-item" v-if="!token" :to="{ name: 'Signup' }">Sign up </router-link>
              <router-link class="dropdown-item" v-if="!token" :to="{ name: 'Signin' }">Sign in </router-link>

              <a class="dropdown-item" v-if="token" href="#" @click="signout">Sign Out</a>
            </div>
          </li>

          <li class="nav-item">
            <div id="cart">
              <!-- cart badge 购物车数量标记 -->
              <span id="nav-cart-count">{{cartCount }} </span>
              <router-link class="text-light" :to="{ name: 'Cart' }">
                <!-- <font-awesome-icon icon="fa-solid fa-cart-shopping" style="font-size: 36px"/> -->
                <i class="fa fa-shopping-cart" style="font-size: 36px"></i>
              </router-link>
            </div>
          </li>

          <!-- <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> -->
        </ul>
        <form class="d-flex" role="search" style="width: 500px; margin-right: 100px">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

          <button class="btn btn-outline-success" type="submit" style="margin-bottom: 0px">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <!-- <nav class="navbar navbar-expand-lg bg-dark"> -->
  <!--    Burger Button-->
  <!-- <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button> -->

  <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent"> -->
  <!--      Search Bar-->
  <!-- <form class="form-inline ml-auto mr-auto">
        <div class="input-group">
          <input size="100" type="text" class="form-control" placeholder="Search Items" aria-label="Username" aria-describedby="basic-addon1" />
          
        </div>
      </form> -->
  <!-- dropdown for browse -->
  <!-- dropdown for account -->
  <!-- <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarAccount" data-toggle="dropdown"> Accounts </a>
          <div class="dropdown-menu" aria-labelledby="navbarAccount">
            <router-link class="dropdown-item" :to="{ name: 'Signup' }">Sign up </router-link>
            <router-link class="dropdown-item" :to="{ name: 'Signin' }">Sign in </router-link>
          </div>
        </li>
      </ul> -->

  <!-- </div>
  </nav>
   -->
</template>
<script>
  import swal from 'sweetalert';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  props: ["cartCount"],
  data() {
    return {
      token: null
    };
  },
  methods: {
    // 登出
    signout() {
      localStorage.removeItem("token");
      this.token = null;
      // 触发App.vue  重置购物车
      this.$emit("resetCartCount");
      this.$router.push({ name: "Home" });
      swal({
        text: "Logged you out. Visit Again",
        icon: "success",
        closeOnClickOutside: false,
      });
    }
  },
  mounted() {
    this.token = localStorage.getItem("token");
  }
};
</script>
<style scoped>
#logo {
  width: 50px;
  margin-left: 20px;
  margin-right: 10px;
}
.nav-link {
  color: rgba(255, 255, 255);
}

#search-button-navbar {
  background-color: #febd69;
  border-color: #febd69;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
#nav-cart-count {
  background-color: red;
  color: white;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  font-size: 15px;
  margin-left: 10px;
}
#cart {
  position: relative;
}
</style>
