// this is callback hell or pramid  of doom
// thats why we have promise and fetch is a promise based api
// and was introduced in es6


function print(){
    setTimeout(()=>{
    console.log('welcome');
    setTimeout(()=>{
        console.log('to');
        setTimeout(()=>{
            console.log('javascript');
            setTimeout(()=>{
                console.log('Shafayath ulla');
                setTimeout(()=>{
                    console.log('Khan');
                },1000)
            },1000)
        },1000)
    },1000);
},1000);
}

print();