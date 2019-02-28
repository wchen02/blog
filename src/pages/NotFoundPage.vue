<template>
  <div class="not-found-page">
    <div id="clouds">
      <div class="cloud x1"></div>
      <div class="cloud x1_5"></div>
      <div class="cloud x2"></div>
      <div class="cloud x3"></div>
      <div class="cloud x4"></div>
      <div class="cloud x5"></div>
    </div>
    <div class='c'>
      <div class='error-code'>404</div>
      <hr>
      <div class='error-emphasize'>THE PAGE</div>
      <div class='error-normal'>WAS NOT FOUND</div>
      <!-- <a class='btn' href='#'>BACK TO MARS</a> -->
      <router-link to="/">BACK TO MARS</router-link>
    </div>
  </div>
</template>

<style lang="scss">
body {
  background: #33cc99;
  color: #fff;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
.not-found-page {
  color: #fff;
}

.c {
  text-align: center;
  display: block;
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);  
}

.error-code {
  font-size: 220px;
  position: relative;
  display: inline-block;
  z-index: 2;
  height: 250px;
  line-height: 250px;
  letter-spacing: 15px;
}

.error-emphasize {
  text-align: center;
  display: block;
  position: relative;
  letter-spacing: 12px;
  font-size: 4em;
  line-height: 80%;
  z-index: 2;
}

.error-normal {
  text-align: center;
  display: block;
  position: relative;
  font-size: 20px;
  z-index: 2;
}

.router-link-active {
  background-color: rgb( 255, 255, 255);
  position: relative;
  display: inline-block;
  width: 358px;
  padding: 5px;
  z-index: 5;
  font-size: 25px;
  margin: 0 auto;
  color: #33cc99;
  text-decoration: none;
  margin-right: 10px
}

.right {
  float: right;
  width: 60%;
}

hr {
  padding: 0;
  border: none;
  border-top: 5px solid #fff;
  color: #fff;
  text-align: center;
  margin: 0px auto;
  width: 420px;
  height: 10px;
  z-index: -10;
}

.cloud {
  width: 350px;
  height: 120px;
  background: #FFF;
  background: linear-gradient(top, #FFF 100%);
  border-radius: 100px;
  position: absolute;
  margin: 120px auto 20px;
  z-index: 0;
  transition: ease 1s;
}

.cloud:after, 
.cloud:before {
  content: '';
  position: absolute;
  background: #FFF;
  z-index: 0
}

.cloud:after {
  width: 100px;
  height: 100px;
  top: -50px;
  left: 50px;
  border-radius: 100px;
}

.cloud:before {
  width: 180px;
  height: 180px;
  top: -90px;
  right: 50px;
  border-radius: 200px;
}

.x1 {
  top: -50px;
  left: 100px;
  transform: scale(0.3);
  opacity: 0.9;
  animation: moveclouds 15s linear infinite;
}

.x1_5 {
  top: -80px;
  left: 250px;
  transform: scale(0.3);
  animation: moveclouds 17s linear infinite;
}

.x2 {
  left: 250px;
  top: 30px;
  transform: scale(0.6);
  opacity: 0.6;
  animation: moveclouds 25s linear infinite;
}

.x3 {
  left: 250px;
  bottom: -70px;
  transform: scale(0.6);
  opacity: 0.8;
  animation: moveclouds 25s linear infinite;
}

.x4 {
  left: 470px;
  bottom: 20px;
  transform: scale(0.75);
  opacity: 0.75;
  animation: moveclouds 18s linear infinite;
}

.x5 {
  left: 200px;
  top: 300px;
  transform: scale(0.5);
  opacity: 0.8;
  animation: moveclouds 20s linear infinite;
}

@keyframes moveclouds {
  0% {
    margin-left: 1000px;
  }
  100% {
    margin-left: -1000px;
  }
}
</style>
