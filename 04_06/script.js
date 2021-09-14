/**
 * Optional chaining '?.'
 * @link https://javascript.info/optional-chaining
 */

/**
 * The "non-existing property" problem
 * 
 */

let user = {}; // a user without "address" property

// alert(user.address.street); // Error!

// Using conditional operator ?
alert(user.address ? user.address.street : undefined); // undefined

// Using the && operator
alert(user.address && user.address.street && user.address.street.name); // undefined

/**
 * Optional chaining ?.
 * 
 * The optional chaining stops the evaluation if the value before ?. is
 * undefined or null and returns undefined
 */
alert(user?.address?.street); // undefined

// Short-circuiting
user = null;
let x = 0;

user?.sayHi(x++); // no "sayHi", so the execution doesn't reach x++

alert(x); // 0, value not incremented

// Other variants: ?.(), ?.[]

let userAdmin = {
  admin() {
    alert("I am admin");
  }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing (no such method)

let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

alert(user1?.[key]); // John
alert(user2?.[key]); // undefined


