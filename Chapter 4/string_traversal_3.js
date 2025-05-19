// String Traversal

let str = "JavaScript is an amazing language.";
let count = 0;
for(let i =0;i<str.length;i++){
    if(str.charAt(i) == 'a'){
        count += 1;
    }
    console.log(str.charAt(i));
}
console.log(count);

// Methods in String

let str1 = 'JavaScript is a Dynamically typed language.';

// includes()
console.log(str1.includes('is')); // true

// replace()
console.log(str1.replace('is', 'was'));// first occurance 
// will be changed and it is giving you the copy



// replaceAll()
console.log(str1.replace('is', 'was'));


// trim()
console.log(str1.trim());// takes the space of leading and trailing space 

// substring()
console.log(str1.substring(3,10));// aScript and 10 will not be added
console.log(str1.substring(-4,12));// -4 will be
//  converted to zero and any negative value will be 
// considered 0

console.log(str1.substring(-4,-12));// no result because both are 0


// slice()
console.log(str1.slice(3));
console.log(str1.slice(-5,-1));//uage
// slice and substring are same but the difference is the negative values
// -3 will give you last 3 characters


// split()

let words = str1.split(" ");// space is the condition 
// to divide the words it can be anything , 
// or any punctuation 
console.log(words);


// Objects
// by default key are string
const student = {
    name: "Alexa",
    age: 10,
    hobby: "Dancing",
    100: "hundered",
    show: function(){
        console.log("This is the student details section");
    }
}

console.log(student);
console.log(student.name);// Alexa
console.log(student["name"]);// Alexa
console.log(student[100]); // hundered
student.show();