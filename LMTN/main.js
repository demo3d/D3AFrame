const title = d3.select('head').append('title')
  .text('D3-' + d3.version + '/A-Frame-' + AFRAME.version);
const scene = d3.select('body').append('a-scene');

const assets = scene.append('a-assets');
assets.append('img')
  .attr('id', 'then')
  .attr('src', 'map_then.jpg');
assets.append('img')
  .attr('id', 'now')
  .attr('src', 'map_now.jpg');


scene.append('a-sky').attr('color', 'black');

const map_then = scene.append('a-plane')
  .attr('rotation', '-90 0 0')
  .attr('position', '0 -1 0')
  .attr('width', 16)
  .attr('height', 16)
  .attr('src', '#then')

const map_now = scene.append('a-plane')
  .attr('rotation', '90 0 0')
  .attr('position', '0 2 0')
  .attr('width', 16)
  .attr('height', 16)
  .attr('src', '#now')

const camera = scene.append('a-camera')
  .attr('rotation', '0 0 0')
  .attr('position', '0 0 0');

