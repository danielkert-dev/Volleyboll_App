<template>

  <main id="main">
    <nav id="nav">
      <img class="volleyimg" src="./assets/volleybollnobg.png">
    <div class="gold">
      <img class="goldimg" src="@/assets/gold.png">
      <div class="goldteam">IT21</div>
    </div>
    <div class="silver">
      <img class="silverimg" src="@/assets/silver.png">
      <div class="silverteam">IT22</div>
    </div>
    <div class="bronze">
      <img class="bronzeimg" src="@/assets/bronze.png">
      <div class="bronzeteam">MERK 40</div>
    </div>
    <button class="hamburger" @click="Nav_burgur"></button>   
    <RouterLink to="/gruppspel">gruppspel</RouterLink>
    <RouterLink to="/slutspel">slutspel</RouterLink>
  </nav>

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

<script>
import { RouterLink, RouterView } from 'vue-router'

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

<style scoped>

.goldteam{
  position:absolute;
left: 95px;
top:25px;
color:white;
}

.goldimg{
position:absolute;
left:60px;
top:20px;
}

.silverteam{
  position:absolute;
left:185px;
top:25px;
color:white;
}

.silverimg{
position:absolute;
left:150px;
top:20px;
}

.bronzeteam{
  position: absolute;
left:275px;
top:25px;
color:white;
}

.bronzeimg{
position:absolute;
left:240px;
top:20px;
}

#nav {
  position: absolute;
  display: flex;
  left: 0%;
  right: 0%;
  top: 0%;
  height: 10%;
  align-items: center;
  background-color: #124076;
}
#main {
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  height: fit-content;
  min-height: 100vh;
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