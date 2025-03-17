# JavaScript Object
## Exercises

### 1. Adding New Properties to an Object
**Task:**
- Create an object `book` with properties `title` and `author`
- Add a new property `yearPublished` to the book object
- Log the updated object to the console

### 2. Deleting Properties from an Object
**Task:**
- Create an object `student` with properties: name, age, grade, and school
- Delete the school property from the student object
- Log the updated object to confirm the deletion

### 3. Nested Objects
**Task:**
- Create an object `person` with the following structure:
```javascript
let person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA"
  }
};
```
- Access and log the city value inside the nested address object

### 4. Property Default Values
**Task:**
- Create an object `user` with properties `username` and `status` (set to "active" by default)
- Log the object

### 5. Adding a Property to an Object
**Task:**
- Create an object `phone` with properties `brand` and `model`
- Add a new property `price`
- Log the updated object

### 6. Adding a Property to a Constructor Function
**Task:**
- Use the Laptop constructor
- Add a new property `RAM` to the constructor
- Create new Laptop objects with RAM values

**Example:**
```javascript
function Laptop(brand, model, processor, RAM) {
  this.brand = brand;
  this.model = model;
  this.processor = processor;
  this.RAM = RAM;
}

let laptop1 = new Laptop("Dell", "XPS 15", "Intel i7", "16GB");
console.log(laptop1);
```

### 7. Constructor Function Methods
**Task:**
- Modify the Laptop constructor by adding a method `getSpecs()` that returns a formatted string of its properties

**Example:**
```javascript
function Laptop(brand, model, processor, RAM) {
  this.brand = brand;
  this.model = model;
  this.processor = processor;
  this.RAM = RAM;
  this.getSpecs = function() {
    return `${this.brand} ${this.model} with ${this.processor} processor and ${this.RAM} RAM`;
  };
}

let laptop1 = new Laptop("Apple", "MacBook Air", "M2", "8GB");
console.log(laptop1.getSpecs());
```

### 8. Adding a Method to an Object
**Task:**
- Create an object `car` with properties `brand` and `model`
- Add a method `getCarInfo()` that returns "This car is a [brand] [model]."
- Log the method output

### 9. Adding a Method to a Constructor
**Task:**
- Modify the Person constructor by adding a method `introduce()` that returns "Hi, I am [name] and I am [age] years old."

**Example:**
```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function() {
    return `Hi, I am ${this.name} and I am ${this.age} years old.`;
  };
}

let person1 = new Person("Alice", 28);
console.log(person1.introduce());
```

### 10. Displaying Object Properties by Name
**Task:**
- Create an object `laptop` with properties brand, model, and RAM
- Log each property value separately using dot notation

### 11. Displaying Object Properties Using Object.values()
**Task:**
- Create an object `movie` with properties title, director, and year
- Use Object.values() to log all property values as an array

**Example:**
```javascript
let movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010
};

console.log(Object.values(movie)); 
// Output: ["Inception", "Christopher Nolan", 2010]
```

## Submission
📅 Deadline: Tomorrow morning 14/03/2025

## Happy Coding! 🚀