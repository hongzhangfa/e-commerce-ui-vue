<template>
 
    <!-- Navbar content -->
 

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <!--    Logo-->
      <router-link class="navbar-brand" :to="{ name: 'Home' }">
      <img id="logo" src="../assets/logo.png" />
    </router-link>


    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
          <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active" href="#" id="navbarAccount" data-bs-toggle="dropdown" aria-expanded="false"> Accounts </a>
          <div class="dropdown-menu" aria-labelledby="navbarAccount">
            <router-link class="dropdown-item" v-if="token" :to="{ name: 'Wishlist' }">Wishlist </router-link>
            <router-link class="dropdown-item" v-if="!token" :to="{ name: 'Signup' }">Sign up </router-link>
            <router-link class="dropdown-item" v-if="!token" :to="{ name: 'Signin' }">Sign in </router-link>

            <a class="dropdown-item" v-if="token" href="#" @click="signout"
              >Sign Out</a
            >
          </div>
        </li>

        
        <!-- <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> -->
      </ul>
      <form class="d-flex" role="search" style="width: 500px; margin-right: 100px">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">

        <button class="btn btn-outline-success" type="submit" style="margin-bottom: 0px;">Search
         
        </button>
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
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  data() {
    return {
      token: null,
    };
  },
  methods: {
    // 登出
    signout() {
      localStorage.removeItem("token");
      this.token = null;
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
  },
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
</style>
