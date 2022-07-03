const findTheOldest = function(people) {
    return people.reduce((prev, curr) => {
        return getAge(curr) > getAge(prev) ? curr : prev
      })
};


  function getAge(person){
    if (!person?.yearOfDeath){
        return new Date().getFullYear() - person.yearOfBirth
    }
    return person.yearOfDeath - person.yearOfBirth
  }
// Do not edit below this line
module.exports = findTheOldest;
