<script scope>

export default {
  name: 'App',
  data() {
    return {
      isVisible: false,
      isVisible2: false,
      isVisible3: false,
      isVisible4: false,
      isVisible5: false,
      groupAData: [
        { pos: 1, team: 'IT23', p: 5, w: 4, l: 0, pd: '61/15', pts: 13 },//Fetch in namn, hur många matcher de spelat, vunnit, förlorat, poäng för, poäng mot räknar ut poäng skillnad, poäng
        { pos: 2, team: 'Merk23', p: 5, w: 4, l: 0, pd: 61, pts: 10 },
        { pos: 3, team: 'Kock23', p: 5, w: 4, l: 0, pd: 61, pts: 7 },
        { pos: 4, team: 'Serv23', p: 5, w: 4, l: 0, pd: 61, pts: 2 },
      ],
      groupBData: [
        { pos: 1, team: 'IT21', p: 5, w: 4, l: 0, pd: 61, pts: 13 },
        { pos: 2, team: 'Merk21', p: 5, w: 4, l: 0, pd: 61, pts: 10 },
        { pos: 3, team: 'Kock21', p: 5, w: 4, l: 0, pd: 61, pts: 4 },
        { pos: 4, team: 'Serv21', p: 5, w: 4, l: 0, pd: 61, pts: 1 },
      ],
      groupCData: [
        { pos: 1, team: 'IT22', p: 5, w: 3, l: 1, pd: 19, pts: 14 },
        { pos: 2, team: 'Merk22', p: 5, w: 4, l: 0, pd: 61, pts: 8 },
        { pos: 3, team: 'Kock22', p: 5, w: 4, l: 0, pd: 61, pts: 5 },
        { pos: 4, team: 'Serv22', p: 5, w: 4, l: 0, pd: 61, pts: 2 },
      ],
      groupDData: [
        { pos: null, team: null, p: null, w: null, l: null, pd: null, pts: null },
        { pos: null, team: null, p: null, w: null, l: null, pd: null, pts: null },
        { pos: null, team: null, p: null, w: null, l: null, pd: null, pts: null },
      ],
      groupEData: [
        { pos: null, team: null, p: null, w: null, l: null, pd: null, pts: null },
        { pos: null, team: null, p: null, w: null, l: null, pd: null, pts: null },
        { pos: null, team: null, p: null, w: null, l: null, pd: null, pts: null },
      ]
    };
  },
  computed: {
    validGroupAData() {
      return this.groupAData.filter(item => item.team !== null);
    },
    validGroupBData() {
      return this.groupBData.filter(item => item.team !== null);
    },
    validGroupCData() {
      return this.groupCData.filter(item => item.team !== null);
    },
    validGroupDData() {
      return this.groupDData.filter(item => item.team !== null);
    },
    validGroupEData() {
      return this.groupEData.filter(item => item.team !== null);
    },
  },
  mounted() {
    this.populateTable('groupA', this.groupAData);
    this.populateTable('groupB', this.groupBData);
    this.populateTable('groupC', this.groupCData);
    this.populateTable('groupD', this.groupDData);
    this.populateTable('groupE', this.groupEData);
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    toggleVisibility2() {
      this.isVisible2 = !this.isVisible2;
    },
    toggleVisibility3() {
      this.isVisible3 = !this.isVisible3;
    },
    toggleVisibility4() {
      this.isVisible4 = !this.isVisible4;
    },
    toggleVisibility5() {
      this.isVisible5 = !this.isVisible5;
    },
    populateTable(tableId, data) {
    this.$nextTick(() => {
      let tableElement = document.getElementById(tableId);
      if (!tableElement) {
        console.error(`Table with id ${tableId} not found.`);
        return;
      }
      data.forEach((rowData) => {
        let row = tableElement.insertRow();
        Object.values(rowData).forEach((cellData) => {
          let cell = row.insertCell();
          cell.textContent = cellData;
        });
      });
    });
    },
    showPopup() {
      const myPopup = new Popup({
        id: "GruppA",
        title: "Grupp A",
        content: this.$refs.groupATemplate.innerHTML,
      });
      myPopup.show();
    },
    showPopup2() {
      const myPopup2 = new Popup({
        id: "GruppB",
        title: "Grupp B",
        content: this.$refs.groupBTemplate.innerHTML,
      });
      myPopup2.show();
    },
    showPopup3() {
      const myPopup3 = new Popup({
        id: "GruppC",
        title: "Grupp C",
        content: this.$refs.groupCTemplate.innerHTML,
      });
      myPopup3.show();
    },
    showPopup4() {
      const myPopup4 = new Popup({
        id: "GruppD",
        title: "Grupp D",
        content: this.$refs.groupDTemplate.innerHTML,
      });
      myPopup4.show();
    },
    showPopup4() {
      const myPopup4 = new Popup({
        id: "GruppE",
        title: "Grupp E",
        content: this.$refs.groupETemplate.innerHTML,
      });
      myPopup4.show();
    },
    Nav_burgur() {
      const myPopup4 = new Popup({
        id: "Burger",
        title: "WOW",
        content: "HEJ",
      });
      myPopup4.show();
    }
  }
}
</script>

<template>
  <nav id="nav">
    <button class="hamburger" @click="Nav_burgur"></button>   
  </nav>

  <main id="main">
  <div class="search-container">
    <input type="text" class="search-input" placeholder="Search..">
    <button class="search-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
    </button>
  </div>

  <div v-if="validGroupAData.length > 0">
    <button @click="toggleVisibility" class="group-container" v-if="groupAData && groupAData.length > 0">
      <h3 class="Grupper">Grupp A</h3> <!--fetchar in grupperna-->
      <p class="lag">IT21, IT23, IT22, IT24</p> <!--fetchar in lagen-->
      <img class="pil" src="./assets/pngwing2.png" alt="dropdown-pil">
    </button>
    <div v-if="isVisible" class="group-dropdown">
      <table id="groupA">
        <tr>
          <th>POS</th>
          <th>LAG</th>
          <th>S</th>
          <th>V</th>
          <th>F</th>
          <th>PS</th>
          <th>POÄ</th>
        </tr>
        <tr v-for="item in groupAData" :key="item.pos">
          <td>{{ item.pos }}</td>
          <td>{{ item.team }}</td>
          <td>{{ item.p }}</td>
          <td>{{ item.w }}</td>
          <td>{{ item.l }}</td>
          <td>{{ item.pd }}</td>
          <td>{{ item.pts }}</td>
        </tr>
      </table>
      <button @click="showPopup" class="popup-btn">Mer</button>
    </div>
  </div>
  <div ref="groupATemplate" style="display: none;">
    <div>
      <table id="groupA">
        <tr>
          <th>POS</th>
          <th>LAG</th>
          <th>S</th>
          <th>V</th>
          <th>F</th>
          <th>PS</th>
          <th>POÄ</th>
        </tr>
      </table>
    </div>
    <div id="nasta_match">
      Hej Test av ny match
    </div>
  </div>

  <div v-if="validGroupBData.length > 0">
    <button @click="toggleVisibility2" class="group-container" v-if="groupBData && groupBData.length > 0">
      <h3 class="Grupper">Grupp B</h3> <!--fetchar in grupperna-->
      <p class="lag">IT21, IT23, IT22, IT24</p> <!--fetchar in lagen-->
      <img class="pil" src="./assets/pngwing2.png" alt="dropdown-pil">
    </button>
    <div v-if="isVisible2" class="group-dropdown">
      <table id="groupB">
        <tr>
          <th>POS</th>
          <th>LAG</th>
          <th>S</th>
          <th>V</th>
          <th>F</th>
          <th>PS</th>
          <th>POÄ</th>
        </tr>
        <tr v-for="item in groupBData" :key="item.pos">
          <td>{{ item.pos }}</td>
          <td>{{ item.team }}</td>
          <td>{{ item.p }}</td>
          <td>{{ item.w }}</td>
          <td>{{ item.l }}</td>
          <td>{{ item.pd }}</td>
          <td>{{ item.pts }}</td>
        </tr>
      </table>
      <button @click="showPopup2" class="popup-btn">Mer</button>
    </div>
  </div>
  <div ref="groupBTemplate" style="display: none;">
    <table id="groupB">
        <tr>
          <th>POS</th>
          <th>LAG</th>
          <th>S</th>
          <th>V</th>
          <th>F</th>
          <th>PS</th>
          <th>POÄ</th>
        </tr>
      </table>
  </div>


  <div v-if="validGroupCData.length > 0">
    <button @click="toggleVisibility3" class="group-container" v-if="groupCData && groupCData.length > 0">
      <h3 class="Grupper">Grupp C</h3> <!--fetchar in grupperna-->
      <p class="lag">IT21, IT23, IT22, IT24</p> <!--fetchar in lagen-->
      <img class="pil" src="./assets/pngwing2.png" alt="dropdown-pil">
    </button>
    <div v-if="isVisible3" class="group-dropdown">
      <table id="groupC">
        <tr>
          <th>POS</th>
          <th>LAG</th>
          <th>S</th>
          <th>V</th>
          <th>F</th>
          <th>PS</th>
          <th>POÄ</th>
        </tr>
        <tr v-for="item in groupCData" :key="item.pos">
          <td>{{ item.pos }}</td>
          <td>{{ item.team }}</td>
          <td>{{ item.p }}</td>
          <td>{{ item.w }}</td>
          <td>{{ item.l }}</td>
          <td>{{ item.pd }}</td>
          <td>{{ item.pts }}</td>
        </tr>
      </table>
      <button @click="showPopup3" class="popup-btn">Mer</button>
    </div>
  </div>
  <div ref="groupCTemplate" style="display: none;">
    <table id="groupC">
        <tr>
          <th>POS</th>
          <th>LAG</th>
          <th>S</th>
          <th>V</th>
          <th>F</th>
          <th>PS</th>
          <th>POÄ</th>
        </tr>
      </table>
  </div>

  <div v-if="validGroupDData.length > 0">
    <button @click="toggleVisibility4" class="group-container" v-if="groupDData && groupDData.length > 0">
      <h3 class="Grupper">Grupp D</h3> <!--fetchar in grupperna-->
      <p class="lag">IT21, IT23, IT22, IT24</p> <!--fetchar in lagen-->
      <img class="pil" src="./assets/pngwing2.png" alt="dropdown-pil">
    </button>
    <div v-if="isVisible4" class="group-dropdown">
      <table id="groupD">
        <tr>
          <th>POS</th>
          <th>LAG</th>
          <th>S</th>
          <th>V</th>
          <th>F</th>
          <th>PS</th>
          <th>POÄ</th>
        </tr>
        <tr v-for="item in groupDData" :key="item.pos">
          <td>{{ item.pos }}</td>
          <td>{{ item.team }}</td>
          <td>{{ item.p }}</td>
          <td>{{ item.w }}</td>
          <td>{{ item.l }}</td>
          <td>{{ item.pd }}</td>
          <td>{{ item.pts }}</td>
        </tr>
      </table>
      <button @click="showPopup4" class="popup-btn">Show Popup</button>
    </div>
  </div>
  <div ref="groupDTemplate" style="display: none;">
    <table id="groupD">
        <tr>
          <th>POS</th>
          <th>LAG</th>
          <th>S</th>
          <th>V</th>
          <th>F</th>
          <th>PS</th>
          <th>POÄ</th>
        </tr>
      </table>
  </div>

    <div v-if="validGroupEData.length > 0">
    <button @click="toggleVisibility5" class="group-container">
      <h3 class="Grupper">Grupp E</h3> <!--fetchar in grupperna-->
      <p class="lag">IT21, IT23, IT22, IT24</p> <!--fetchar in lagen-->
      <img class="pil" src="./assets/pngwing2.png" alt="dropdown-pil">
    </button>
    <div v-if="isVisible5" class="group-dropdown">
      <table id="groupE">
        <tr>
          <th>POS</th>
          <th>LAG</th>
          <th>S</th>
          <th>V</th>
          <th>F</th>
          <th>PS</th>
          <th>POÄ</th>
        </tr>
        <tr v-for="item in groupEData" :key="item.pos">
          <td>{{ item.pos }}</td>
          <td>{{ item.team }}</td>
          <td>{{ item.p }}</td>
          <td>{{ item.w }}</td>
          <td>{{ item.l }}</td>
          <td>{{ item.pd }}</td>
          <td>{{ item.pts }}</td>
        </tr>
      </table>
      <button @click="showPopup5" class="popup-btn">Show Popup</button>
    </div>
  </div>
  <div ref="groupETemplate" style="display: none;">
    <table id="groupE">
        <tr>
          <th>POS</th>
          <th>LAG</th>
          <th>S</th>
          <th>V</th>
          <th>F</th>
          <th>PS</th>
          <th>POÄ</th>
        </tr>
      </table>
  </div>
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
  background-image: url(./assets/Bakgrundsbild.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.Grupper{
  position: relative;
  color: black;
  text-align: left;
  width: fit-content;
  font-size: 20px;
  left: 40%;
  top: 0.6em;
  width: fit-content;
}
.lag{
  position: relative;
  color: black;
  text-align: left;
  left: 20%;
  top: 1em;
  font-size: 17px;
  width: fit-content;
}
.group-container {
  position: relative;
  left: 5%;
  margin: 5%;
  margin-bottom: 1.5%;
  height: 10%;
  width: 80%;
  background-color: white;
  border-radius: 10px;
  
}
.group-dropdown {
  position: relative;
  left: 5%;
  margin-left: 5%;
  margin-bottom: 5%;
  height: fit-content;
  width: 80%;
  background-color: white;
  color: black;
  border-radius: 10px;
}
.pil{
  position: relative;
  width: 40px;
  height: 30px;
  left: 39%;
  bottom: 0.8em;
  font-size: 23px;
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
.search-container {
  position: relative;
  left: 5%;
  right: 5%;
  margin: 5%;
  height: 20px;
  width: 80%;
  align-items: center;
}
.search-input{
  position: relative;
  right: -5%;
  margin: 5%;
  height: 30px;
  width: 70%;
  align-items: center;
  border-radius: 7px;
}
.search-btn{
  position: relative;
  right: -5.2%;
  margin: -5%;
  top: 5%;
  height: 30px;
  width: 15%;
  align-items: center;
  border-radius: 7px;
}
.popup-btn {
  position: relative;
  margin-top: 2%;
  margin-bottom: 2%;
  cursor: pointer;
  background-color: grey;
  bottom: 0%;
  left: 35%; 
  width: 30%; 
  border-radius: 7px;
  /* Add more styles as needed */
}

#nasta_match {
  position: relative;
  left: 5%;
  margin: 5%;
  margin-bottom: 1.5%;
  height: 25%;
  width: 80%;
  background-color: white;
  border-radius: 10px;
}

table {
  width: 100%;
  border-collapse: collapse; 
  margin-bottom: 10px;
}

th, tr {
  border-bottom: 1px solid black;
}

th:last-child, td:last-child, tr:last-child {
  border-right: none;
}
td {
  text-align: center;
}
</style>
