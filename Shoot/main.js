const title = d3.select('head').append('title')
  .text('D3-' + d3.version + '/A-Frame-' + AFRAME.version);
const scene = d3.select('body').append('a-scene');
//  .attr('physics', 'debug: true');
scene.append('a-sky').attr('color', 'black');

function _floor(parent) {
  return parent.append('a-plane')
    .attr('rotation', '-85 0 0')
    .attr('position', '0 0 -15') 
    .attr('width', 15)
    .attr('height', 35)
    .attr('color', 'yellow')
    .attr('static-body', '');
}

function _guard(parent) {
  return parent.append('a-box')
    .attr('position', '0 -1 0') 
    .attr('width', 15)
    .attr('height', 1)
    .attr('depth', 0.1)
    .attr('color', 'blue')
    .attr('static-body', '');
}

function _board(parent) {
  return parent.append('a-plane')
  .attr('rotation', '0 0 0')
  .attr('position', '0 10 -15') 
  .attr('width', 5)
  .attr('height', 5)
  .attr('color', 'white')
  .attr('static-body', '');
}

function _ball(parent) {
  return parent.append('a-sphere')
    .attr('position', '0 5 -2')
    .attr('radius', 0.5)
    .attr('color', 'brown')
    .attr('wifeframe', true)
    .attr('velocity', '0 0 0')
    .attr('dynamic-body', '');
}

const x = d3.randomUniform(1)();
const y = 20 + d3.randomUniform(1)();
const z = -5 + d3.randomUniform(1)();

const floor = _floor(scene);

const guard = _guard(scene);

const board = _board(scene);
const ball = _ball(scene);

function shoot(ball) {
  const f = new CANNON.Vec3(0, 75, -50)
  const p = new CANNON.Vec3().copy(ball.attr('position'))
  ball.node().body.applyImpulse(f, p)
}

scene.on('touchend', function () { console.log('shoot'); shoot(ball); });

const camera = scene.append('a-camera');
camera.attr('position', '0 0 2')


