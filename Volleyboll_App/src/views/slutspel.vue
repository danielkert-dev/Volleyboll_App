<script>
// Importera vue-tournament-bracket
import VueTournamentBracket from 'vue-tournament-bracket';

export default {
  components: {
     // Registrera VueTournamentBracket
    VueTournamentBracket,
  },
  data() {
    return {
       // Data om turneringen för spelare/lag i bracketsen
      rounds: [
      {
          games: [
            {
              // Datan inom bracketsen
              player1: { id: "2", name: "Deltagare 2", winner: true },
              player2: { id: "4", name: "Deltagare 4", winner: false },
            },
            {
              player1: { id: "5", name: "Deltagare 5", winner: false },
              player2: { id: "8", name: "Deltagare 8", winner: true },
            },
            {
              player1: { id: "10", name: "Deltagare 10", winner: false },
              player2: { id: "12", name: "Deltagare 12", winner: true },
            },
            {
              player1: { id: "10", name: "Deltagare 10", winner: false },
              player2: { id: "12", name: "Deltagare 12", winner: true },
            }
          ]
        },  
      {
          games: [
            {
              player1: { id: "2", name: "Deltagare 2", winner: false },
              player2: { id: "4", name: "Deltagare 4", winner: true },
            },
            {
              player1: { id: "5", name: "Deltagare 5", winner: false },
              player2: { id: "8", name: "Deltagare 8", winner: true },
            }
          ]
        },
        {
          games: [
            {
              player1: { id: "1", name: "väntar spelare", winner: null },
              player2: { id: "1", name: "väntar spelare", winner: null },
            }
          ]
        }
        
      ]
    }
    ;
  },
  methods: {
    getPlayerClass(player) {
    },
    toggleDropdown(player) {
      // Stäng alla dropdown förutom den som klickades
      this.rounds.forEach(round => {
        round.games.forEach(game => {
          if (game.player1 !== player && game.player1.showDropdown) {
            game.player1.showDropdown = false;
          }
          if (game.player2 !== player && game.player2.showDropdown) {
            game.player2.showDropdown = false;
          }
        });
      });
      // byt dropdown om man öppnar ny
      player.showDropdown = !player.showDropdown;
      // sätt text beroende på dropdown
      switch (player.id) {
        case "1":
          player.specialText = "väntar spelare";
          break;
        case "2":
          player.specialText = "Text ID 2";
          break;
        case "4":
          player.specialText = "Text ID 4";
          break;

        default:
          player.specialText = "Ingen information";
          break;
      }
    },
    closeDropdownsOnClickOutside(event) {
      // Stäng dropdown om klick utanför dem
      if (!this.$el.contains(event.target)) {
        this.rounds.forEach(round => {
          round.games.forEach(game => {
            game.player1.showDropdown = false;
            game.player2.showDropdown = false;
          });
        });
      }
    }
  },
  mounted() {
    document.addEventListener("click", this.closeDropdownsOnClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeDropdownsOnClickOutside);
  }
}
</script>

<template>

  <div class="nav">
    <div class="logo">
      <img class="volleyimg" src="@/assets/volleybollnobg.png">
    </div>
    <button class="hamburger"></button>  
  </div>
  
  <vue-tournament-bracket :rounds="rounds">
    <template v-slot:player="{ player }">
      <div class="popup-trigger" @click.stop="toggleDropdown(player)">
        <span :class="getPlayerClass(player)">
          {{ player.name }}
        </span>
      </div>
      <div v-if="player.showDropdown" class="dropdown">
        <p>{{ player.specialText }}</p>
      </div>
    </template>
  </vue-tournament-bracket>

  <div class="phone-container">
  <img class="phone-img" src="https://cdn-icons-png.freepik.com/512/68/68737.png" alt="turn the phone">
  </div>


  <div class="box">
    <p class="boxtext">Most points: IT21</p>
    <p class="boxtext">Best W/L: IT21</p>
    <p class="boxtext">Price: Pizza</p>
  </div>
</template>



<style>

.box {
  position:absolute;
  border: solid black;
  border-radius:30px;
  text-align: center;
  bottom:0%;
  right:0%;
  margin:5%;
}

.boxtext {
  font-size:1.2em;
  padding:3%;
}

.nav {
  background-color: blue;
  position:fixed;
  top:0%;
  left:0%;
  right:0%;
  height:3.5em;
  z-index:200;
}

.hamburger{
  background-image: url(../assets/Bakgrundsbild.png);
  background-color:transparent;
  border:transparent;
  position: fixed;
  width: 3.8em;
  height:3.2em;
  top:1%;
  right: 2%;
}

.volleyimg {
  position:fixed;
  z-index:150;
  height:3.5em;
  width:3.5em;
}

.logo {
  position:fixed;
  z-index:150;
  height:3.2em;
  width:3.2em;
}

.dropdown {
  position: absolute;
  background-color: black; 
  color: white;
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}
.dropdown p {
  background-color: black !important;
}
.vtb-wrapper {
  position: absolute; 
  top: 20% !important;
  bottom:30%!important;
  left:5%;
  display: block !important;
}
.vtb-item-players .not-started {
  background-color: gray !important;
}
.vtb-item-players, .vtb-item-players .winner, .vtb-item-players .defeated, .popup-trigger {
  width:15em;
}
.vtb-item-players .winner {
  background-color: rgb(5, 171, 5) !important;
}
.vtb-item-players .defeated {
  background-color: red !important;
}

.phone-img {
  display: none;
  }


@media only screen and (max-height:600px){
  .box {
  position:absolute;
  border: solid black;
  border-radius:30px;
  text-align: center;
  top:400px;
  right:0px;
  bottom:auto;
}
}

@media only screen and (max-width:450px){
  .phone-img {
    display: flex;
    height: 40%;
    width: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 150; 
  }

  .phone-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 128, 0); 
    z-index: 100; 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 149;
  }

  .nav {
  background-color: blue;
  position:fixed;
  top:0%;
  left:0%;
  right:0%;
  height:4.5em;
  z-index:200;
}


}

</style>
