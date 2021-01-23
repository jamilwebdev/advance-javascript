const normalPerson ={
    firstName: 'rahim',
    lastName: 'korim',
    salary: '15000',
    getFullName : function(){
        console.log(this.firstName,this.lastName);
    },
    changeBill: function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}
const hero={
    firstName: 'hero',
    secondName :'Balam',
    salary :2500,
}

normalPerson.changeBill.call(hero,500);
console.log(hero.salary);

//const heroChargeBill = normalPerson.chargeBill.bind(hero);
//heroChargeBill(2000);
//normalPerson.changeBill(150);
//normalPerson.changeBill(1550);
//console.log(normalPerson.salary);
//console.log(normalPerson.firstName);