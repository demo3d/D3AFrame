const title = d3.select('head').append('title')
  .text('D3-' + d3.version + '/A-Frame-' + AFRAME.version);
const scene = d3.select('body').append('a-scene');
const assets = scene.append('a-assets');
assets.append('a-asset-item')
  .attr('id', 'teapot')
  .attr('src', 'teapot.dae');

const teapot = scene.append('a-entity')
  .attr('collada-model', '#teapot')
  .attr('position', '0 0 -60');

teapot.append('a-animation')
  .attr('attribute', 'rotation')
  .attr('dur', '10000')
  .attr('fill', 'forwards')
  .attr('to', '360 1080 0')
  .attr('easing', 'linear')
  .attr('repeat', 'indefinite');

scene.append('a-sky').attr('color', 'black');
