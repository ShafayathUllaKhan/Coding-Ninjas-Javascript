const divEle = document.querySelector('.card-container');

//XmlHttpRequest
//AJAX (Aynsc javascript xml)

// XmlHttpRequest -- callbacks
// in es6 promises where introduced to solve call back hell 
// promise -- fetch
  


function getDetials(id){
    const req = new XMLHttpRequest();//// req is a object of XMLHttpRequest
  req.open('GET', `https://dummyjson.com/users/${id}`);
  req.send();

  req.addEventListener('load', function () {
    if(req.status === 404) return;
    // console.log(req.responseText);// you will get data
    // console.log(typeof req.responseText); // string
    // console.log(JSON.parse(this.responseText));
    // console.log(typeof JSON.parse(this.responseText));

    const data = JSON.parse(this.responseText);

    displayUser(data,'beforeend');

    const req2 = new XMLHttpRequest();//// req is a object of XMLHttpRequest
  req2.open('GET', `https://dummyjson.com/users/${id-1}`);
  req2.send();

  req2.addEventListener('load', function () {
    // console.log(req.responseText);// you will get data
    // console.log(typeof req.responseText); // string
    // console.log(JSON.parse(this.responseText));
    // console.log(typeof JSON.parse(this.responseText));

    if(req2.status === 404) return;
    const data = JSON.parse(this.responseText);

    displayUser(data,'afterbegin','other');

    const req3 = new XMLHttpRequest();//// req is a object of XMLHttpRequest
  req3.open('GET', `https://dummyjson.com/users/${id+1}`);
  req3.send();
  req3.addEventListener('load',function (){
    if(req3.status === 404) return;
    const data = JSON.parse(this.responseText);

    displayUser(data,'beforeend','other');
  })

  });
  

  });

  }

  function displayUser(data,position,className = ''){
    const card = `<div class="user-card ${className}">
      <img src=${data.image} alt="Profile Image" />
      <h3>${data.firstName}</h3>
      <h3>${data.lastName}</h3>
      <p class="email">${data.email}</p>
      <button class="btn">View Profile</button>
      </div>`;

      //divEle.innerHTML = card;
      //afterbegin -- first position
      // before end -- last position
      divEle.insertAdjacentHTML(position,card);
      //note cards are not displaying on order
      // because server time can varie so to solve this problem 
      // we use call back
  }

getDetials(4);


