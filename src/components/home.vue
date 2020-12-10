<template>
  <div id="main-div">
    <div class="second-div">
      <div>
        <p class="our-amount">$ 1144.00</p>
        <br /><br />
        <hr class="dividerofamount" />
        <div id="ninjas">
          <ul>
            <li>
              <router-link to="payment"
                ><span class="Coins-Images"
                  ><img
                    style="border-radius: 10px"
                    src="https://play-lh.googleusercontent.com/sJiUVUP0d0U_3U9d3AxQpjaPRSriv6jOt5rHUflcECe64hFne-W280sU4G0xtgic2kg"
                    width="40px"
                    height="40px" /></span
                ><span class="none" id="none"> Pay with Coinbase</span
                ><span style="float: right"
                  ><img
                    class="arrows-images"
                    src="./images/arrow/right-arrow.svg"
                    height="25px"
                    width="25px"
                    style="color: color" /></span
              ></router-link>
            </li>
            <router-link to="generateApi" style="margin-top: 17px;margin-bottom: 17px;">
            <span class="selectany">Or, Select a cryptocurrency</span>
            </router-link>
            <li>
              <router-link to="payment"
                ><span class="Coins-Images"
                  ><img
                    style="border-radius: 10px"
                    src="https://cdn.pixabay.com/photo/2017/12/26/21/43/blockchain-3041480_960_720.jpg"
                    width="40px"
                    height="40px" /></span
                ><span class="none" id="none">Bitcoin</span
                ><span style="float: right"
                  ><img
                    class="arrows-images"
                    src="./images/arrow/right-arrow.svg"
                    height="25px"
                    width="25px"
                    style="color: color" /></span
              ></router-link>
            </li>
            <li>
              <router-link to="payment"
                ><span class="Coins-Images"
                  ><img
                    style="border-radius: 10px"
                    src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_703c7cfc78f85bf307c3b5be61414552/ethereum.png"
                    width="40px"
                    height="40px" /></span
                ><span class="none" id="none">Ethereum</span
                ><span style="float: right"
                  ><img
                    class="./arrows-images"
                    src="./images/arrow/right-arrow.svg"
                    height="25px"
                    width="25px"
                    style="color: color" /></span
              ></router-link>
            </li>
            <li>
              <router-link to="payment"
                ><span class="Coins-Images"
                  ><img
                    style="border-radius: 10px"
                    src="https://cdn.cryptotips.eu/wp-content/uploads/2020/07/bitcoin-cash-price-230x230.png"
                    width="40px"
                    height="40px" /></span
                ><span class="none" id="none">Bitcoin Cash</span
                ><span style="float: right"
                  ><img
                    class="arrows-images"
                    src="./images/arrow/right-arrow.svg"
                    height="25px"
                    width="25px"
                    style="color: color" /></span
              ></router-link>
            </li>
            <li>
              <router-link to="payment"
                ><span class="Coins-Images"
                  ><img
                    style="border-radius: 10px"
                    src="https://cdn.pixabay.com/photo/2018/10/01/22/57/dollar-3717534_960_720.png"
                    width="40px"
                    height="40px" /></span
                ><span class="none" id="none">USD Coin</span
                ><span style="float: right"
                  ><img
                    class="arrows-images"
                    src="./images/arrow/right-arrow.svg"
                    height="25px"
                    width="25px"
                    style="color: color" /></span
              ></router-link>
            </li>
          </ul>
        </div>
        <router-link to="SignUp">
          <button class="cancel">CANCEL PAYMENT</button>
        </router-link>
        <router-link to="withdrow">
          <button class="cancel" id="withdraw-p">With Draw Payment</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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

a {
    list-style: none;
    text-decoration: none;
    list-style-type: none;
    color: rgb(83, 83, 83);
    font-size: 18px;
}

.second-div {
    box-shadow: 0px 3px 20px 25px #e4e4e4;
    text-align: center;
    width: 400px;
    height: 790px;
}

.our-amount {
    padding-top: 50px;
    color: rgb(0, 0, 0);
    font-size: 30px;
    cursor: progress;
}

.dividerofamount {
    width: 380px;
    color: rgb(255, 255, 255);
    margin-top: -50px;
    position: relative;
    top: 35px;
}

#ninjas {
    width: 100%;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}

#ninjas ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}

#ninjas li {
    border-radius: 5px;
    flex-grow: 1;
    flex-basis: 250px;
    text-align: center;
    padding: 20px;
    border: 1px solid rgb(0, 0, 0);
    margin: 10px;
    color: rgb(0, 0, 0);
}

.none {
    /* margin-right: 70px; */
    /* float: left; */
    font-weight: bold;
}


/* #none {
    margin-left: 50px;
} */

#ninjas li:hover {
    background-color: red;
    cursor: pointer;
}

.Coins-Images {
    float: left;
    margin-top: -10px;
    margin-bottom: -25px;
}

.arrows-images {
    margin-top: -15px;
    margin-bottom: -7px;
}

.selectany {
    font-size: 17px;
    color: rgb(0, 0, 0);
    padding: 15px 0;
    margin-left: 20px;
}

.selectany:hover {
    cursor: cell;
    border: 1px dashed rgb(0, 0, 0);
    border-radius: 20px;
    margin-left: 50px;
    padding-right: 20px;
    padding-left: 20px;
}

.cancel {
    padding: 12px 100px;
    border: none;
    border: 1px solid rgb(92, 24, 4);
    color: rgb(255, 197, 197);
    border-radius: 10px;
    background-color: red;
    font-size: 15px;
    font-weight: bold;
}

.cancel:hover {
    color: rgb(0, 0, 0);
    background-color: #bebebe;
    border: none;
}

#withdraw-p {
    margin-top: 30px;
    background-color: green;
    border: none;
}
</style>