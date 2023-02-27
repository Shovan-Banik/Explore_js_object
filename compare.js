// const first={a:5}
// const second={a:5}
// if(first===second){
//     console.log('same');
// }
// else{  /*dekhte same hoileo aikhane diffrent dekhabe karon object tar refference keo dhore rakhe orthat same refference same na hle alada dekhabe */
//     console.log('different')
// }


// const first={a:5}
// const second={a:5}
// const third=second;
// if(third===second){
//     console.log('same');
// }
// else{  /*aikhane same dekhabe karon object tar refference keo dhore rakhe orthat same refference same na hle alada dekhabe..r aikhane jheto second ar man key third a asign krteci tai third r second ar refference same..tai same dekhacce...r obossoi value..o same hte hbe */
//     console.log('different')
// }




// do not use this method to compare object or array

// const first={a:5};
// const second={a:5};
// const firstString=JSON.stringify(first);
// const secondString=JSON.stringify(second);
// if(firstString===secondString){
//     console.log('same')
// }else{
//     console.log('different');
// }

// aita te string a convert kore then compare kora hy tai same dekhay...kinto jdi property samne pichone kora hy tahole string chng hye jay..tkhn differnt dekhay...tai aita use kra jbe na. 


const first={a:5,b:7,c:9};
const second={a:5,b:7,c:9};
function compareObject(first,second){
const firstKeys=Object.keys(first);
const secondKeys=Object.keys(second);
if(firstKeys.length===secondKeys.length){
    for(const key of firstKeys){
        if(first[key] !==second[key]){
            return false;
        }
    }
    return true;
    
}
}
const result=compareObject(first,second);
console.log(result);