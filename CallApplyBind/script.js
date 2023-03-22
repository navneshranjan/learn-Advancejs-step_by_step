// /////CALL/////////

let userData = {
  firstName: "Navnesh",
  lastName: "Ranjan",
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};
userData.fullName();

// we want to call full name for other object

let data = {
  firstName: "kumar",
  lastName: "Ranjan",
};
userData.fullName.call(data);

// generally we define a function outside of an object

const printFullName = function (dist, state) {
  console.log(this.firstName + " " + this.lastName + " " + dist, state);
};

printFullName.call(data, "hzb", "jh");

// APPLY////
// it will take argument in an array
printFullName.apply(name, ["patna", "Bihar"]);

/// BNID////
// bind will return a function that is it will bu=ind with the fiunction
let printMyName = printFullName.bind(data, "blor", "karnataka");
console.log(printMyName);
printMyName();
