
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
          stage:"Play-in",
          games: [
            //last game
            {
              // Datan inom bracketsen
              player1: { id: "2", name: "Deltagare 2", winner: true, points: 10  },
              player2: { id: "4", name: "Deltagare 4", winner: false, points: 1  },
            },

          ]
        },
        {
          stage:"Quarterfinal",
          games: [
            //fist game
            {
              // Datan inom bracketsen
              player1: { id: "2", name: "Deltagare 2", winner: true, points: 3 },
              player2: { id: "4", name: "Deltagare 4", winner: false, points: 14 },
            },
            {
              player1: { id: "5", name: "Deltagare 5 24", winner: false, points: 9 },
              player2: { id: "8", name: "Deltagare 8", winner: true, points: 7 },
            },
            {
              player1: { id: "10", name: "Deltagare 10", winner: false, points: 4 },
              player2: { id: "12", name: "Deltagare 12", winner: true, points: 6 },
            },
            {
              player1: { id: "10", name: "Deltagare 10", winner: false, points: 10 },
              player2: { id: "12", name: "Deltagare 12", winner: true, points: 15 },
            }
          ]
        },  
        {
          //second game
          stage:"Semifinal",
          games: [
            {
              player1: { id: "2", name: "Deltagare 2", winner: false, points: 1 },
              player2: { id: "4", name: "Deltagare 4", winner: true, points: 12 },
            },
            {
              player1: { id: "5", name: "Deltagare 5", winner: false, points: 82 },
              player2: { id: "8", name: "Deltagare 8", winner: true, points: 2 },
            }
          ]
        },
        {
          stage:" The finals",
          games: [
            //last game
            {
              player1: { id: "1", name: "väntar spelare", winner: null },
              player2: { id: "1", name: "väntar spelare", winner: null },
            }
          ]
        }
        
      ]
    };
  },
  computed: {
    formattedRounds() {
      return this.rounds.map(round => {
        return {
          stage: round.stage,
          games: round.games
        };
      });
    }
  },
  methods: {
    getPlayerClass(player){
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
document.addEventListener("DOMContentLoaded", function() {
    const plusImg = document.querySelector('.plus-img');
    const box = document.querySelector('.box');

    plusImg.addEventListener('click', function() {
        box.style.display = (box.style.display === 'none') ? 'block' : 'none';
    });
});
</script>


<template>
  <div>
    <!-- Display the tournament bracket -->
    <div class="stage-names">
      <div v-for="(round, index) in formattedRounds" :key="index" class="stage-name">
        {{ round.stage }}
      </div>
    </div>
    <vue-tournament-bracket :rounds="formattedRounds">
      <!-- Template for displaying players and dropdowns -->
      <template v-slot:player="{ player }">
        <div class="popup-trigger" @click.stop="toggleDropdown(player)">
          <span :class="getPlayerClass(player)">
            {{ player.name }} <span class="points">{{ player.points }}</span>
          </span>
        </div>
        <div v-if="player.showDropdown" class="dropdown">
          <p>{{ player.specialText }}</p>
        </div>
      </template>
    </vue-tournament-bracket>

    <!-- Other elements -->
    <div class="phone-container">
      <img class="phone-img" src="https://cdn-icons-png.freepik.com/512/68/68737.png" alt="turn the phone">
    </div>

    <div class="plus">
      <img class="plus-img" src="../assets/plus.png">
    </div>
    <div class="box">
      <p class="boxtext">Most points: IT21</p>
      <p class="boxtext">Best W/L: IT21</p>
      <p class="boxtext">Price: Pizza</p>
    </div>
  </div>
</template>




<style>
.stage-names {
  position: relative;
}

.stage-name {
  position: absolute;
  font-weight: bold;
}


.stage-name:nth-child(1) {
  top: 100px;
  left: 50px;
}

.stage-name:nth-child(2) {
  top: 100px;
  left: 205px;
}

.stage-name:nth-child(3) {
  top: 100px;
  left: 390px;
}

.stage-name:nth-child(4) {
  top: 100px;
  left: 550px;
}



.points{
  position: absolute;
  display: inline-grid;
  background-color: black;
  border-radius: 3px;
  left: 200px;
  width: 20px;
  text-align: center;
}

.points {
  position: absolute;
  display: inline-grid;
  background-color: black;
  border-radius: 3px;
  top: 50%; 
  left: 90%;
  transform: translate(-50%, -50%);
  width: 20px;
  text-align: center;
  color: white; 
}

.plus{
  position:fixed!important;
  bottom:5px;
  right:5px;
  height:48px;
  width:48px;
}

.box {
  position:fixed!important;
  border: solid black;
  border-radius:30px;
  text-align: center;
  bottom:20px;
  right:50px;
  display:none;
}

.boxtext {
  font-size:1.2em;
  padding:3%;
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
  left:2%;
  display: flex !important;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding: 10px; 
  box-sizing: border-box; 
}




.vtb-item-players .not-started {
  position: relative;
  background-color: gray !important;
}

.vtb-item-players, .vtb-item-players .winner, .vtb-item-players .defeated, .popup-trigger {
  width:8em;
}

.popup-trigger {
  width: 6.2em; 
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.vtb-item-players .winner {
  position: relative;
  background-color: rgb(5, 171, 5) !important;
}
.vtb-item-players .defeated {
  position: relative;
  background-color: red !important;
}

.phone-img {
  display: none;
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
}

</style>
