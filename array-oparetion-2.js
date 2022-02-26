// slice koto number index thekey koto number index projonto
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersSlice = numbers.slice(1, 7);
console.log(numbersSlice);

// splice kotonumber soho koita index delete korte chai r 3 ta parametar nile 3 number parameter thekey ja ja deleter poriborte add korte chai sheigula add kora jabe
const bikes = [
  "pulsar ns160",
  "suzuki rs150",
  "yamaha mt150",
  "yamaha r15",
  "honda cbr150",
  "honda repjol",
];

const bikesSplice = bikes.splice(3, 2, "kawasaki", "royal enfield", "bmw1000");
console.log(bikesSplice);
console.log(bikes);
