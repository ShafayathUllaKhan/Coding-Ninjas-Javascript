//
//                      web api 
// browser api                          third party api
//                                        google maps
// window api
//    |
// dom api
// audio api

//        document (object or node) every element is present as node or object
//           html 
// head                  body 
// title               h1   p   div 
//                               h3


//window.document// give you your html page

//document // same answer

//document.childNodes // doctype and html

//document.children // html collection [html]

// accesing nodes in dom

//document.body // <body>

//document.body.childNodes // text space will take as text

//document.body.children //

//document.body.firstChild

//document.body.firstElementChild


// script tag should be at end other wise it will be null


// selectors

// console.log(document.querySelector("h1"))
// const firstHead = document.querySelectorAll("h1");
// console.log(firstHead)
// console.log(document.querySelector(".second"))
// console.log(document.querySelector("#para"))


 console.log(document.querySelector("h1"))
        const firstHead = document.querySelectorAll("h1");
        console.log(firstHead)
        console.log(document.querySelector(".second"))
        console.log(document.querySelector("#para"))


const heading = document.querySelector('.second');
const para = document.querySelector('#para');
console.log(heading);
console.log(para);

// by id
console.log(document.getElementById("para"));
console.log(document.getElementsByClassName("first"));
console.log(document.getElementsByTagName("h1"));

heading.style.color = "red";

para.style.backgroundColor = "grey";


// creating an new element

// we can use createElement() function

const btn = document.createElement('button');
btn.textContent = "Click here"; // text over button
btn.className = "btn1";
//btn.id = "btn1";

const division = document.querySelector("div");
division.appendChild(btn);

//for removing the element

//document.querySelector("h3").remove();

// events

const p = document.querySelector('p');
p.addEventListener('click',clickPara)// dont pass 
// clickPara() like this
// because it will get called it will not 
// wait for the click


function clickPara(){
    console.log("Para Clicked");
}

// with parameter
// p.addEventListener('click',function(){
//     clickPara('Hello');
// })

// function clickPara(name){
//     console.log(name + "Para Clicked");
// }

// more on events

btn.addEventListener("click",()=>{
    document.querySelector("h3").remove();
})

// mouseover event
// mouse down
// mouse up
// click event
// keydown

p.addEventListener('mouseover',()=>{
    p.style.backgroundColor = 'yellow';
})


p.addEventListener('mousedown',()=>{
    p.style.backgroundColor = 'red';
})


p.addEventListener('mouseup',()=>{
    p.style.backgroundColor = '';
})

document.body.addEventListener("keydown",(event)=>{
    console.log("keypressed");
    console.log(event.type);
    console.log(event.key);
    console.log(event.keyCode);
})