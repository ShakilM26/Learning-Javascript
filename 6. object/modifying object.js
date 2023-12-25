person = {
  name : 'Walid Hossain',
  age: 26, 
  home: 'Dhaka',
  study: 'Bachelor in Computer Science',
  job_title: 'Data Engineer'
}

// add new property
person.salary = 25000;

// delete property
delete person.age;

console.log(person)

// checking property exists
console.log('education' in person)  // false
console.log('study' in person)     // true 