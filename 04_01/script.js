/**
 * Objects
 */

/** 
 * Task 1: Write the code, one line for each action:
 *  1. Create an empty object user
 *  2. Add the property name with the value John
 *  3. Add the property surname with the value Smith
 *  4. Change the value of the name to Pete
 *  5. Remove the property name from the object
 * 
 */

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

/** 
 * Task 2: Check for emptiness
 *  Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
 * 
 */
// function isEmpty( schedule ) {
let isEmpty = schedule => {
  for (let key in schedule) {
    return false;
  }
  return true;
}

let schedule = {};
alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

/**
 * Task 3: Sum object properties
 *  Write the code to sum all salaries and store in the variable sum. Should be 390 in the example below.
 *  If salaries is empty, then the result must be 0.
 *
 */
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = obj => {
  let total = 0;
  for (let key in obj) {
    total += +obj[key];
  }
  return total;
}

alert(sum(salaries));

/**
 * Task 4: Multiply numeric property values by 2
 *  Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
 * 
 */
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof (obj[key]) == 'number') {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
console.log(menu);
