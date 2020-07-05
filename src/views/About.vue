<template>
  <div>
    <h1>Full-Stack Web Development</h1>
    <img id="signature" src="../assets/sig.png" alt="Mike McGrain signature" />
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Codystar:300&display=swap");

@font-face {
  font-family: highSpeed;
  src: url(../assets/fonts/HIGHSPEED.TTF);
}

div {
  margin: 40px;
  border: 10px double #607d8b;
  border-radius: 45px;
}

h1 {
  text-align: center;
  font-size: 4vw;
  transform: scaleY(1.5);
  padding-top: 20px;
  font-family: highSpeed;
  color: #607d8b;
  -webkit-animation: glow 3s ease-in-out infinite alternate;
  -moz-animation: glow 3s ease-in-out infinite alternate;
  animation: glow 3s ease-in-out infinite alternate;
}

#signature {
  display: block;
  margin: 0px auto;
  width: 80%;
}

@-webkit-keyframes glow {
  from {
    color: #607d8b;
  }
  to {
    font-size: 4.4vw;
    color: rgb(192, 191, 191);
    text-shadow: 0 0 10px #607d8b, 0 0 20px #607d8b, 0 0 30px #607d8b,
      0 0 40px #607d8b, 0 0 50px #607d8b, 0 0 60px #607d8b;
  }
}
</style>