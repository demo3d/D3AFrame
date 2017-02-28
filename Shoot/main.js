const title = d3.select('head').append('title')
  .text('D3-' + d3.version + '/A-Frame-' + AFRAME.version);
const scene = d3.select('body').append('a-scene');
//  .attr('physics', 'debug: true');
scene.append('a-sky').attr('color', 'black');

const floor = scene.append('a-box')
    .attr('rotation', '-90 0 0')
    .attr('position', '0 0 -15') 
    .attr('width', 15)
    .attr('height', 30)
    .attr('depth', 1)
    .attr('color', 'yellow')
    .attr('static-body', '');

const ceiling = scene.append('a-box')
    .attr('rotation', '-90 0 0')
    .attr('position', '0 30 -15') 
    .attr('width', 15)
    .attr('height', 30)
    .attr('depth', 1)
    .attr('color', 'yellow')
    .attr('static-body', '');

const back = scene.append('a-box')
  .attr('position', '0 15 -30')
  .attr('width', 15)
  .attr('height', 30)
  .attr('depth', 1)
  .attr('color', 'green')
  .attr('opacity', 0.2)
  .attr('static-body', '');

const left = scene.append('a-box')
  .attr('rotation', '0 90 0')
  .attr('position', '-7.5 15 -15')
  .attr('width', 30)
  .attr('height', 30)
  .attr('depth', 1)
  .attr('color', 'red')
  .attr('opacity', 0.2)
  .attr('static-body', '');

const right = scene.append('a-box')
  .attr('rotation', '0 90 0')
  .attr('position', '7.5 15 -15')
  .attr('width', 30)
  .attr('height', 30)
  .attr('depth', 1)
  .attr('color', 'blue')
  .attr('opacity', 0.2)
  .attr('static-body', '');

const front = scene.append('a-box')
  .attr('position', '0 15 0')
  .attr('width', 15)
  .attr('height', 30)
  .attr('depth', 1)
  .attr('color', 'brown')
  .attr('opacity', 0.2)
  .attr('static-body', '');

const board = scene.append('a-box')
  .attr('rotation', '0 0 0')
  .attr('position', '0 10 -15') 
  .attr('width', 5)
  .attr('height', 4)
  .attr('depth', 0.1)
  .attr('color', 'white')
  .attr('static-body', '');

function _ball(parent) {
  return parent.append('a-sphere')
    .attr('position', '0 5 -2')
    .attr('radius', 0.5)
    .attr('color', 'brown')
    .attr('wifeframe', true)
    .attr('velocity', '0 0 0')
    .attr('dynamic-body', '');
}

const ball = _ball(scene);

function shoot(ball) {
  const x = 100 * d3.randomUniform(1)();
  const y = 100 * d3.randomUniform(1)();
  const z = 100 * d3.randomUniform(1)();

  const f = new CANNON.Vec3(x, y, z)
  const p = new CANNON.Vec3().copy(ball.attr('position'))
  ball.node().body.applyImpulse(f, p)
}

scene.on('mouseup', function () { console.log('shoot'); shoot(ball); });

const camera = scene.append('a-camera');
camera.attr('position', '0 0 3')

