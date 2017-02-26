const title = d3.select('head').append('title')
  .text('D3-' + d3.version + '/A-Frame-' + AFRAME.version);
const scene = d3.select('body').append('a-scene');

// ref: https://en.wikipedia.org/wiki/Panorama#/media/File:SonyCenter_360panorama.jpg
scene.append('a-sky').attr('src', 'https://upload.wikimedia.org/wikipedia/commons/6/65/SonyCenter_360panorama.jpg'); 
