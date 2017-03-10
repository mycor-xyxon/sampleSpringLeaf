const $ = require('jquery');
const EventEmitter = require('eventemitter');

const emitter = new EventEmitter();

function sample() {
  let $header = $('#header');
  console.log('sample');
}
emitter.on('ready', sample);
