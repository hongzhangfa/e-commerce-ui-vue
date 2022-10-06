<template>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h3 class="pt-3">
            Shopping cart
          </h3>
        </div>
      </div>
  
      <!-- loop over the cart items and display -->
  
      <div v-for="cartItem in cartItems" :key="cartItem.id" class="row mt-2 pt-3 justify-content-around">
        <div class="col-2"></div>
        <div class="col-md-3 embed-responsive embed-responsive-16by9">
          <img
            :src="cartItem.product.imageURL"
            alt=""
            class="w-100 card-image-top embed-responsive-item"
            style="object-fit: cover"
          />
        </div>
  
        <!-- display product name, quantity -->
        <div class="col-md-5 px-3">
          <div class="card-block px-3">
            <h6 class="card-title">
                <!-- 点击商品名称跳转至详情 -->
                <router-link
              :to="{ name: 'ShowDetails', params: { id: cartItem.product.id } }"
              >{{ cartItem.product.name }}
            </router-link>
            </h6>
            <!-- v4: font-weight-bold; Bootstrap v5 字体加粗: fw-bold -->
            <p class="mb-0 fw-bold" id="item-price">
              $ {{ cartItem.product.price }} per unit
            </p>
            <p class="mb-0" style="float:left;">Quantity:{{ cartItem.quantity }}</p>
          </div>
          <p class="mb-0" style="float:right;">
            Total:
            <span class="fw-bold">
              $ {{ cartItem.product.price * cartItem.quantity }}
            </span>
          </p>
<!-- 删除购物车物品 -->
<br/>
          <br /><a href="#" class="text-right" @click="deleteItem(cartItem.id)"
            >Remove From Cart</a
          >

        </div>
        <div class="col-2"></div>
        <div class="col-12"><hr /></div>
      </div>
  
      <!-- display the price -->
      <div class="total-cost pt-2 text-right">
        <h5>Total : ${{ totalCost.toFixed(2) }}</h5>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios";
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Cart",
    data() {
      return {
        cartItems: [],
        token: null,
        totalCost: 0,  // 总计 后台计算返回 
      };
    },
    props: ["baseURL"],
    methods: {
      // fetch All items in cart  // https://limitless-lake-55070.herokuapp.com/cart/?token=eebd103a-3b65-44c3-a062-2b0b4cdcaf35
      listCartItems() {
        axios
          .get(`${this.baseURL}cart/?token=${this.token}`)
          .then((res) => {
            console.log("==>listCartItems res ", res);
            const result = res.data;
            this.cartItems = result.cartItems;
            this.totalCost = result.totalCost;
          })
          .catch((err) => console.log("err", err));
      },
      deleteItem(itemId) {
      axios
        .delete(`${this.baseURL}cart/delete/${itemId}/?token=${this.token} `)
        .then(
          (response) => {
            if (response.status == 200) {
              this.$router.go(0);  // 刷新当前页面
            }
            this.$emit('fetchData');
          },
          (error) => {
            console.log(error);
          }
        );
    },
    },
    mounted() {
      this.token = localStorage.getItem("token");
      this.listCartItems();
    },
  };
  </script>

<style scoped>
    h4,
    h5 {
      font-family: 'Roboto', sans-serif;
      color: #484848;
      font-weight: 700;
    }
    
    .embed-responsive .card-img-top {
      object-fit: cover;
    }
    
    #item-price {
      color: #232f3e;
    }
    
    #item-quantity {
      float: left;
    }
    
    #item-total-price {
      float: right;
    }
    
    .confirm {
      font-weight: bold;
      font-size: larger;
    }
    </style>