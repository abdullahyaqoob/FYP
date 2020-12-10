<template>
  <div class="wrapper" style="margin: -8px">
    <!--header menu start-->
    <div class="header">
      <div class="header-menu">
        <div class="title">Flex <span>Lab</span></div>
        <div class="sidebar-btn" style="margin-left: 210px">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </div>
        <ul>
          <!-- <li><a href="#"><i class="fas fa-search"></i></a></li> -->
          <li>
            <a href="#"><font-awesome-icon :icon="['fas', 'search']" /></a>
          </li>
          <li>
            <a href="transactions"><font-awesome-icon :icon="['fas', 'bell']" /></a>
          </li>
          <li>
            <a href="#"><font-awesome-icon :icon="['fas', 'power-off']" /></a>
          </li>
        </ul>
      </div>
    </div>
    <!--header menu end-->
    <!--sidebar start-->
    <div class="sidebar">
      <div class="sidebar-menu">
        <center class="profile">
          <img
            src="https://cdn.pixabay.com/photo/2014/11/29/19/33/bald-eagle-550804_960_720.jpg"
            alt=""
          />
          <p style="margin-top:20px;margin-bottom:80px">Crypto Currency Dashboard</p>
        </center>
        <li class="item" id="ist-item">
          <a href="#" class="menu-btn" style="color:rgb(77, 198, 255)">
            <font-awesome-icon :icon="['fas', 'desktop']" /><span
              ><span style="color: rgb(37, 37, 37)"> . . </span>Generete API</span
            >
          </a>
        </li>
        <li class="item" id="profile">
          <a href="transactions" class="menu-btn">
            <font-awesome-icon :icon="['fas', 'user-circle']" /><span
              ><span style="color: rgb(37, 37, 37)"> . . </span>Transaction<span
                style="color: rgb(37, 37, 37)"
              >
                . . </span
              ><span class="dropdownn"
                ><font-awesome-icon :icon="['fas', 'chevron-down']" /></span
            ></span>
          </a>
          <div class="sub-menu">
            <a href="#"
              ><font-awesome-icon :icon="['fas', 'image']" /><span> . . Picture</span></a
            >
            <a href="#"
              ><font-awesome-icon :icon="['fas', 'address']" /><span> . . Info</span></a
            >
          </div>
        </li>
        <li class="item" id="messages">
          <a href="#messages" class="menu-btn">
            <font-awesome-icon :icon="['fas', 'envelope']" /><span
              ><span style="color: rgb(37, 37, 37)"> . . </span>Messages<span
                style="color: rgb(37, 37, 37)"
              >
                . . </span
              ><span class="dropdownn"
                ><font-awesome-icon :icon="['fas', 'chevron-down']" /></span
            ></span>
          </a>
          <div class="sub-menu">
            <a href="#"
              ><font-awesome-icon :icon="['fas', 'envelope']" /><span> . . New</span></a
            >
            <a href="#"
              ><font-awesome-icon :icon="['fas', 'envelope-square']" /><span>
                . . Sent</span
              ></a
            >
            <a href="#"
              ><font-awesome-icon :icon="['fas', 'exclamation-circle']" /><span>
                . . Spam</span
              ></a
            >
          </div>
        </li>
        <li class="item" id="settings">
          <a href="#settings" class="menu-btn">
            <font-awesome-icon :icon="['fas', 'cog']" /><span
              ><span style="color: rgb(37, 37, 37)"> . . </span>Settings<span
                style="color: rgb(37, 37, 37)"
              >
                . . </span
              ><span class="dropdownn"
                ><font-awesome-icon :icon="['fas', 'chevron-down']" /></span
            ></span>
          </a>
          <div class="sub-menu">
            <a href="#"><i class="fas fa-lock"></i><span>Password</span></a>
            <a href="#"><i class="fas fa-language"></i><span>Language</span></a>
          </div>
        </li>
        <li class="item">
          <a href="#" class="menu-btn">
            <font-awesome-icon :icon="['fas', 'info-circle']" /><span
              ><span style="color: rgb(37, 37, 37)"> . . </span>About</span
            >
          </a>
        </li>
      </div>
    </div>
    <!--sidebar end-->
    <!--main container start-->
    <div class="main-container">
      <div>
        <h1 class="key-heading bold-it">API Key Generetor</h1>
        <button id="button1">Generate Api key</button>
        <div class="key-div">
          <input
            class="key-input"
            id="input"
            type="text"
            ref="input"
            placeholder="click the button to generate a new api key"
          />
          <button id="copy-key" class="tooltips" @click="copyText">
            <span class="tooltiptexts" id="myTooltips">Copy to clipboard</span
            ><i class="fa fa-files-o" id="copy-icon" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <!-- <div class="card">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
      </div> -->
      <section>
        <!--for demo wrap-->
        <h1 class="bold-it">All API Keys list</h1>
        <div class="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th class="bold-it">ID</th>
                <th class="bold-it">Name</th>
                <th class="bold-it">Api key</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr>
                <td class="bold-it">1</td>
                <td class="bold-it">Josh Brooks</td>
                <td class="bold-it">ea3349fb-a3a0-4145b-fe60-a12839c97049</td>
              </tr>
              <tr>
                <td class="bold-it">2</td>
                <td class="bold-it">ADITYA BIRLA</td>
                <td class="bold-it">ea3349fb-a3a0-4145b-fe60-a12839c97049</td>
              </tr>
              <tr>
                <td class="bold-it">3</td>
                <td class="bold-it">ADITYA BIRLA</td>
                <td class="bold-it">ea3349fb-a3a0-4145b-fe60-a12839c97049</td>
              </tr>
              <tr>
                <td class="bold-it">4</td>
                <td class="bold-it">ADITYA BIRLA</td>
                <td class="bold-it">ea3349fb-a3a0-4145b-fe60-a12839c97049</td>
              </tr>
              <tr>
                <td class="bold-it">5</td>
                <td class="bold-it">ADITYA BIRLA</td>
                <td class="bold-it">ea3349fb-a3a0-4145b-fe60-a12839c97049</td>
              </tr>
              <tr>
                <td class="bold-it">6</td>
                <td class="bold-it">ADITYA BIRLA</td>
                <td class="bold-it">ea3349fb-a3a0-4145b-fe60-a12839c97049</td>
              </tr>
              <tr>
                <td class="bold-it">7</td>
                <td class="bold-it">ADITYA BIRLA</td>
                <td class="bold-it">ea3349fb-a3a0-4145b-fe60-a12839c97049</td>
              </tr>
              <tr>
                <td class="bold-it">2</td>
                <td class="bold-it">ADITYA BIRLA</td>
                <td class="bold-it">ea3349fb-a3a0-4145b-fe60-a12839c97049</td>
              </tr>
              <tr>
                <td class="bold-it">2</td>
                <td class="bold-it">ADITYA BIRLA</td>
                <td class="bold-it">ea3349fb-a3a0-4145b-fe60-a12839c97049</td>
              </tr>
              <tr>
                <td class="bold-it">2</td>
                <td class="bold-it">ADITYA BIRLA</td>
                <td class="bold-it">ea3349fb-a3a0-4145b-fe60-a12839c97049</td>
              </tr>
              <tr>
                <td class="bold-it">2</td>
                <td class="bold-it">ADITYA BIRLA</td>
                <td class="bold-it">ea3349fb-a3a0-4145b-fe60-a12839c97049</td>
              </tr>
              <tr>
                <td class="bold-it">2</td>
                <td class="bold-it">ADITYA BIRLA</td>
                <td class="bold-it">ea3349fb-a3a0-4145b-fe60-a12839c97049</td>
              </tr>

              <tr>
                <td class="bold-it">2</td>
                <td class="bold-it">ADITYA BIRLA</td>
                <td class="bold-it">ea3349fb-a3a0-4145b-fe60-a12839c97049</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- follow me template -->
      <div class="made-with-love">
        Made with
        <i>♥</i> by
        <a href="#">Flex Lab</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    // msg: String
  },
  methods: {
    copyText() {
      var vm = this;

      var copyText = vm.$refs.input;

      copyText.select();

      document.execCommand("copy");

      alert("copied the text: " + copyText.value);
    },
    copyTexts() {
      var vm = this;

      var copyText = vm.$refs.inputs;

      copyText.select();

      document.execCommand("coppy");

      alert("copied the text: " + copyText.value);
    },
  },
  //   methods: {
  //     guid: function () {
  //     S4: function () {
  //     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  //     },
  // return (S4() + S4() + "-" + S4() + "-4" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
  //     }
  //   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

body {
  background: #fff;
}

.wrapper .header {
  z-index: 1;
  background: #22242a;
  position: fixed;
  width: calc(100% - 0%);
  height: 70px;
  display: flex;
  top: 0;
}

.wrapper .header .header-menu {
  width: calc(100% - 0%);
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.wrapper .header .header-menu .title {
  color: #fff;
  font-size: 25px;
  text-transform: uppercase;
  font-weight: 900;
}

.wrapper .header .header-menu .title span {
  color: #4ccee8;
}

.wrapper .header .header-menu .sidebar-btn {
  color: #fff;
  position: absolute;
  margin-left: 240px;
  font-size: 22px;
  font-weight: 900;
  cursor: pointer;
  transition: 0.3s;
  transition-property: color;
}

.wrapper .header .header-menu .sidebar-btn:hover {
  color: #4ccee8;
}

.wrapper .header .header-menu ul {
  display: flex;
}

.wrapper .header .header-menu ul li a {
  background: #fff;
  color: #000;
  display: block;
  margin: 0 10px;
  font-size: 18px;
  width: 34px;
  height: 34px;
  line-height: 35px;
  text-align: center;
  border-radius: 50%;
  transition: 0.3s;
  transition-property: background, color;
}

.wrapper .header .header-menu ul li a:hover {
  background: #4ccee8;
  color: #fff;
}

.wrapper .sidebar {
  z-index: 1;
  background: #2f323a;
  position: fixed;
  top: 70px;
  width: 250px;
  height: calc(100% - 7%);
  transition: 0.3s;
  transition-property: width;
  overflow-y: auto;
}

.wrapper .sidebar .sidebar-menu {
  overflow: hidden;
}

.wrapper .sidebar .sidebar-menu .profile img {
  margin: 20px 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.wrapper .sidebar .sidebar-menu .profile p {
  color: #bbb;
  font-weight: 700;
  margin-bottom: 10px;
}

.wrapper .sidebar .sidebar-menu .item {
  width: 250px;
  overflow: hidden;
}

.menu-btn {
  text-align: left;
  margin-left: 30px;
}

.dropdownn {
  float: right;
  margin-right: 20px;
}

.wrapper .sidebar .sidebar-menu .item .menu-btn {
  display: block;
  color: #fff;
  position: relative;
  padding: 25px 20px;
  transition: 0.3s;
  transition-property: color;
}

.wrapper .sidebar .sidebar-menu .item .menu-btn:hover {
  color: #4ccee8;
}

.wrapper .sidebar .sidebar-menu .item .menu-btn i {
  margin-right: 20px;
}

.wrapper .sidebar .sidebar-menu .item .menu-btn .drop-down {
  float: right;
  font-size: 12px;
  margin-top: 3px;
}

.wrapper .sidebar .sidebar-menu .item .sub-menu {
  background: #3498db;
  overflow: hidden;
  max-height: 0;
  transition: 0.3s;
  transition-property: background, max-height;
}

.wrapper .sidebar .sidebar-menu .item .sub-menu a {
  display: block;
  position: relative;
  color: #fff;
  font-size: 15px;
  padding: 20px;
  transition: 0.3s;
  transition-property: background;
}

.wrapper .sidebar .sidebar-menu .item .sub-menu a:hover {
  background: #55b1f0;
}

.wrapper .sidebar .sidebar-menu .item .sub-menu a:not(last-child) {
  border-bottom: 1px solid #8fc5e9;
}

.wrapper .sidebar .sidebar-menu .item .sub-menu i {
  padding-right: 20px;
  font-size: 10px;
}

.wrapper .sidebar .sidebar-menu .item:target .sub-menu {
  max-height: 500px;
}

.wrapper .main-container {
  width: (100% - 250px);
  margin-top: 70px;
  margin-left: 250px;
  padding: 15px;
  /* background: url(../assets/mountain.jpg)no-repeat; */
  background: url(https://cdn.pixabay.com/photo/2018/02/03/02/27/man-3126802_960_720.jpg)
    no-repeat;
  background-size: cover;
  height: 94vh;
  transition: 0.3s;
}

.wrapper.collapse .sidebar {
  width: 70px;
}

.wrapper.collapse .sidebar .profile img,
.wrapper.collapse .sidebar .profile p,
.wrapper.collapse .sidebar a span {
  display: none;
}

.wrapper.collapse .sidebar .sidebar-menu .item .menu-btn {
  font-size: 23px;
}

.wrapper.collapse .sidebar .sidebar-menu .item .sub-menu i {
  font-size: 18px;
  padding-left: 3px;
}

.wrapper.collapse .main-container {
  width: calc(100% - 70px);
  margin-left: 70px;
}

.wrapper .main-container .card {
  background: #fff;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 14px;
}

.key-heading {
  margin-top: 70px;
  font-size: 55px;
  color: white;
}

.key-input {
  width: 45%;
  height: 30px;
  text-align: center;
  font-size: 15px;
  font-family: "Lemonada", cursive;
  border-radius: 7px;
  border: none;
  border: 2px solid rgb(182, 255, 218);
  border-radius: 20px;
  
}

.key-div {
  margin-top: 1em;
}

#button1 {
  background-color: rgb(54, 54, 54);
  color: white;
  border: 1px solid rgb(44, 44, 44);
  margin-top: 30px;
  padding: 10px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: "Lemonada", cursive;
  border-radius: 50px;
}

#button1:hover {
background: rgb(151, 151, 151);
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
  border: none;
  border: solid 1px black;
}

#button1:focus {
  outline: none;
}

#button2 {
  background-color: rgb(27, 27, 27);
  color: white;
  border: 1px solid black;
  padding: 2.5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-left: 10px;
  border-radius: 8px;
}

#button2:hover {
  background-color: rgba(255, 255, 255, 0);
  transition: 0.4s;
  -webkit-transition: 0.4s;
  -moz-transition: 0.4s;
}
.tooltip {
  position: relative;
  display: inline-block;
  border: none;
  background-color: rgb(255, 251, 243);
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 140px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: 10px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.tooltips {
  position: relative;
  display: inline-block;
  border: none;
  background-color: rgb(255, 251, 243);
}

.tooltips .tooltiptexts {
  visibility: hidden;
  width: 140px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltips .tooltiptexts::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -10px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltips:hover .tooltiptexts {
  visibility: visible;
  opacity: 1;
}

#copy-icon {
  font-size: 20px;
  height: 23px;
  position: relative;
  top: 2px;
  left: -1px;
  outline: none;
}

#copy-icon:active {
  outline: none;
}

#copy-key {
  margin-left: 15px;
  border-radius: 10px;
  padding: 2px 7px;
  position: relative;
  right: 10px;
  top: 2px;
}

h1 {
  font-size: 30px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
}
table {
  width: 100%;
  table-layout: fixed;
}
.tbl-header {
  background-color: rgba(255, 255, 255, 0.3);
}
.tbl-content {
  height: 300px;
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}
th {
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
}
td {
  padding: 15px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}

/* demo styles */

@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);
body {
  background: -webkit-linear-gradient(left, #25c481, #25b7c4);
  background: linear-gradient(to right, #25c481, #25b7c4);
  font-family: "Roboto", sans-serif;
}
section {
  margin: 50px;
}

/* follow me template */
.made-with-love {
  margin-top: 40px;
  padding: 10px;
  clear: left;
  text-align: center;
  font-size: 10px;
  font-family: arial;
  color: #fff;
}
.made-with-love i {
  font-style: normal;
  color: #f50057;
  font-size: 14px;
  position: relative;
  top: 2px;
}
.made-with-love a {
  color: #fff;
  text-decoration: none;
}
.made-with-love a:hover {
  text-decoration: underline;
}

/* for custom scrollbar for webkit browser*/

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.bold-it{
  font-weight: bold;
}
</style>