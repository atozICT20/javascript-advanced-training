/**
 * Object to primitive conversion
 * @link https://javascript.info/object-toprimitive
 */

/**
 * Conversion rules
 *
 * There are three variants of type conversion, that happen in various situations.
 * - "string"
 * - "number"
 * - "default"
 *
 * To do conversion, JavaScript tries to find and call three object methods:
 * 1. Call obj[Symbol.toPrimitive](hint)
 * 2. Otherwise if hint is "string"
 *      try obj.toString() and obj.valueOf(), whatever exists.
 * 3. Otherwise if hint is "number"
 *      try obj.valueOf() and obj.toString(), whatever exists.
 */

// Symbol.toPrimitive
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money
  }
};

alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

/**
 * toString / valueOf
 */
// By default, a plain object has following methods
// - toString : returns a string "[object Object]"
// - valueOf  : retuns the object itself
let user2 = { name: "John" };

alert(user2); // [object Object]
alert(user2.valueOf() === user2); // true

// Customize
let user3 = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number"
  valueOf() {
    return this.money;
  }
};

alert(user3); // toString
alert(+user3); // valueOf
alert(user3 + 500); // valueOf