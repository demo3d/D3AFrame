const title = d3.select('head').append('title').text('Shoot target');
const scene = d3.select('body').append('a-scene');

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

const table = scene.append('a-box')
  .attr('rotation', '0 0 0')
  .attr('position', '0 0 -15') 
  .attr('width', 5)
  .attr('height', 10)
  .attr('depth', 5)
  .attr('color', 'orange')
  .attr('static-body', '');

const target = scene.append('a-sphere')
  .attr('position', '0 15 -13.5')
  .attr('radius', 1)
  .attr('color', 'blue')
  .attr('dynamic-body', '');

function _ball(parent) {
  return parent.append('a-sphere')
    .attr('position', '0 15 -2')
    .attr('radius', 0.5)
    .attr('color', 'brown')
    .attr('wifeframe', true)
    .attr('velocity', '0 0 0')
    .attr('dynamic-body', '');
}

const ball = _ball(scene);

function shoot(y, z) {
  const x = 0;// * d3.randomUniform(1)();

  const f = new CANNON.Vec3(x, y, -z)
  const p = new CANNON.Vec3().copy(ball.attr('position'))
  ball.node().body.applyImpulse(f, p)
}

scene.on('mouseup', function () { console.log('shoot'); shoot(60, 80); });

const camera = scene.append('a-camera');
camera.attr('position', '0 5 5')

const light1 = scene.append('a-light');
light1.attr('type', 'ambient');

const light2 = scene.append('a-light');
light2.attr('type', 'directional');
light2.attr('position', '0 5 -2');

