const sayHello = name => console.log('Hola ' + name);
sayHello('Eugenia');

/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */

const calculateSquareArea = side =>
  console.log('El área del cuadrado es de ' + side * side);
calculateSquareArea(4);

/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */

const calculateTriangleArea = (base, height) =>
  console.log('El área del triángulo es de ' + (base * height) / 2);
calculateTriangleArea(2, 4);

/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */

const calculateCircleArea = radius =>
  console.log('El área del círculo es de ' + 2 * 3.14 * radius);
calculateCircleArea(8);

/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */

const celsiusToFahrenheit = celsius =>
  console.log('ºF= ' + (celsius * 1.8 + 32) + 'ºC');
celsiusToFahrenheit(10);

/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */

const fahrenheitToCelsius = fahrenheit =>
  console.log('ºC= ' + (fahrenheit - 32) / 1.8 + 'ºF');
fahrenheitToCelsius(150);

/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */

const totalPrice = price =>
  console.log('El precio total es de ' + (price + price * 0.21));
totalPrice(10);

/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */

const writeMessage = (name, material, size, note) =>
  console.log(
    name + ' ha pedido una caja de ' + material + ' de tamaño ' + size + note
  );
writeMessage(
  'Eugenia',
  'fresas',
  'mediano.',
  ' La quiere para el miércoles, gracias.'
);

/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */

const getAverage = (a, b, c) => (a + b + c) / 3;
const average = getAverage(6, 8, 15);
console.log('La media es ' + average);

/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */

const getDiscount = (price, discount) => price - price * (discount / 100);
const discount = getDiscount(10, 25);
console.log(
  'El precio final con el descuento incluido es de ' + discount + '€'
);

/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */

const getString = (word1, word2) => word1 + '-' + word2;
const string = getString('lava', 'platos');
console.log('La palabra unida es ' + string);

/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */

const getMeters = kilometers => kilometers * 1000;
const meters = getMeters(10);
console.log('La distancia en metros es de ' + meters);

/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */

const getSeconds = hours => hours * 3600;
const seconds = getSeconds(1);
console.log('Esto son horas pasados a segundos ' + seconds);

/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */
/* --------------------------- */

const getVelocity = velocity => {
  const meters = getMeters(velocity);
  const seconds = getSeconds(1);
  return meters / seconds;
};
const velocity = getVelocity(120);
console.log('Esto sería pasado a m/s ' + velocity);
