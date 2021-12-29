var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var dtheta = 0.01;

x = window.visualViewport.width / 2;
y = window.visualViewport.height / 2;

function setCanvas() {
    ctx.canvas.width = window.visualViewport.width;
    ctx.canvas.height = window.visualViewport.height;
    x = 3 * window.visualViewport.width / 4;
    y = window.visualViewport.height / 2;
    // ctx.translate(width / 2, height / 2); // now 0,0 is the center of the canvas.
    // console.log(ctx.canvas.width, ctx.canvas.height)
}

function resizeCanvas() {
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.translate(width / 2, height / 2); // now 0,0 is the center of the canvas.
}

// window.addEventListener('resize', resizeCanvas, false);

class Planet {
    constructor(orbitHeight, theta, dtheta, radius, color) {
        this.orbitHeight = orbitHeight;
        this.theta = theta;
        this.dtheta = dtheta;
        this.radius = radius;
        this.color = color;
    }

    calcPos() {
        const coords = [0, 0];
        coords[0] = this.orbitHeight * Math.cos(this.theta) + x;
        coords[1] = this.orbitHeight * Math.sin(this.theta) + y;
        // console.log(coords)
        return coords;
    }
}

class Moon {
    constructor(planet, orbitHeight, theta, dtheta, radius, color) {
        this.planet = planet;
        this.orbitHeight = orbitHeight;
        this.theta = theta;
        this.dtheta = dtheta;
        this.radius = radius;
        this.color = color;
    }

    calcPos() {
        // console.log(this.planet.calcPos()[0], this.planet.calcPos()[1]);
        const coords = [0, 0];
        coords[0] = this.orbitHeight * Math.cos(this.theta) + this.planet.calcPos()[0];
        coords[1] = this.orbitHeight * Math.sin(this.theta) + this.planet.calcPos()[1];
        return coords;
    }

}

var mercury = new Planet(55, 10, -0.003, 4, '#998e8d');
var venus = new Planet(70, 2, -0.0045, 6, '#bebf8e');
var earth = new Planet(150, 8, -0.0013, 10, '#3260a8');
var moon = new Moon(earth, 20, 0, -0.015, 3, 'white');
var mars = new Planet(250, 40, -0.0011, 7, '#a84e32');
var jupiter = new Planet(380, 20, -0.00038, 18, '#c48114')
var saturn = new Planet(400, 23, -0.000235, 14, '#ead6b8')
var uranus = new Planet(500, 16, -0.0002, 12, '#2fcc90')
var neptune = new Planet(550, 10, -0.0001, 13, '#145eb8')
var pluto = new Planet(1000, 10, -0.0003, 2, '#714375')


// var asteroid = new Planet(1000, 10, -0.01, 2, 'gray')

// console.log(earth.theta);
function drawSun() {
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, Math.PI * 2);
    ctx.fillStyle = '#d3d921';
    ctx.fill();
    ctx.closePath();
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var Kuiper = {};
var Asteroid = {};

const thetaStart = Array.from({ length: 400 }, () => Math.floor(Math.random() * 400));
const thetaStart2 = Array.from({ length: 50 }, () => Math.floor(Math.random() * 400));

thetaStart.forEach(KuiperGen);
function KuiperGen(value, index, array) {
    Kuiper[index] = new Planet(getRndInteger(950, 1050), value, -0.0003, 2, 'gray');
}

thetaStart2.forEach(AsteroidGen);
function AsteroidGen(value, index, array) {
    Asteroid[index] = new Planet(getRndInteger(280, 320), value, -0.0004, 2, 'gray');
}

function drawKuiper() {
    Object.keys(Kuiper).forEach(key => {
        // console.log(key);        // the name of the current key.
        // console.log(Kuiper[key]); // the value of the current key.
        drawPlanet(Kuiper[key].calcPos()[0], Kuiper[key].calcPos()[1], Kuiper[key].radius, Kuiper[key].color);
    });
}

function drawAsteroid() {
    Object.keys(Asteroid).forEach(key => {
        // console.log(key);        // the name of the current key.
        // console.log(Kuiper[key]); // the value of the current key.
        drawPlanet(Asteroid[key].calcPos()[0], Asteroid[key].calcPos()[1], Asteroid[key].radius, Asteroid[key].color);
    });
}



function drawPlanet(x1, y1, r1, color1) {
    ctx.beginPath();
    ctx.arc(x1, y1, r1, 0, Math.PI * 2);
    ctx.fillStyle = color1;
    ctx.fill();
    ctx.closePath();
}

function drawRings(x1, y1, r2, t2, color1) {
    ctx.beginPath();
    ctx.arc(x1, y1, r2, 0, 2 * Math.PI);
    ctx.lineWidth = t2;
    ctx.strokeStyle = color1;
    ctx.stroke();
    ctx.closePath();
}

function drawMoon(x1, y1, r1, color1) {
    ctx.beginPath();
    ctx.arc(x1, y1, r1, 0, Math.PI * 2);
    ctx.fillStyle = color1;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    setCanvas()
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSun();
    mercury.theta += mercury.dtheta;
    venus.theta += venus.dtheta;
    earth.theta += earth.dtheta;
    moon.theta += moon.dtheta;
    mars.theta += mars.dtheta;
    jupiter.theta += jupiter.dtheta;
    saturn.theta += saturn.dtheta;
    uranus.theta += uranus.dtheta;
    neptune.theta += neptune.dtheta;
    pluto.theta += pluto.dtheta;

    drawPlanet(mercury.calcPos()[0], mercury.calcPos()[1], mercury.radius, mercury.color);
    drawPlanet(venus.calcPos()[0], venus.calcPos()[1], venus.radius, venus.color);
    drawPlanet(earth.calcPos()[0], earth.calcPos()[1], earth.radius, earth.color);
    drawMoon(moon.calcPos()[0], moon.calcPos()[1], moon.radius, moon.color);
    drawPlanet(mars.calcPos()[0], mars.calcPos()[1], mars.radius, mars.color);
    drawPlanet(jupiter.calcPos()[0], jupiter.calcPos()[1], jupiter.radius, jupiter.color);
    drawPlanet(saturn.calcPos()[0], saturn.calcPos()[1], saturn.radius, saturn.color);
    drawRings(saturn.calcPos()[0], saturn.calcPos()[1], 25, 2, '#ab604a');
    drawRings(saturn.calcPos()[0], saturn.calcPos()[1], 30, 2, '#bfbdaf');
    drawPlanet(uranus.calcPos()[0], uranus.calcPos()[1], uranus.radius, uranus.color);
    drawPlanet(neptune.calcPos()[0], neptune.calcPos()[1], neptune.radius, neptune.color);
    drawPlanet(pluto.calcPos()[0], pluto.calcPos()[1], pluto.radius, pluto.color);

    drawKuiper()
    drawAsteroid()

    Object.keys(Kuiper).forEach(key => {
        Kuiper[key].theta += Kuiper[key].dtheta;
    });

    Object.keys(Asteroid).forEach(key => {
        Asteroid[key].theta += Asteroid[key].dtheta;
    });
}

setInterval(draw, 10);