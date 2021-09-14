/**
 * Symbol type
 * @link https://javascript.info/symbol
 */

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

//alert(id1); // TypeError: Cannot convert a Symbol value to a string

alert(id1.toString()); // Symbol(id)
alert(id1.description); // id

// "Hidden" properties

let user = {
  name: "John"
};

let id = Symbol("id");

user[id] = 1;

alert(user[id]);

let userForKeyTest = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in userForKeyTest) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert("Direct" + user[id]);

let userForCopyTest = {
  [id]: 123
};

let clone = Object.assign({}, userForCopyTest);

alert(clone[id]); // 123

// Global symbols

// read it again
let idAgain = Symbol.for("id");

alert(id === idAgain); // true? in this case, already defined several symbols with the named "id", so it returns false

/**
 * Symbol.keyFor
 * 
 */
// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert(Symbol.keyFor(sym));
alert(Symbol.keyFor(sym2));
