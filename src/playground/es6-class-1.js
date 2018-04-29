class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old. `;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
   hasLocation(){
       return !!this.homeLocation;
   }
   getDescription(){
       let description =super.getDescription();
       
       if(this.hasLocation()){
           description += `Their loaction is ${this.homeLocation}`;
       }
   return description;
    }
}

const me = new Traveler('Rakshith', 26, 'Mysuru');
console.log(me.getDescription());

const other = new Traveler();
console.log(other.getDescription());