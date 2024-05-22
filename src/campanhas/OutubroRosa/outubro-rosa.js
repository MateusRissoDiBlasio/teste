import {butterfliesBackground} from "https://unpkg.com/threejs-toys@0.0.7/build/threejs-toys.module.cdn.min.js"
    
    var root = document.getElementById("app");
    var body = document.body;
    var options = {
        el: root,
        eventsEl: body,
        gpgpuSize: 20,
        // background: 0xFF00FF,
        // background: 0xFF69A4,
        // background: 0xFF1493,
        background:0xFFB6C1,
        // background:0xFF69B4,
        // background:0xEE82EE,
        // background:0xDA70D6,
        

        material: "basic",
        materialParams:{
            transparent: true,
            alphaTest: 0.5,
        },
        texture: "./images/butterflies.png",
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

butterfliesBackground(options);
