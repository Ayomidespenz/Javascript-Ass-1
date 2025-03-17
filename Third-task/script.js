const person = {
    name: "Quadri Yusuff",
    age: 18,
    height: 4.0,
    occupation: "Web2/3 developer",
    country: "Saudi Arabian",
    gender: "male",
  };
  console.log(person)
  console.log( person.name )
  console.log( person.age ) 
  console.log( person.height )
  console.log( person["country"])
  console.log( person["occupation"])
  console.log( person["gender"])
  console.log( person.hobby ="Reading")
  
  person.newAge = function() {
    return person.age + 1;
  }
  console.log(person.newAge());

  person.newHeight = function() {
    return person.height + 1;
  }
  console.log(person.newHeight());


 person.newOccupation = "Software engineer";
  console.log(person.newOccupation);

  delete person.country;
  console.log( person)

  delete person.gender;
  console.log( person)

  person.greet = function () {
    return (  "Hello, my name is Quadri Yusuff" + "." + "I am 18 years old. ")
  };
   
  console.log(person.greet());

  person.this = function () {
    return (this.name + " " + this.age)
  };
  console.log(person.this ());

  function Car(year, brand, model) {
    this.year = year;
    this.brand= brand;
    this.model = model;
  }

  const Cars = new Car(2023, "Toyota", "camry");
  const Carr = new Car(2024, "Toyota", "venza");

  console.log(Cars);
  console.log(Carr);

  Cars.getCarInfo = function(){
    return(this.year + " "+ this.brand + " "+ this.model);
  }
  console.log(Cars.getCarInfo());
  
  Carr.getCarInfo = function(){
    return(this.year + " "+ this.brand + " "+ this.model);
  }
  console.log(Carr.getCarInfo());
  
  
  
  
  
  
  