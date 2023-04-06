<template>
  <div class="container">
        <LandingHeader />
        <AboutCustomer />
        <AboutMerchant />
        <!-- <v-footer border></v-footer> -->
        <!-- <v-footer
          class="bg-indigo-lighten-1 text-center d-flex flex-column"
        >
          <div>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              :icon="icon"
              variant="text"
            ></v-btn>
          </div>

          <div class="pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </div>

          <v-divider></v-divider>

          <div>
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </div>
        </v-footer> -->
    </div>
</template>

<script>
import LandingHeader from "../components/LandingHeader.vue";
import AboutCustomer from "../components/AboutCustomer.vue";
import AboutMerchant from "../components/AboutMerchant.vue";
import 'vuetify/components';

export default {
    name: "Landing",
    components: {
      LandingHeader,
      AboutCustomer,
      AboutMerchant
    },
};
</script>

<style scoped>  
@import url('https://fonts.googleapis.com/css?family=Nunito Sans');

/* .container {
  height: 100vh;
} */

body {
  margin: 0;
}
/* 
.header {
  background-image: url('../assets/bg2png.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}

.header::before {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.4)
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.topleft {
  position: relative;
  top: 0;
  left: 0;
}

.topright {
  position: fixed;
  top: 10px;
  right: 10px;
  text-align: center;
}

h1 {
  font-size: 47px;
  font-weight: normal;
  font-family: 'Nunito Sans';
  color: #fff;
  margin-bottom: 10px;
  margin-top: 0px;
} */

/* .signin {
  background-color: #16703c;
  color: #fff;
  font-family: "Nunito Sans";
  border-radius: 5px;
  border-color: white;
  padding: 10px 60px 10px;
  font-size: 20px;
  cursor: pointer;
  width: 190px;
  text-align: center;
}

.register {
  background-color: rgba(255, 255, 255, 0.7);;
  color: black;
  font-family: 'Nunito Sans';
  border-radius: 5px;
  border-color: white;
  padding: 10px 60px 10px;
  font-size: 20px;
  margin-left: 20px;
  margin-top: 10px;
  cursor: pointer;
  width: 190px;
  text-align: center;
} */

/* .icon {
  width: 200px;
  height: 200px;
}

.logo {
  width: 200px;
  height: 100px;
} */
</style>
