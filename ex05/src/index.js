// Only change code below this line
function myPetsFunction(pets) {
  return pets.name;
}

// var cat = { name: 'Moo', age: 5, };

var myPetsArray = [
  {
      animalType: "Dog",
      name: "Pujdo",
  },
  {
      animalType: "Cat",
      name: "Maca",
  },
  {
      animalType: "Bird",
      name: "Tweety",
}
];
// Only change code above this line
console.log(myPetsFunction(myPetsArray[1])); // Change this line
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;