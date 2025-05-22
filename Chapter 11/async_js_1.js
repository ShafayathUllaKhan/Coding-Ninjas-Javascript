// Aysnc js work on event  loop

// settimeout
// setinterval
// fetch


console.log(10);
setTimeout(()=>{
  alert("hi");
},5000);

console.log(20);

// call back a function is passed to another 
// function as a parameter is called call back function

// call back function example and timeout example
// of excuting after some time

function greet(callback){
  setTimeout(()=>{
    console.log('Hello,');
    callback();

  },2000)
}

function message(){
  console.log('welcome to the session');
}

greet(message);