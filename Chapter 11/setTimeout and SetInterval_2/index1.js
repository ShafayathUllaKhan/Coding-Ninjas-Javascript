const btn = document.createElement('button');
const para = document.createElement('p');
const para1 = document.createElement('p');

btn.textContent = 'Click here';
document.body.appendChild(btn);
document.body.appendChild(para);
document.body.appendChild(para1);

btn.addEventListener('click',()=>{
    para.textContent = 'Button is pressed';
    setTimeout(()=>{ // async api
         para.textContent = '';
    },2000);
})

// settime interval
let seconds = 0;
const timer = setInterval(()=>{
    seconds=seconds+1;
    para1.textContent = seconds;// very important point never
    // do any operation inside html tag like
    //  para1.textContent
    // i+1
    if(seconds >=5){
        clearInterval(timer);
    }
},2000)

