const title = d3.select('head').append('title')
  .text('D3-' + d3.version + '/A-Frame-' + AFRAME.version);
const scene = d3.select('body').append('a-scene')
  .attr('physics', 'debug: true');
scene.append('a-sky').attr('color', 'black');

const container = scene.append('a-entity');

const floor = container.append('a-box')
  .attr('rotation', '-90 0 0')
  .attr('position', '0 0 0') 
  .attr('width', 70)
  .attr('height', 70)
  .attr('depth', 1)
  .attr('color', 'orange')
  .attr('static-body', '');

const back = container.append('a-box')
  .attr('position', '0 35 -35') 
  .attr('width', 70)
  .attr('height', 70)
  .attr('depth', 1)
  .attr('color', 'green')
  .attr('opacity', 0.2)
  .attr('static-body', '');

const left = container.append('a-box')
  .attr('rotation', '0 90 0')
  .attr('position', '-35 35 0') 
  .attr('width', 70)
  .attr('height', 70)
  .attr('depth', 1)
  .attr('color', 'red')
  .attr('opacity', 0.2)
  .attr('static-body', '');

const right = container.append('a-box')
  .attr('rotation', '0 90 0')
  .attr('position', '35 35 0') 
  .attr('width', 70)
  .attr('height', 70)
  .attr('depth', 1)
  .attr('color', 'blue')
  .attr('opacity', 0.2)
  .attr('static-body', '');

const front = container.append('a-box')
  .attr('position', '0 35 35') 
  .attr('width', 70)
  .attr('height', 70)
  .attr('depth', 1)
  .attr('color', 'brown')
  .attr('opacity', 0.2)
  .attr('static-body', '');

function rand255() {
  return Math.floor(255 * d3.randomUniform(1)());
}

const loop = setInterval(function () {
  const x = d3.randomUniform(1)();
  const y = 150 + d3.randomUniform(1)();
  const z = d3.randomUniform(1)();
  const r = 5 * d3.randomUniform(1)() + 5;
  const position = x + ' ' + y + ' ' + z;
  const color = 'rgb(' + rand255() + ',' + rand255() + ',' + rand255() + ')';

  const ball = scene.append('a-sphere')
    .attr('position', position)
    .attr('radius', r)
    .attr('color', color)
    .attr('wireframe', true)
    .attr('dynamic-body', '');
}, 3000);

const camera = scene.append('a-camera')
  .attr('position', '0 45 100');

