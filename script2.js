class Person {
    constructor(firstName, lastName, age, address) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.address = address;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  
    getAddress() {
      return this.address;
    }
  
    setAddress(newAddress) {
      this.address = newAddress;
    }
  }
  
  const a = new Person('Arokia', 'Samy', '25', 'Puducherry');
  console.log(a);