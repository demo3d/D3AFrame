const title = d3.select('head').append('title')
  .text('D3-' + d3.version + '/A-Frame-' + AFRAME.version);
const scene = d3.select('body').append('a-scene')
  .attr('physics', 'debug: true');

const floor = scene.append('a-plane')
  .attr('rotation', '-90 0 0')
  .attr('position', '0 0 -15') 
  .attr('width', 15)
  .attr('height', 15)
  .attr('color', 'blue')
  .attr('static-body', '');


setInterval(function () {
  const x = d3.randomUniform(1)();
  const y = 20 + d3.randomUniform(1)();
  const z = -15 + d3.randomUniform(1)();
  const position = x + ' ' + y + ' ' + z;
  const ball = scene.append('a-sphere')
    .attr('position', position)
    .attr('color', 'red')
    .attr('wireframe', true)
    .attr('dynamic-body', '');
  setTimeout(function () {
    ball.remove()
  }, 60000);
}, 1000);

