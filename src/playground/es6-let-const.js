var nameVar = 'andrew';
var nameVar = 'mike';
console.log('nameVar',nameVar);


let nameLet = 'jan';
nameLet = 'juile';
console.log('nameLet',nameLet);

const nameConst = 'Frank';

console.log('nameConst',nameConst);


//Block scoping

const fullName = 'sandeep reddy';
let  firstName;
if(fullName){
     firstName = fullName.split(' ')[0];
    console.log(firstName)
}
console.log(firstName)