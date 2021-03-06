
class Person {
  constructor(name = 'anonymous' ,age = 0) {
      this.name = name;
      this.age = age;
  }
  getGreeting() {
    //   return 'Hi, I am '+ this.name + '!';
   return `Hi I am ${this.name} !`  
}
getDescription() {
    return `${this.name }is ${this.age}year(s) old`;
}
}

class Student extends Person {
 constructor(name,age,major) {
     super(name,age);
     this.major = major;
 }
 hasMajor(){
     return !!this.major;
 }
 getDescription(){
    let description = super.getDescription();
    
    if(this.hasMajor()){
        description += `Their major is ${this.major}`
    }

    return description;
 }
}

class Traveller extends Person {
    constructor(name,age,location){
        super(name,age);
        this.location = location;
    }
    getLocation(){
        return !!this.location;
    }
    getGreeting(){
        let greeting = super.getGreeting();

        if(this.getLocation()){
            greeting += `I'm visiting from ${this.location}.`;
        }
        return greeting;
    }
}

const me = new Traveller('bhavana',22,'madanapalle');
console.log(me.getGreeting());


const other = new Traveller();
console.log(other.getGreeting());