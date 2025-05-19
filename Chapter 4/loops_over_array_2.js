// loop over array

const students = [
    'Tina',
    'Raj',
    'Bobby',
    'Seema'
];


// for loop


// for .. in loop
for(let i in students){
    console.log(`Roll No ${i + 1}: ${students[i]}`);
    // Roll No 01: Tina
    // Roll No 11: Raj
    // Roll No 21: Bobby
    //Roll No 31: Seema
    // this result is because the i is a string
    // in javascript string can be index value 
    // then string will be coerc to number
    console.log(`Roll No ${Number(i) + 1}: ${students[i]}`);
    // Roll No 1: Tina
    // Roll No 2: Raj
    // Roll No 3: Bobby
    // Roll No 4: Seema
}


// for .. of loop
for(let student of students){
    console.log(student);
    // Tina
    // Raj
    // Bobby
    // Seema
}

// Rest and Spread Operator
// Rest came from es6
const aprilBatch = ['Tina', 'Madhur'];
const mayBatch = ['Ritik','Deepak','Shalini'];
const juneBatch = ['Saba', 'Shivani'];
const julyBatch = [];

function addStudent(batch, student){

    batch.push(student);
    console.log(batch);
}
addStudent(aprilBatch,'Ritu');
addStudent(mayBatch,'Sunny');

// Rest ...

function addStudentrest(batch, ...student){
    for(let i of student){
        batch.push(i);
    }
    console.log(batch);
}

addStudentrest(aprilBatch,"sunny","Ritu","Sheena");


// Spread ...
// Expand / copying
const newBatch = mayBatch;
console.log(newBatch);//(4) ['Ritik', 'Deepak', 'Shalini', 'Sunny']

mayBatch.push('newStudent');
console.log(mayBatch);// (5) ['Ritik', 'Deepak', 'Shalini', 'Sunny', 'newStudent']
console.log(newBatch);//(5) ['Ritik', 'Deepak', 'Shalini', 'Sunny', 'newStudent']


const newBatchspread = [...mayBatch];
console.log(newBatchspread);//(4) ['Ritik', 'Deepak', 'Shalini', 'Sunny']

mayBatch.push('newStudent');
console.log(mayBatch);// (5) ['Ritik', 'Deepak', 'Shalini', 'Sunny', 'newStudent']
console.log(newBatchspread);//(5) ['Ritik', 'Deepak', 'Shalini', 'Sunny']

// Spread gives shallow copy and changes in orginal 
// array will not reflect the copied array

// concatenate

const mergeBatch = [...mayBatch, ...juneBatch];
console.log(mergeBatch);

const mergeBatch1 = [...mayBatch];
console.log(mergeBatch1);