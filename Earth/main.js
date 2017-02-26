const title = d3.select('head').append('title')
  .text('D3-' + d3.version + '/A-Frame-' + AFRAME.version);
const scene = d3.select('body').append('a-scene');

const assets = scene.append('a-assets');
const img = assets.append('img')
  .attr('id', 'earth')
  .attr('src', 'earth-diffuse.jpg');
const earth = scene.append('a-sphere')
  .attr('position', '0 1.5 -5')
  .attr('radius', '2')
  .attr('src', '#earth');

const sky = scene.append('a-sky')
  .attr('color', 'black');

var animating = false;
scene.on('touchstart', function () {
  if (animating) return;
  const animation = earth.append('a-animation')
  .attr('attribute', 'rotation')
  .attr('dur', '10000')
  .attr('fill', 'forwards')
  .attr('to', '0 360 0')
  .attr('easing', 'linear')
  .attr('repeat', 'indefinite');
  animating = true;
})

