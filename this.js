const mofiz={
    name: 'bulbuli',
    age: 21,
    money: 5000,
    department: 'science',
    sub: ['biology','physics'],
    exam: function(){
        console.log(this);
        return this.name + ' is participating in an exam';
    },
    salaryArrow:()=>{
        console.log(this);
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
mofiz.exam();/* . ar age kono object thakle sheita hbe holo execution context ...r jdi kono object na thake orthat faka thake tahole hbe window context */


const hablu={
    money:10000,
    name: 'hablu gablu'
}
hablu.exam=mofiz.exam;
hablu.exam();

mofiz.salaryArrow();


function clickHandler(){
    console.log('inside click handler function',this);
}

document.getElementById('btn').addEventListener('click',function(){
    console.log(this);
})

