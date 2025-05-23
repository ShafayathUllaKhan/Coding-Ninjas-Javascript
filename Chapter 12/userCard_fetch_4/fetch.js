const divEle = document.querySelector('.card-container');


// async await this make code more modular
// await is functionality which help us asyncronous oprations 
// that is promise based operation


async function getDetials(id){
    try{
         const response = await fetch(`https://dummyjson.com/users/${id}`);
            // await is similar to .then()
            if(!response.ok)  throw new Error("No Data present");
        const userdata = await response.json();
        displayUser(userdata,"beforeend"); 
    }catch(err){
        console.error(err);
    }
  
}


  function displayUser(data,position,className = ''){
    const card = `<div class="user-card ${className}">
      <img src=${data.image} alt="Profile Image" />
      <h3>${data.firstName}</h3>
      <h3>${data.lastName}</h3>
      <p class="email">${data.email}</p>
      <button class="btn">View Profile</button>
      </div>`;
      divEle.insertAdjacentHTML(position,card);
  }



getDetials(0);









// with function code

// function getUser(url){
//     return  fetch(url)
//     .then((response)=>{
      
//         if(!response.ok){
//             throw new Error('Id does not match any data');
//         }
       
//         return response.json();
//     })
// }

// function getDetials(id){
//     getUser(`https://dummyjson.com/users/${id}`)
//     .then((user)=>{
     
//         displayUser(user,'beforeend');
//         return getUser(`https://dummyjson.com/users/${id-1}`)      
//     })
//     .then((user)=>{
//         displayUser(user,'afterbegin','other'); 
//          return getUser(`https://dummyjson.com/users/${id+1}`)   
//     })
//     .then((user)=>{
//         displayUser(user,'beforeend','other');
        
//     })
//     .catch((err)=>{
//         console.error(err);
//     })
// }


//   function displayUser(data,position,className = ''){
//     const card = `<div class="user-card ${className}">
//       <img src=${data.image} alt="Profile Image" />
//       <h3>${data.firstName}</h3>
//       <h3>${data.lastName}</h3>
//       <p class="email">${data.email}</p>
//       <button class="btn">View Profile</button>
//       </div>`;
//       divEle.insertAdjacentHTML(position,card);
//   }



// getDetials(2);


// with out function code

// const divEle = document.querySelector('.card-container');


// function getDetials(id){
//     fetch(`https://dummyjson.com/users/${id}`)
//     .then((response)=>{
      
//         if(!response.ok){
//             throw new Error('Id does not match any data');
//         }
       
//         return response.json();
//     }).then((user)=>{
     
//         displayUser(user,'beforeend');
//         return fetch(`https://dummyjson.com/users/${id - 1}`)        
//     })
//     .then((response)=>{
//         if(!response.ok){
//             throw new Error('No previous id exist');
//         }
//         return response.json();
//     }).then((user)=>{
//         displayUser(user,'afterbegin','other');
//         return fetch(`https://dummyjson.com/users/${id + 1}`) 
//     })
//     .then((response)=>{
//         if(!response.ok){
//             throw new Error('No previous id exist');
//         }
//         return response.json();
//     }).then((user)=>{
//         displayUser(user,'beforeend','other');
        
//     })
//     .catch((err)=>{
//         console.error(err);
//     })
// }


//   function displayUser(data,position,className = ''){
//     const card = `<div class="user-card ${className}">
//       <img src=${data.image} alt="Profile Image" />
//       <h3>${data.firstName}</h3>
//       <h3>${data.lastName}</h3>
//       <p class="email">${data.email}</p>
//       <button class="btn">View Profile</button>
//       </div>`;
//       divEle.insertAdjacentHTML(position,card);
//   }



// getDetials(2);


// event loop learn from jsv9000.app