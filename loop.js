// for of loop object a kaj kore na **********

const balish={color:'red', ingredients:'tula',price:700,isSoft:true}
// for(let key of balish){
//     console.log(key);   /* aita kaj krbe na */
// }
const keys=Object.keys(balish);
// console.log(keys);

// amra 3 vabe object ar properties read krte pari
// 1. balish.color ...dot notation[jkhn object ar name jana thakbe tkhn use krbo]
// 2. balish['color'].....[jkhn object ar name jana thakbe tkhn use krbo]
// 3. balish[key].....array notation[jkhn object ar key jana na thake tkhn use krbo]

// for of loop aita[for of krbo array ar opor]
for(let key of keys){
    // console.log(key,balish[key]);
}

// for in loop aita[for of ar motoi just in likhte hy][for in object ar opor krbo]
for(const key in balish){
    // console.log(key,balish[key]);
}

// advance version[pair pai j array of array akare oita niye krte hbe mane object.entries use kre]
const pair=Object.entries(balish);/* aikahne akta array pai tai for of loop use krci */
// console.log(pair);
for(const [key,value] of Object.entries(balish)){ /* aikhane array destructuring korci tarpor for of marci */
    console.log(key,value);
}



