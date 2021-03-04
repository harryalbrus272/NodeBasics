const tutorial = require('./tutorial');
console.log("Hello World from the node side");
//node modules is basically a javascript file. Separating the concerns for the application
console.log(tutorial);
//tutorial is of function type
console.log(tutorial.sum(2,5));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject('class called'));
//emitter is built-in to the node
const EventEmitter = require('events');
const { pseudoRandomBytes } = require('crypto');
const eventEmitter = new EventEmitter();
//only get executed if the event 'tutorial' occurs
eventEmitter.on('tutorial', (num1,num2)=>{
    console.log(num1+num2);
});
eventEmitter.emit('tutorial',1,2);

class person extends EventEmitter{
    constructor(name) {
         super();
         this._name = name;
    }
    get name(){
        return this._name;
    }
}
let sks = new person('Shashwat Kumar Singh');
let sam = new person('Samriddhi Singh');
//add a listener to the sks object
sks.on('name',()=>{
    console.log('My name is ', sks.name);
});
sam.on('name',()=>{
    console.log('My name is ', sam.name);
});
//emit a event 
sks.emit('name');
sam.emit('name');
