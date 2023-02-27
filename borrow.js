const mofiz={
    name: 'bulbuli',
    age: 21,
    money: 5000,
    department: 'science',
    sub: ['biology','physics'],
    exam: function(){
        return this.name + ' is participating in an exam';
    },
    improvement: function(subs){
        this.exam();
        return `${this.name} is sit on improvement exam for ${subs}`;
    },
    treat:function(amount,tips){
        this.money=this.money - amount-tips;
        return this.money;
    }
}
const hablu={
    money:10000,
    name: 'hablu gablu'
}
const candidate=mofiz.exam.call(hablu);/* akta object ar method onno object a use krte hle .call use korte hoy*/
//first: .call akta opay....  .call diye korle perameter gulu koma(,)diya nite hbe
// console.log(candidate);
const remainingMoney=mofiz.treat.call(hablu,1200,100);
console.log(remainingMoney);
// second: way for use object method from another object[.apply]
const remainingMoney2=mofiz.treat.apply(hablu,[100,5]);
console.log(remainingMoney2);
// console.log(hablu)

// third: [.bind aita akta nijer function create kore method use korar jonno...tarpor oi function thekey perameter pass kre dite hoy]
const habluTreat=mofiz.treat.bind(hablu);
const remainingMoney3=habluTreat(300,5);
console.log(remainingMoney3);