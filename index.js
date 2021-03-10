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
//instance of EventEmitter
const eventEmitter = new EventEmitter();
//only get executed if the event 'tutorial' occurs. It's the listener
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


//readline module
const readLine = require('readline');
const { rawListeners } = require('process');
//createInterface takes in two argument object
const r1 = readLine.createInterface({input:process.stdin, output: process.stdout});
let num1 = Math.floor((Math.random()*10)+1);
let num2 = Math.floor((Math.random()*10)+1);
let answer = num1+num2;

r1.question(`What is  ${num1} + ${num2} ?`, (userInput)=>{
    if(userInput.trim() == answer)
    {
        r1.close();
        //this emits an close event
    } else{
        r1.setPrompt(`Incorrect response of ${userInput}, please try again\n`);
        r1.prompt();
        r1.on('line',(userInput)=>{
            if(userInput.trim() == answer){
                r1.close();
            } else{
                r1.setPrompt(`Incorrect response of ${userInput}, please try again\n`);
                r1.prompt(); 
            }
        });
    }
});

//Here, we are listening to the close event emitted from above
r1.on('close', ()=>{
    console.log('Correct!');
});


