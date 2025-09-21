const EventEmitter = require('events');

/**
 * events lib is one of the imp builtin libraries in node 
 * becuase other lib implement the eventemitter module
 * eg streams in node are event emitters
 * 
 * after requiring the EventEmitter class we create an EventEmitter obj
 */

// Streams are Event Emitters
// process.stdin, process.stdout


const myEmitter= new EventEmitter()
//an event emitting obj as so many methods
//here are the most imp one's
//.emit('<String>') string that is able to identify a certain event

myEmitter.emit('TEST_EVENT')
// now other thing that we can do on this obj is how we can subsribe to the events emitted by this obj
//you do that with .on method

myEmitter.on('TEST_EVENT',()=>{
    console.log('TEST EVENT WAS FIRED');
    
})

myEmitter.on('TEST_EVENT',()=>{
    console.log('TEST EVENT WAS FIRED');
    
})
myEmitter.on('TEST_EVENT',()=>{
    console.log('TEST EVENT WAS FIRED');
    
})
myEmitter.on('TEST_EVENT',()=>{
    console.log('TEST EVENT WAS FIRED');
    
})

/**
 * Interview question
 * tell how many times the test event was fired will be prented from the above code 
 * Ans : is 0 the reason is order
 * we subsribed to the event 4 times but that event was not fired after we subscribe to it
 * so you have to emit using emitter after the subcription
 * 
 * the other way to fire before callback is using the setImmediate() 
 * setImmediate(()=>{
 * myEmitter.emit('TEST_EVENT')
 * })
 * 
 * thiis callback inside setImmediate will be executed at the end of the execution of the file
 */
