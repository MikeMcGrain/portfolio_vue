<template>
  <div>
    <h1>Full-Stack Web Development</h1>
    <img id="signature" src="../assets/sig.png" alt="Mike McGrain signature" />
    <!-- <img id="mevn" src="../assets/mevn2.jpeg" alt="MEVN stack logos" /> -->
    <!-- <img id="mern" src="../assets/mern4.png" alt="MERN stack logos" /> -->
    <!-- <p>
      I'm a developer interested in creating full-stack JavaScript
      applications for the web. Current focus lies in MEVN and MERN. I'm
      also interested in Electron and NativeScript
    </p>-->
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
  transform: scaleY(1.75);
  padding-top: 20px;
  font-family: highSpeed;
  color: #607d8b;
  -webkit-animation: glow 2s ease-in-out infinite alternate;
  -moz-animation: glow 2s ease-in-out infinite alternate;
  animation: glow 2s ease-in-out infinite alternate;
}

#signature {
  display: block;
  margin: 0px auto;
  width: 80%;
}

@-webkit-keyframes glow {
  from {
    color: white;
    text-shadow: 0 0 10px #9dc14c, 0 0 20px #9dc14c, 0 0 30px #9dc14c,
      0 0 40px #9dc14c, 0 0 50px #9dc14c, 0 0 60px #9dc14c, 0 0 70px #9dc14c;
  }

  to {
    color: #607d8b;
    text-shadow: 0 0 20px #9dc14c, 0 0 30px #9dc14c, 0 0 40px #9dc14c,
      0 0 50px #9dc14c, 0 0 60px #9dc14c, 0 0 70px #9dc14c, 0 0 80px #9dc14c,
      0 1 90px #9dc14c;
  }
}
</style>