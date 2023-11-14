
const logeEvent = require('./logeEvent')
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('log', (msg) => {
  logeEvent(msg);
});
myEmitter.emit('log','hello ');