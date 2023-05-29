function sayHello(name) {
  console.log('Hola ' + name);
}

sayHello('Eugenia');

function calculateSquareArea(side) {
  console.log('El área del cuadrado es de ' + side * side);
}

calculateSquareArea(4);

function calculateTriangleArea(base, height) {
  console.log('El área del triángulo es de ' + (base * height) / 2);
}

calculateTriangleArea(2, 4);

function calculateCircleArea(radius) {
  console.log('El área del círculo es de ' + 2 * 3.14 * radius);
}

calculateCircleArea(8);

function celsiusToFahrenheit(celsius) {
  console.log('ºF= ' + (celsius * 1.8 + 32) + 'ºC');
}

celsiusToFahrenheit(10);

function fahrenheitToCelsius(fahrenheit) {
  console.log('ºC= ' + (fahrenheit - 32) / 1.8 + 'ºF');
}

fahrenheitToCelsius(150);

function totalPrice(price) {
  console.log('El precio total es de ' + (price + price * 0.21));
}

totalPrice(10);

function writeMessage(name, material, size, note) {
  console.log(
    name + ' ha pedido una caja de ' + material + ' de tamaño ' + size + note
  );
}

writeMessage(
  'Eugenia',
  'fresas',
  'mediano.',
  ' La quiere para el miércoles, gracias.'
);

function getAverage(a, b, c) {
  return (a + b + c) / 3;
}
const average = getAverage(6, 8, 15);
console.log('La media es ' + average);

function getDiscount(price, discount) {
  return price - price * (discount / 100);
}
const discount = getDiscount(10, 25);
console.log(
  'El precio final con el descuento incluido es de ' + discount + '€'
);

function getString(word1, word2) {
  return word1 + '-' + word2;
}
const string = getString('lava', 'platos');
console.log('La palabra unida es ' + string);

function getMeters(kilometers) {
  return kilometers * 1000;
}
const meters = getMeters(10);
console.log('La distancia en metros es de ' + meters);

function getSeconds(hours) {
  return hours * 3600;
}
const seconds = getSeconds(1);
console.log('Esto son horas pasados a segundos ' + seconds);

function getVelocity(velocity) {
  const meters = getMeters(velocity);
  const seconds = getSeconds(1);
  return meters / seconds;
}
const velocity = getVelocity(120);
console.log('Esto sería pasado a m/s ' + velocity);
