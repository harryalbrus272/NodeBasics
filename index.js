const tutorial = require("./tutorial");
console.log("Hello World from the node side");
//node modules is basically a javascript file. Separating the concerns for the application
console.log(tutorial);
//tutorial is of function type
console.log(tutorial.sum(2, 5));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject("class called"));
//emitter is built-in to the node
const EventEmitter = require("events");
//instance of EventEmitter
const eventEmitter = new EventEmitter();
//only get executed if the event 'tutorial' occurs. It's the listener
eventEmitter.on("tutorial", (num1, num2) => {
  console.log(num1 + num2);
});
eventEmitter.emit("tutorial", 1, 2);

class person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }
  get name() {
    return this._name;
  }
}
let sks = new person("Shashwat Kumar Singh");
let sam = new person("Samriddhi Singh");
//add a listener to the sks object
sks.on("name", () => {
  console.log("My name is ", sks.name);
});
sam.on("name", () => {
  console.log("My name is ", sam.name);
});
//emit a event
sks.emit("name");
sam.emit("name");

//readline module
// const readLine = require('readline');
// const { rawListeners } = require('process');
// //createInterface takes in two argument object
// const r1 = readLine.createInterface({input:process.stdin, output: process.stdout});
// let num1 = Math.floor((Math.random()*10)+1);
// let num2 = Math.floor((Math.random()*10)+1);
// let answer = num1+num2;

// r1.question(`What is  ${num1} + ${num2} ?`, (userInput)=>{
//     if(userInput.trim() == answer)
//     {
//         r1.close();
//         //this emits an close event
//     } else{
//         r1.setPrompt(`Incorrect response of ${userInput}, please try again\n`);
//         r1.prompt();
//         //line will keep the input active
//         r1.on('line',(userInput)=>{
//             if(userInput.trim() == answer){
//                 r1.close();
//             } else{
//                 r1.setPrompt(`Incorrect response of ${userInput}, please try again\n`);
//                 r1.prompt();
//             }
//         });
//     }
// });
// //Here, we are listening to the close event emitted from above
// r1.on('close', ()=>{
//     console.log('Correct!');
// });

//Filesystem Module - create, delete and delete files
const fs = require("fs");
// create a file
// fs.writeFile('first.txt','this is a example', (err) => {
//     if(err){
//         console.log(err);
//     } else{
//         console.log('File succesfully created');
//         //You shoiuld mention the encoding of the file to be read because the Buffer Stram reads the file in Binary format
//         fs.readFile('first.txt', 'utf8', (err,file) => {
//             if (err) {
//                 console.log(err);
//             } else{
//                 console.log(file);
//             }
//         });
//     }
// });

//Renaming a file
//Name of the file to be read, Name of the file that it should be renamed to, and the call back function
// fs. rename('first.txt', 'second.txt', (err)=> {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File has been succesfully renamed');
//     }
// });

//Appending the file
// fs.appendFile('second.txt', 'The data to be appended', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Successfully appended the data to the file');
//     }
// });

//Deleting the file
// fs.unlink('second.txt', (err) =>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Successfully deleted the file');
//     }
// });

//Craete a new directory
// fs.mkdir("magic", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Folder successfully created");
//     fs.writeFile("./magic/example2.txt", "123456", (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("Successfully created the file inside the directory");
//       }
//     });
//   }
// });


//Deleting a directory
// fs.rmdir('magic', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Successfully deleted the folder');
//     }
// });

//You cannot delete a non-empty directory else it gives an error as 'directory not empty'

// fs.readdir('magic', (err,files) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(files);
//         for(let file of files)
//             fs.unlink('./magic/'+ file, err => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log('Sucesfully deleted the file');
//                 }
//             });
//     }
// });

// //Reading the data in chunks rather than as a whole

// const readStream = fs.createReadStream('./tutorial/example.txt', 'utf8');
// //readStream object inherits from the event stream

// const writeStream = fs.createWriteStream('./magic/first.txt'); 
// //this reads the data in chunks rather than the whole data. So, you can always start writing the data to somewhere without 
// readStream.on('data', chunk => {
//     // console.log(chunk);
//     writeStream.write(chunk);
// });

//Read and Write Streams are useful when the data of the file is very large to handle for a single execution
//The read file utilises the buffer size equal to the size of the file. But read and write streams use only small buffer size

//Pipe and pipe chaining - Readable and writable 
const readStream = fs.createReadStream('./tutorial/example.txt', 'utf8');
const writeStream = fs.createWriteStream('./magic/first.txt');
//Use the pipe function to pipe the data to the writeStream
readStream.pipe(writeStream);
//Pipe needs source stream and write stream