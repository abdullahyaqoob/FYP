<template>
  <div id="main-div">
    <div class="second-div">
      <div class="top-black"></div>
      <div id="whole-text">
        <div class="top-heading">
          <br />
          <p>
            To make a payment, send BITCOIN (BTC) to <br />
            the address below.
          </p>
        </div>
        <div class="Amount-input">
          Amount:
          <br /><span>
            <input
              class="Main-amount-input"
              type="text"
              ref="inputs"
              id="myInput"
              placeholder="Enter your BITCOIN which you want to send"
            />
            <button class="tooltips" @click="copyTexts">
              <span class="tooltiptexts" id="myTooltips"
                >Copy to clipboard</span
              >
              <img
                src="./images/copy svg/content_copy-black-18dp.svg"
                class="copy-icon"
              />
            </button>
          </span>
        </div>
        <!--
    <input type="text" ref="input" />
    <button @click="copyText">Copy Text</button> -->
        <br /><br />
        <div class="Amount-input">
          Bitcoin Address:
          <br /><span>
            <input
              class="Main-amount-input"
              type="text"
              ref="input"
              id="qr"
              placeholder="Enter your addree where you want to send"
            />
            <button class="tooltips" @click="copyText">
              <span class="tooltiptexts" id="myTooltips"
                >Copy to clipboard</span
              >
              <img
                src="./images/copy svg/content_copy-black-18dp.svg"
                class="copy-icon"
              />
            </button>
          </span>
        </div>
        <div id="timer-line">
          <div id="app"></div>
          <p class="timer-headlines">Awaiting Payment</p>
        </div>
        <div id="QR-code-line">
          <form onsubmit="generate();return false;">
            <button id="qr-button" class="QR-code-btn">
              <span class="Qr-icon"><i class="fa fa-qrcode"></i></span
              ><span class="Qr-text"> Show QR code</span>
            </button>
          </form>
          <br />
          <div id="qrResult"></div>
        </div>
        <br /><br />
        <hr style="position: relative; right: 15px" />
        <div class="reject-btns">
          <router-link to="home"
            ><button class="backbtn">Back</button></router-link
          >
          <br /><br />
          <router-link to="home"
            ><button class="backbtn" id="cancel-btn">
              Cancel<span style="color: rgb(245, 243, 243)">..</span>Payment
            </button></router-link
          >
        </div>
        <div>
          <p class="end-line">Payments processed by FlexLab Commerce</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    copyText() {
      var vm = this;

      var copyText = vm.$refs.input;

      copyText.select();

      document.execCommand("coppy");

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
  computed() {
    // Qr code
    // var qrcode = new QRCode(document.getElementById('qrResult'), {
    //     width: 100,
    //     height: 100
    // });
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #eee;
  /* background-image: url(https://cdn.pixabay.com/photo/2018/04/04/15/14/bitcoin-3290060_960_720.jpg); */
  /* background: url(https://cdn.pixabay.com/photo/2018/05/04/17/26/bitcoin-3374479_960_720.jpg) no-repeat center; */
  /* background: url(https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958_960_720.jpg) no-repeat center; */
  background-size: cover;
  color: rgb(110, 110, 110);
  font-family: serif;
}

#main-div {
  border-radius: 10px;
  width: 400px;
  margin: 60px auto;
  background: rgb(255, 251, 243);
  /* background: url(https://media.istockphoto.com/vectors/blockchain-technology-background-vector-id1132628790?b=1&k=6&m=1132628790&s=170667a&w=0&h=KXT2QbtVVWpJHXm6g8CFugjggLEGkMxE1ftf9IBrkWc=) no-repeat center; */
  /* background: url(https://cdn.pixabay.com/photo/2018/05/04/17/26/bitcoin-3374479_960_720.jpg) no-repeat center; */
  /* background-image: url(https://cdn.pixabay.com/photo/2018/04/04/15/14/bitcoin-3290060_960_720.jpg); */
  background-position: center;
  background-size: cover;
  margin: 80px auto;
}

.second-div {
  box-shadow: 0px 3px 20px 25px #e4e4e4;
  text-align: center;
  width: 400px;
  height: 730px;
}

#whole-text {
  padding-left: 30px;
}

.top-black {
  border-radius: 4px;
  background: black;
  border: 1px solid black;
  height: 15px;
}

.top-heading {
  font-size: 17px;
  word-spacing: 3px;
  line-height: 25px;
  text-align: left;
}

.Amount-input {
  text-align: left;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.Main-amount-input {
  border: none;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
  padding-left: 15px;
  background-color: rgb(248, 248, 248);
  font-size: 13px;
  width: 300px;
  height: 35px;
  margin-top: 7px;
  -moz-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
  box-shadow: inner 0 0 4px rgba(0, 0, 0, 0.2);
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
}

.Main-amount-input:focus {
  outline: none !important;
  border-color: #719ece;
  box-shadow: 0 0 5px #719ece;
}

.button-copy {
  border: none;
  background-color: rgb(255, 251, 243);
}

.copy-icon {
  height: 23px;
  position: relative;
  top: 8px;
  left: -5px;
  outline: none;
}

.copy-icon:active {
  outline: none;
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
  margin-left: -10px;
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
/* Timmer */

#app {
  margin-top: 15px;
  margin-left: -210px;
  display: inline-block;
}

.base-timer {
  position: relative;
  width: 30px;
  height: 30px;
}

.base-timer__svg {
  transform: scaleX(-1);
}

.base-timer__circle {
  fill: none;
  stroke: none;
}

.base-timer__path-elapsed {
  stroke-width: 7px;
  stroke: grey;
}

.base-timer__path-remaining {
  stroke-width: 7px;
  stroke-linecap: round;
  transform: rotate(90deg);
  transform-origin: center;
  transition: 1s linear all;
  fill-rule: nonzero;
  stroke: currentColor;
}

.base-timer__path-remaining.green {
  color: rgb(65, 184, 131);
}

.base-timer__path-remaining.orange {
  color: orange;
}

.base-timer__path-remaining.red {
  color: red;
}

.base-timer__label {
  position: absolute;
  left: 40px;
  width: 30px;
  height: 30px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: bold;
}

.timer-headlines {
  display: inline-block;
  color: rgb(109, 109, 109);
  position: relative;
  left: 50px;
  top: -10px;
}
/* Qr code Butoon */

.QR-code-btn {
  background-color: rgb(255, 251, 243);
  margin-right: 50px;
  width: 315px;
  height: 35px;
  color: blue;
  font-weight: bold;
  border: none;
  border: 3px solid rgb(141, 141, 245);
  cursor: pointer;
}

.QR-code-btn:focus {
  outline: none;
  background-color: rgb(236, 236, 236);
  /* cursor: ns-resize; */
}

.Qr-icon {
  position: relative;
  top: 2px;
  font-size: 20px;
  margin-right: 10px;
}

.Qr-text {
  position: relative;
  top: -2px;
}

#qrResult {
  position: relative;
  right: 19px;
  margin: 0 auto;
  height: 100px;
  width: 100px;
}

.reject-btns {
  position: relative;
  right: 23px;
}

.backbtn {
  padding: 13px 140px;
  border: none;
  border: 2px solid rgb(156, 156, 156);
  color: rgb(98, 98, 98);
  background-color: rgb(245, 243, 243);
  cursor: pointer;
}

.backbtn:hover {
  background-color: rgb(212, 211, 211);
  color: white;
  font-weight: bold;
  outline: none;
}

#cancel-btn {
  padding: 13px 103px;
  text-align: center;
  border: none;
  border: 1px solid red;
  color: red;
  cursor: pointer;
}

.end-line {
  position: relative;
  right: 22px;
  top: 5px;
}
</style>