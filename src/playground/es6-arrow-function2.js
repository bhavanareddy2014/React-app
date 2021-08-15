// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments)
    return a + b;
};
console.log(add(55,1,100))



//this keyword -no longer bound

const user = {
    name:'bhavana',
    cities:['banglore','goa','delhi'],
    printPlacesLived () {

  return this.cities.map((city) => this.name + 'has lived in ' + city);
   
       
        // console.log(this.name);
        // console.log(this.city);
    //    const that = this;
// this.city.forEach( (city) =>  {
//             console.log(this.name + ' has lived in  ' + city);        
//         });
    }
};

console.log(user.printPlacesLived());


//challege area

const multiplier = {
    numbers:[1,2,3,4,5],
    multiplyBy : 2,
    multiply(){
        return this.numbers.map((num) =>  num*this.multiplyBy
        )

    }
};

console.log(multiplier.multiply())