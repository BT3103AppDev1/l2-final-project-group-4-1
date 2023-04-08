<template>
  <div class="app">
    
    <CustomerNavigationBar />
    <div class="app-wrapper">
      <h1>Cart</h1>

      <!-- Items -->
      <!-- <ItemCard
        v-bind:filteredItems="filteredMerchants"
        v-bind:clickRouter="clickRouter"
      /> -->
      <CartItemCard />
    </div>
  </div>
</template>

<script>
import CartItemCard from "@/components/CartItemCard.vue";
import CustomerNavigationBar from "@/components/CustomerNavigationBar.vue";

export default {
  name: "Cart",
  data: function () {
    return {};
  },
  mounted() {
    // this.display();
  },
  components: {
    CustomerNavigationBar,
    CartItemCard,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;1,900&display=swap");

:root {
  font-size: 8px;
}

body {
  background-color: #f5f5ef;
}
h1 {
  font-family: "Nunito Sans", sans-serif;
  font-size: 4rem;
  font-weight: bold;
  text-align: left;
  letter-spacing: 2%;
  line-height: 30px;
  color: #000000;
}
.app {
  margin: auto;
  width: 100%;
}
.app-wrapper {
  margin-top: 40px;
  margin-left: 120px;
  margin-right: 120px;
}
</style>
