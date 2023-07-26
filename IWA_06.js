// CHALLENGES 1 AND 2 

//CHALENGE 1 

/*** // const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

const primaryValid = typeof number == primaryPhone 
const secondaryValid = typeof number == secondaryPhone

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid ) ***/

//SOLUTION 

const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

const primaryValid = typeof primaryPhone === 'string' && !isNaN(primaryPhone);
const secondaryValid = typeof secondaryPhone === 'string' && !isNaN(secondaryPhone);

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid);


// CHALLENGE 2

/*** const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if hourOfDay && (minuteOfDay !== null) && (hourOfDay == '00') && (minuteOfDay == '00') {
	const taxAsDecimal = tax / '100'
  const startingAfterTax = salary * '1' - taxAsDecimal
	const balace = starting - transport - food - rent
}
	
console.log(balance.toFixed(3))***/

//SOLUTION 

if (hourOfDay === 0 && minuteOfDay !== null) {
    const taxAsDecimal = parseFloat(tax) / 100; // Convert tax to decimal
    const startingAfterTax = salary * (1 - taxAsDecimal); // Corrected calculation
    const balance = startingAfterTax - transport - food - rent; // Corrected variable name
  
    console.log(balance.toFixed(3));
