class Uber {
    baseFare = 100;
    costPerMinute = 10;
    costPerKm = 200;
    
    constructor(duration, distance) {
      this.duration = duration;
      this.distance = distance;
    }
    
    calculatePrice() {
      return this.baseFare + this.duration * this.costPerMinute + this.distance * this.costPerKm;
    }
  }
  
  const myRide = new Uber(5, 1);
  console.log(myRide.calculatePrice());
  