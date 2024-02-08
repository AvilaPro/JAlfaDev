console.log("aqui se esta activando el script de las particulas")

var partNum = 750;
//particle number - change it!

window.requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback){
            window.setTimeout(callback, 1000 / 60);
        };
})();

function between(min, max) {
  return Math.random() * (max - min) + min;
}

var istruehover = true;

var c = document.getElementById('c');
var ctx = c.getContext('2d');
//context and id of canvas

var w = window.innerWidth;
var h = window.innerHeight;
//width and height of canvas

c.width = w;
c.height = h;
//setting the width and height for canvas

var mouse = {
  x: w / 2, 
  y: h / 2
};
//mouse position

document.addEventListener('mousemove', function(e){ 
    mouse.x = e.clientX || e.pageX; 
    mouse.y = e.clientY || e.pageY;
  
    istruehover = false;
}, false);

document.addEventListener('mouseover', function(){ 
    istruehover = false;
}, false);
//finding the mouse position

var particles = [];
for(var x = 0; x < c.width / 33; x++) {
  for(var y = 0; y < c.height / 34; y++) {
    particles.push(new particle(x*33, y*33));
  }
}

//the particle function
function particle(x, y) {
  this.x = x + 20;
  this.y = y + 20;
  
  this.xo = x + 20;
  this.yo = y + 20;
  
  this.vx = 0;
  this.vy = 0;
  
  this.r = 15;
  
  var one = 'rgba(10, 255, 255, 0.7)';
  var two = 'rgba(255, 255, 255, 0.7)';
  var three = 'rgba(10, 255, 255, 0.9)';
  var four = 'rgba(255, 255, 255, 0.9)';
  var five = 'rgba(10, 255, 255, 0.5)';
  var six = 'rgba(255, 255, 255, 0.5)';
  var colors = [one, two, three, four, five, six];
  this.color = colors[Math.round(Math.random() * 2)];
  //only random colors of the variables
}

function draw() {
  requestAnimFrame(draw);
  
  ctx.fillStyle = 'rgba(52, 52, 53, 0.75)';
  ctx.fillRect(0, 0, c.width, c.height);
  
  /*
  ctx.beginPath();
  ctx.fillStyle = 'orange';
  ctx.arc(mouse.x, mouse.y, 40, Math.PI * 2, false);
  ctx.fill();
  */
  
  for(t = 0; t < particles.length; t++) {
    var p = particles[t];
    
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.arc(p.x, p.y, p.r, Math.PI * 2, false);
    ctx.fill();
    //the context of the particle(s)
    
   var dist,
    dx = mouse.x - p.x,
    dy = mouse.y - p.y;
  
  dist = Math.sqrt(dx*dx + dy*dy);
  
  if(dist <= 100) {
    var ax = dx,
      ay = dy;

      p.x -= ax/25;
      p.y -= ay/25;
  }
    
 
  var disto,
    dxo = p.x - p.xo,
    dyo = p.y - p.yo;
    
    disto = Math.sqrt(dxo*dxo + dyo*dyo);

    p.x -= dxo/50;
    p.y -= dyo/50;
    // making the particles move back into place
    
    if(disto != 0) {
       p.r = (disto / 4) + 15; 
      // simple algebra XD
    }

}
}

draw();



setInterval(mousemove, 1000);