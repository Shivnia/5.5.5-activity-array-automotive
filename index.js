const VehicleModule = require("./vehicleBaseClass").Vehicle
class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5
        this.passenger = 0 
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    service() {
        if (this.mileage > 30000) {
            this.schedueleService = true
            return this.scheduleService;
        } else {
            console.log('Get your Engine Checked')
        }
    }
    
    
    start() {
        if (this.fuel > 0) {
            console.log("engine started...!!!");
            return this.started = true;
        } else {
            console.log("engine cannot start...");
            return this.started = false;
            
        }
        
    }
    
    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");
    
            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }
}


let myCar = new Car('mercury', 'red_sedan', '2002', 'white', 50000)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.service()

console.log(myCar)

