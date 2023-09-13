let name1 = {
  firstName: "John",
  lastName: "Doe",
};

let name2 = {
  firstName: "James",
  lastName: "Bond",
};

let getFullName = function (hometown) {
  console.log(this.firstName + " " + this.lastName + " from " + hometown);
};

getFullName.call(name1, "Delhi");
getFullName.apply(name2, ["Punjab"]);

let printFullName = getFullName.bind(name1, "Delhi");
printFullName();
