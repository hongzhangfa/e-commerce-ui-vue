import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from '../views/Home.vue'

import AddCategory from '../views/Category/AddCategory.vue'
import Category from '../views/Category/Category.vue'
import EditCategory from '../views/Category/EditCategory.vue'
import Admin from '../views/Admin/Admin.vue'
import Product from '../views/Product/Product.vue'
import AddProduct from '../views/Product/AddProduct.vue'
import EditProduct from '../views/Product/EditProduct.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
   //Admin routes
  // admin home page
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
//Category routes
{
  path: '/category',
  name: 'Category',
  component: Category
},
  {
    path: '/admin/category',
    name: 'AdminCategory',
    component: Category
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  //Product routess
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: Product
  },
  {
    path: '/admin/product/new',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct,
  },

  // {
  //   path: '/wishlist',
  //   name: 'Wishlist',
  //   component: Wishlist
  // },
  // {
  //   path : '/cart',
  //   name : 'Cart',
  //   component : Cart
  // },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
