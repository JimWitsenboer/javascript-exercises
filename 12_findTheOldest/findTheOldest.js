const findTheOldest = function(people) {
  const currentYear = 2023;

  let addAgeToPeople = people.map(function(individual) {
    let age;
    if (typeof individual.yearOfDeath === "undefined" || individual.yearOfDeath === null) {
      age = currentYear - individual.yearOfBirth;
      return { ...individual, age };
    } else {
      age = individual.yearOfDeath - individual.yearOfBirth;
      return { ...individual, age };
    }
  });

  addAgeToPeople.sort((a, b) => (a.age < b.age) ? 1 : -1);

  return addAgeToPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;


// {
//   name: "Carly",
//   yearOfBirth: 2018,
//   yearOfDeath: 2011,
// }
