// procedure-1
//create object using object literals/* aita important krtey hbe****************************** */
const player={};
player.name='shovan';/* boject property */
player.specilality='right-hand-batsman';
player.bat=function(){ /* object method */
    console.log('hard hitter');
}
// console.log(player);
// player.bat();

// procedure-2
const man={
    name: 'abul',
    age: 32,
    eat: 'biri',
    job:  function(){
        'ganajar dillar'
    }
}
// console.log(man);

// procedure-3
const women=new Object();
// console.log(women);

// procedure-4
// const person=Object.create(null);
// console.log(person)

const person=Object.create(man);
/* object.create prototype chain create kore...jar jonno onno kono
object call korleo nije faka object thake...pore inheritance kore
property niye ase parent theke*/
// console.log(person);  /* person console krle empty array dekhabe */
// console.log(person.name);  /*kinto akhn man object ar nam dekhabe */


// procedure-5
/* aita important aita kortey hbe********* */
class Elder{
    name = 'boira';
    address = 'pakulla';
    constructor(age){
        this.age=age;
    }
}
const oldestMan=new Elder(78);
// console.log(oldestMan);

// procedure-6
function Car(model,price){
    this.model=model;
    this.price=price;
}
const BMW=new Car('kobra',200000300);
console.log(BMW);