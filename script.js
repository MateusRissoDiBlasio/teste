import {butterfliesBackground} from "https://unpkg.com/threejs-toys@0.0.7/build/threejs-toys.module.cdn.min.js"

var root = document.getElementById("app");
var body = document.body;
var options = {
    el: root,
    eventsEl: body,
    gpgpuSize: 20,
    background: 0x4b0082,
    // background: 0x4b0950,
    material: "basic",
    materialParams:{
        transparent: true,
        alphaTest: 0.5,
    },
    texture: "./src/images/butterflies.png",
    textureCount: 3,
    wingscale: [0.5,0.5,0.5,],
    wingsWidthSegments: 10,
    wingsHeightSegments: 10,
    wingsSpeed: 1.5,
    wingsDisplacementScale: 2,
    noiseCoordScale: 0.01,
    noiseTimeCoef: 0.005,
    noiseIntensity: 0.0025,
    attractionRadius1: 100,
    attractionRadius2: 100,
    maxVelocity: 0.15,
};

var curtime = new Date()
var curmonth = curtime.getMonth()+1;

if(curmonth == 9){

    location.replace ("./src/campanhas/SetembroAmarelo/setembro-amarelo.html")

}


if(curmonth == 5){

    location.replace ("./src/campanhas/OutubroRosa/outubro-rosa.html")
    
}

if(curmonth == 11){
    location.replace ("./src/campanhas/NovembroAzul/novembro-azul.html")

}


butterfliesBackground(options);

var animateButton = function (e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove("animate");

    e.target.classList.add("animate");
    setTimeout(function () {
    e.target.classList.remove("animate");
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener("click", animateButton, false);
}
