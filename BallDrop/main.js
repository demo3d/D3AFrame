const title = d3.select('head').append('title')
  .text('D3-' + d3.version + '/A-Frame-' + AFRAME.version);
const scene = d3.select('body').append('a-scene')
  .attr('physics', 'debug: true');

/*
const camera = scene.append('a-entity')
  .attr('camera', true)
  .attr('look-controls', true);
*/

const floor = scene.append('a-plane')
  .attr('rotation', '-90 0 0')
  .attr('position', '0 0 -15') 
  .attr('width', 15)
  .attr('height', 15)
  .attr('color', 'blue')
  .attr('static-body', true);

const ball = scene.append('a-sphere')
  .attr('position', '0 5 -15')
  .attr('color', 'red')
  .attr('wireframe', true);
  .attr('dynamic-body', 'true');
