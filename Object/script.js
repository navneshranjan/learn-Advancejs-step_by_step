//1-- we can ue pre define key as a object key
// let key="address"
let key = "address";

//2-- short hand property
// we can just give the key name without giving the data
let phone = 1212121;

const data = {
  name: "navnesh",
  getAge: function () {
    return this.age;
  },
  ["home town"]: "Hazaribag",
  [key]: "malviya marg",
  phone,
};
// 3--we are calling age in getAfge() which is in object data and we are defining the age after the object but still we can access the age because of Hoisting
data.age = 28;

// 4--Square Bracet
// we can give property with space eg-pin code
// we can alse add prop in same way in object with []
data["pin code"] = 825301;

console.log(data["pin code"]);
console.log(data["home town"]);
console.log(data.address);
console.log(data.phone);

//5-- check the property exist in object or not
console.log("state" in data);
console.log("phone" in data);

// 6-- Loop through the object
for (item in data) {
  console.log(item);
  console.log(data[item]);
  console.log(`key is :${item} value is: ${data[item]}`);
}

// 7-- sum of value
const emp = {
  a: 100,
  b: 200,
  c: 700,
};
let sum = 0;
for (item in emp) {
  sum += emp[item];
}
console.log(sum);

//8--Create a function which multiply all numeric value of object be 2

const nums = {
  a: 100,
  b: 200,
  name: "navnesh",
};

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}
multiplyByTwo(nums);
console.log(nums);

// 9--what will be the output of the given object
const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 456;
console.log(a[b]);

// because a[b] is treated as a["[object object]"] and a[c] is also treated as a["[object object]"] so it will overlap the value result will be 456

// 10-- what is JSON.stringify and JSON.parse
const user = {
  name: "navnesh",
  age: 28,
};

// 10--to convert object to string we use JSON.stringify
let objString = JSON.stringify(user);
console.log(objString);
// to convert back string object to normal object we use  JSON.parse
console.log(JSON.parse(objString));

// 11--spread operator
const food = {
  veg: "paneer",
  nonveg: "egg",
};
const resturent = {
  name: "Blue Fox",
  ...food,
};
console.log(resturent);

// 12--we can spread over array strin
console.log([..."navnesh"]);
console.log({ ..."nav" });

// 13-- how to stringify particular data of an object
// we just want to stringify a and b and c
const setting = {
  a: 2,
  b: 9,
  c: 29,
  condition: "good",
};
const stringParticularData = JSON.stringify(setting, ["a", "b", "c"]);
console.log(stringParticularData);
