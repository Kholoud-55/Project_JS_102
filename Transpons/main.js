
class Vehicle {
  constructor(name, manufacturer, id) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.id = id;
  }
}

class Car extends Vehicle {
  constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type; //car type
  }
}

class Plane extends Vehicle {
  constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type; // type of plane
  }
}

class Employee {
  constructor(name, id, dob) {
      this.name = name;
      this.id = id;
      this.dob = dob;
  }
}

class Driver extends Employee {
  constructor(name, id, dob, licenseId) {
      super(name, id, dob);
      this.licenseId = licenseId;
  }
}

class Pilot extends Employee {
  constructor(name, id, dob, licenseId) {
      super(name, id, dob);
      this.licenseId = licenseId;
  }
}

class Reservation {
  constructor(reservationDate, employeeId, vehicleId, reservationId) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationId = reservationId;
  }
}

let reservations = [];

function assignVehicle(employeeId, vehicleId) {
  let employee = employees.find(e => e.id === employeeId);
  let vehicle = vehicles.find(v => v.id === vehicleId);

  if (employee instanceof Driver && vehicle instanceof Car) {
      let reservation = new Reservation(new Date(), employeeId, vehicleId, reservations.length + 1);
      reservations.push(reservation);
  } else if (employee instanceof Pilot && vehicle instanceof Plane) {
      let reservation = new Reservation(new Date(), employeeId, vehicleId, reservations.length + 1);
      reservations.push(reservation);
  } else {
      console.log('Incompatible assignment');
  }
}


let employees = [
  new Driver('John Doe', 1, '1990-01-01', 'D123'),
  new Driver('Jane Doe', 2, '1991-01-01', 'D124'),
  new Driver('Jim Doe', 3, '1992-01-01', 'D125'),
  new Pilot('Jack Doe', 4, '1985-01-01', 'P123'),
  new Pilot('Jill Doe', 5, '1986-01-01', 'P124')
];
let vehicles = [
  new Car('Tesla Model S', 'Tesla', 1, 'electric'),
  new Car('Toyota Corolla', 'Toyota', 2, 'gas'),
  new Car('Chevrolet Bolt', 'Chevrolet', 3, 'electric'),
  new Plane('Boeing 747', 'Boeing', 4, 'jet'),
  new Plane('Cessna 172', 'Cessna', 5, 'propeller')
];

// Test method
function test() {
  assignVehicle(1, 1); 
  assignVehicle(3, 2); 
  assignVehicle(3, 3); 
  assignVehicle(4, 4); 
  assignVehicle(5, 5); 

  console.log('Reservations:');
  reservations.map(reservation => console.log(reservation));
}

test();
