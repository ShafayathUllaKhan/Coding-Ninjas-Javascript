// promise constructor has two function resolve 
// and reject

// pending
// fulfilled
// rejected
const request = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log('Promise initiated');
        //resolve('Promise fullfilled');
        //resolve({firstname: 'ShafayathUlla',
        //    lastname: 'Khan'
        //})
        reject("Request has been rejected");

        
        
    },5000)
});

// then will take care of resolve if promissed is fullfilled then
// then will take care
// value is resolve message
request.then((value)=>{
    console.log(value);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{// finally will not run on pending it has to fullfiled or rejected
    console.log('request completed');
})

console.log(request);// promise state = fullfilled and // promise result = promise fulfilled

