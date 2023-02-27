const student={
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
const examiner=student.exam();
const person=student.improvement('biology');
// console.log(examiner);
// console.log(person);
const remaining=student.treat(1200,50);
console.log(remaining);
const againTreat=student.treat(700,20);
console.log(againTreat);