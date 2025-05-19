// Nested Loops

// let num = 4;

for(let num=2;num<=10;num++){
    for(let i=1;i<=10;i++){
        console.log(`${num} * ${i} = ${num * i}`);
    }
    console.log('**********');
}


for(let num=2;num<=100;num++){
    for(let i=num;i<=num;i++){
       if(i % 2 ==0){
            break;
       }else{
           console.log(i);
       }
    }
}
