//const mod1= require('./module');
//console.log(mod1.number);
//mod1.func();

const welcome = require("./welcome")


//const mod1= require('./module');
//const os=require('os');
//let userName = os.userInfo().userName;
//console.log(userName);


//console.log(module);

/*console.log(mod1.name);
const mod2= require('./module');
mod1.name="pV221";
console.log(mod2.name);
console.log(mod1.name);*/


 
/*console.log(mod1.name); 
 
const mod2=require('./module'); 
mod1.name="Hello"; 
 
console.log(mod2.name); 
console.log(mod1.name); 
mod1.test(); 
mod2.test();*/


/*const mod1=require('./myModule'); 
const os=require('os'); 
let userName=os.userInfo().username; 
console.log(mod1.getMessage(userName));*/




////////////

/*const welcome=require('./welcome');
welcome.getMorningMessage();
welcome.getEveningMessage();*/


////////////
let nodePath=process.argv[0]; 
let appPath=process.argv[1]; 
let name=process.argv[2]; 
let age=process.argv[3]; 
 
console.log(`nodePath:${nodePath}`); 
console.log(`appPath:${appPath}`); 
console.log(`name:${name}`); 
console.log(`age:${age}`);