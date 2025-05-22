const divEle = document.querySelector('.card-container');

// function getDetials(id){
//     const request = fetch(`https://dummyjson.com/users/${id}`);
//    // console.log(request);// in these request you will get a object and in 
//     // promise result you will get response and that is object'
//     // and inside that ok property defines the url is 
//     // correct then true or if url is not correct 
//     // then false
//     console.log(request);
//     const response = request.then((response)=>{
//         //console.log(response);// Response {type: 'cors', url: 'https://dummyjson.com/users/4', redirected: false, status: 200, ok: true, …}
//         return response.json();// response send kind of promise and json function is asyn so it returns a promise so you have to save in some other variable

    
//     });

//     response.then((user)=>{
//         console.log(user);
//     })
// }


// this way is also possible

function getDetials(id){
    fetch(`https://dummyjson.com/users/${id}`)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Id does not match any data');
        }// throw will get catch by catch function
        return response.json();
    }).then((user)=>{
        console.log(user); // if user is not found the this line will give
        // {message: "User with id '0' not found"} you will not get catch err 
    })
    .catch((err)=>{
        console.error(err);// log normal error and error will give red error
    })  
}

getDetials(0);