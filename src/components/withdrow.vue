<template>
  <div id="withdrow">
    <div id="main-divv">
      <div class="second-divv">
        <div id="header">
          <h2 id="header-heading">Withdraw Litecoin</h2>
          <span class="cross"><i class="fa fa-times"></i></span>
          <hr class="htllo" style="color: #e4e4e4" />
        </div>
        <div id="Second-header">
          <h2 id="second-heading">Total balance</h2>
          <span class="second-amount"><b>0.001 LTC</b></span>
          <hr class="htllo" style="color: #e4e4e4" />
        </div>
        <div id="inputs">
          <br />
          <p id="inpu-heading">AMOUNT TO WITHDRAW</p>
          <input id="first-input" type="text" placeholder="0 LTC" /><span
            ><i class="fa fa-deaf"></i></span
          ><input id="first-input" type="text" placeholder="0 USD" />
          <p id="inpu-heading">ADRESS</p>
          <input
            id="first-inputs"
            type="text"
            placeholder="Enter LTC Address"
          />
          <p id="ensures">
            Please ensure this address is a valid bitcoin LTC address
          </p>
        </div><br>
        <div class="fee-div"><br>
            <h4 class="feeses">FlexLab Fee :</h4>
            <h4 class="feeses">Network Fee <span><i class="fa fa-question-circle" aria-hidden="true"></i> :</span></h4>
            <h4 class="feeses">Total :</h4>
        </div>

        <button class="next-btn">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#main-divv {
  border-radius: 10px;
  width: 550px;
  margin: 60px auto;
  background: rgb(255, 251, 243);
  /* background: url(https://media.istockphoto.com/vectors/blockchain-technology-background-vector-id1132628790?b=1&k=6&m=1132628790&s=170667a&w=0&h=KXT2QbtVVWpJHXm6g8CFugjggLEGkMxE1ftf9IBrkWc=) no-repeat center; */
  /* background: url(https://cdn.pixabay.com/photo/2018/05/04/17/26/bitcoin-3374479_960_720.jpg) no-repeat center; */
  /* background-image: url(https://cdn.pixabay.com/photo/2018/04/04/15/14/bitcoin-3290060_960_720.jpg); */
  background-position: center;
  background-size: cover;
  margin: 80px auto;
}

.second-divv {
  box-shadow: 0px 3px 20px 25px #e4e4e4;
  text-align: center;
  width: 550px;
  height: 690px;
}

#header-heading {
  color: rgb(104, 104, 255);
  text-align: start;
  padding-top: 20px;
  margin-left: 20px;
}

#second-heading {
  color: rgb(104, 104, 104);
  text-align: start;
  padding-top: 20px;
  margin-left: 20px;
}

#top-divider {
  color: #e4e4e4;
}
.htllo {
  width: 85%;
  height: 1px;
  background-color: rgb(221, 221, 221);
  border: none;
}

.cross {
  float: right;
  position: relative;
  top: -40px;
  right: 40px;
  font-size: 20px;
}

.second-amount {
  float: right;
  position: relative;
  top: -50px;
  margin-bottom: -130px;
  right: 40px;
  font-size: 19px;
  color: rgb(132, 132, 255);
}

#inpu-heading {
  text-align: left;
  font-size: 14px;
  padding-left: 25px;
}

#first-input {
  height: 30px;
  width: 201px;
  margin-right: 7px;
  border: none;
  border: 1px solid rgb(228, 210, 245);
  background-color: rgb(242, 239, 243);
  padding-left: 20px;
  font-size: 16px;
}
#first-inputs {
  height: 30px;
  width: 461px;
  margin-right: 7px;
  border: none;
  border: 1px solid rgb(228, 210, 245);
  background-color: rgb(242, 239, 243);
  padding-left: 20px;
  font-size: 16px;
}

#first-input:hover,
#first-inputs:hover,
#first-input:focus,
#first-inputs:focus {
  outline: none;
  border: none;
  border: 2px dashed rgb(220, 220, 245);
  border-radius: 3px;
}

.fa-deaf {
  margin-right: 10px;
  margin-left: 1px;
}

#ensures{
    margin-left: -90px;
}

.fee-div{
    height: 170px;
    background-color:  rgb(250, 247, 251);
    border-top: 1px solid rgb(237, 226, 255);
    border-bottom: 1px solid rgb(237, 226, 255);
}

.feeses{
    text-align: left;
    margin-left: 33px;
}

.next-btn{
    padding: 13px 25px;
    background-color: rgb(90, 90, 255);
    border: none;
    color: white;
    font-weight: bold;
    float: right;
    margin-top: 30px;
    margin-right: 20px;
    border-radius: 5px;
}
</style>