import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Marketplace from '../views/Marketplace.vue'
import Dashboard from '../views/Dashboard.vue'
import CustomerProfile from '../views/CustomerProfile.vue'
import MerchantProfile from '../views/MerchantProfile.vue'
import AddListing from '../views/AddListing.vue'
import MerchantListings from '../views/MerchantListings.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/marketplace',
    name: 'Marketplace',
    component: Marketplace
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/customerprofile',
    name: 'CustomerProfile',
    component: CustomerProfile
  },
  {
    path: '/merchantprofile',
    name: 'MerchantProfile',
    component: MerchantProfile
   },
  {
    path: '/AddListing',
    name: 'AddListing',
    component: AddListing
  },
  {
    path: '/MerchantListings',
    name: 'MerchantListings',
    component: MerchantListings
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
