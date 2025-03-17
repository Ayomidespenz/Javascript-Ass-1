//Task1
const book = {
title : "Things fall apart",
author : "Chinua Achebe",
};
book.yearOfPublished = 1958;
console.log(book);

//Task 2
const student = {
    name : "Ayomide",
    age : 16,
    grade : 2,
    school : "Asalam_Minaret school",
}
delete student.school;
console.log(student)
//Task3
let person = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA"
    }
  };

  console.log(person.address.city);

  //Task4
  const user = {
    username : "Quadri",
    status : "active"
  }
console.log(user)
//Task5
  const phone = {
    brand : "samsung",
    model : "S10+"
  }
  phone.price = 200;

  console.log(phone)
  

  //Task6
  function Laptop(brand, model, processor, RAM) {
    this.brand = brand;
    this.model = model;
    this.processor = processor;
    this.RAM = RAM;
  }

  
  let laptop1 = new Laptop("Dell", "XPS 15", "Intel i7", "16GB");
  laptop1.RAM= "256GB";
  console.log(laptop1);
 
  //Task7
  function Laptop(brand, model, processor, RAM) {
    this.brand = brand;
    this.model = model;
    this.processor = processor;
    this.RAM = RAM;
    this.getSpecs = function() {
      return `${this.brand} ${this.model} with ${this.processor} processor and ${this.RAM} RAM`;
    };
  }
//   let laptop1 = new Laptop("Apple", "MacBook Air", "M2", "8GB");
console.log(laptop1.getSpecs());

//Task8
const car = {
    brand : "Benz",
    model : "G-Class",
    getCarInfo : function(){
         return "This car is a " + " " + (this.brand)  + " " + (this.model);
    }
  }

  console.log(car.getCarInfo())

//Task9
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
      return `Hi, I am ${this.name} and I am ${this.age} years old.`;
    };
  }
  let person1 = new Person("Ayomide", 12);
console.log(person1.introduce());

//Task10
let laptop = {
    brand : "Dell",
    model : "Latitude",
    RAM : "16GB",
}
console.log(laptop.brand)
console.log(laptop.model)
console.log(laptop.RAM)

//Task11
let movie = {
    title: "Ogbori Elemosho",
    director: "Peter fatomilola",
    year: 2000
  };
  const myArray = Object(movie)
  console.log(Object.values(movie)); 