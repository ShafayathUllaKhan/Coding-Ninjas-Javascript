export let obj = {pname:'Mobile',price:10};// this named export

export function add(i,j){
    return i +j;
}

export let a= 20;
export let b=30;


export {obj,add};// this way is also possible

// default export can only be one

export default a;