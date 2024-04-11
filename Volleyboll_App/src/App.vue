<script>
import { RouterLink, RouterView } from 'vue-router'
import gruppspel from './views/gruppspel.vue';
import slutspel from './views/slutspel.vue';

export default {
  data() {
    return {
      activeTab: 'home',
    };
  },
  methods: {
    Nav_burgur() {
      const myPopup4 = new Popup({
        id: "Burger",
        title: "WOW",
        content: this.$refs.Olika_view.innerHTML,
      });
      myPopup4.show();
    },
  },
};

</script>

<template>
  <nav id="nav">
      <img class="volleyimg" src="./assets/volleybollnobg.png">
    <button class="hamburger" @click="Nav_burgur"></button>   
    <RouterLink to="/gruppspel">gruppspel</RouterLink>
    <RouterLink to="/slutspel">slutspel</RouterLink>
  </nav>

  <main id="main">
    <div ref="Olika_view" style="display: none;">
      <div>
        <RouterLink to="/gruppspel">gruppspel</RouterLink>
      </div>
      <div>
        <RouterLink to="/slutspel">slutspel</RouterLink>
      </div>
    </div>

    <RouterView />
    </main>
</template>

<style scoped>
#nav {
  position: absolute;
  display: flex;
  left: 0%;
  right: 0%;
  top: 0%;
  height: 10%;
  align-items: center;
  background-color: darkgreen;
}
#main {
  position: absolute;
  top: 10%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  height: fit-content;
  min-height: 90%;
  overflow: auto;
  background-image: url(./assets/Bakgrundsbild.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.hamburger{
  background-image: url(./assets/hamburger.png);
  position: relative;
  width: 50px;
  height: 43px;
  left: 80%;
  background-color: transparent;
  border:none;
}
.volleyimg {
  position:absolute;
  z-index:150;
  height:3.5em;
  width:3.5em;
}
</style>