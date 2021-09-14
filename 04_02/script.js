/**
 * Object methods, "this"
 */

/** 
 * Task 1: Using "this" in object literal
 * 
 */

function makeUser() {
  return {
    name: "John",
    ref: this
  }
}

let user = makeUser();

alert(user.ref.name); // Error: Cannot read property 'name' of undefined

function makeUserAlternative() {
  return {
    name: "John",
    ref() {
      return this;
    }
  }
}

user = makeUserAlternative();

alert(user.ref().name); // John

/** 
 * Task 2: Create a calculator
 *  Create an object calculator with three methods:
 *   read() - prompts for two values and saves them as object properties.
 *   sum()  - returns the sum of saved values.
 *   mul()  - multiplies saved values and returns the result.
 */

let calculator = {
  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


/**
 * Task 3: Chaining
 * 
*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
  }
};

ladder.up().up().down().showStep();

