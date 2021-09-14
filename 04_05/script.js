/**
 * Constructor, operator "new"
 * @link https://javascript.info/constructor-new
 */

/** 
 * Task 1: Two functions - one object
 * 
 * Is it possible to create function A and B so that new A() == new B()?
 */

let obj = {};

function A() {
  return obj;
}

function B() {
  return obj;
}

let a = new A;
let b = new B;

alert(a == b);

/**
 * Task 2: Create new Calculator
 * 
 * Create a constructor function Calculator that creates objects with 3 methods;
 * - read() ask for two values using prompt and remembers them in object properties
 * - sum()  returns the sum of these properties
 * - mul()  returns the multiplication product of these properties
 */

function Calculator() {
  return {
    read() {
      this.a = +prompt("a=?", 0);
      this.b = +prompt("b=?", 0);
    },
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    }
  }
}

let calculator = new Calculator();
calculator.read();
alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

/**
 * Task 3: Create new Accumulator
 * 
 * Create a constructor function Accumulator(startingValue).
 * 
 * Object that it creates should
 * - Store the "current value" i the property value. The starting value is set to the argument of
 *   the constructor startingValue.
 * - The read() method should use prompt to read a new number and add it to value.
 * 
 * In other words, the value property is the sum of all user-entered values with the initial value startingValue.
 * 
 */
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = () => {
    this.value += +prompt("How much to add?", 0);
  }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value);