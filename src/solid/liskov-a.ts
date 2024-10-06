import { Tesla, Audi, Toyota, Honda, Vehicle } from './liskov-b';


(() => {
    
    const printCarSeats = ( cars: Vehicle[] ) => {
        cars.forEach( car => {
            console.log( `This car: ${car.constructor.name} has ${car.getNumberOfSeats()} seats` );
        });
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
    ];


    printCarSeats( cars );

})();