const $ = require('jquery');
const EventEmitter = require('eventemitter3');
const $document = $(document);

const emitter = new EventEmitter();

console.log('emitter', emitter);

function sample() {
  // let $header = $('#header');
  // console.log('sample', $header);
}
emitter.on('ready', sample);

$document.ready(() => {
  emitter.emit('ready');
  setTimeout(() => {
    emitter.emit('afterReady');
  }, 0);
});
emitter.emit('load');
