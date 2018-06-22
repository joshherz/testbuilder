// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

/* JOSH's NOTES
OICE
O: name of a network
I: cc #
C: ?
E: detectNetwork('343456789012345') should return 'American Express'

psuedo:
declare 3 var
- prefix of first numbers (as a string)

- cc# length


str slice prefix
convert str cardNumber to num
if (prefix has 38 or 39 && cc#.length is 14)
--> return "Discover"
else if (prefix has 34 or 37) && cc#.length is 15)
-->return "American Express"

Directions:
// Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
*/

var detectNetwork = function(cardNumber) {
  var oneNumPrefix = Number(cardNumber.slice(0,1));
  var twoNumPrefix = Number(cardNumber.slice(0,2));

  var threeNumPrefix = Number(cardNumber.slice(0,3));
  var fourNumPrefix = Number(cardNumber.slice(0,4));
  var sixNumPrefix = Number(cardNumber.slice(0,6));

  var cardNumberLength = cardNumber.length

  if ((twoNumPrefix === 38 || twoNumPrefix === 39) && (cardNumberLength === 14)){
    return ('Diner\'s Club');
  }
  else if ((
    (sixNumPrefix >= 622126 && sixNumPrefix <= 622925) ||
    (threeNumPrefix >= 624 && threeNumPrefix <= 626) ||
    (fourNumPrefix >= 6282 && fourNumPrefix <= 6288)) &&
    (cardNumber.length >= 16 && cardNumber.length <= 19)) {
      return 'China UnionPay';
  }
  else if ((twoNumPrefix === 34 || twoNumPrefix === 37) && (cardNumberLength === 15)){
    return ('American Express');
  }
  else if (
    (fourNumPrefix === 4903 || fourNumPrefix === 4905 ||fourNumPrefix === 4911 || fourNumPrefix === 4936 || fourNumPrefix === 6333 ||fourNumPrefix === 6759 || sixNumPrefix === 564182 || sixNumPrefix === 633110)
    && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) ){
    return 'Switch';
}
  else if ((oneNumPrefix === 4) && (cardNumberLength === 13 || cardNumberLength === 16 || cardNumberLength === 19)){
    return ('Visa');
  }
  else if ((twoNumPrefix === 51 || twoNumPrefix ===  52 || twoNumPrefix === 53 || twoNumPrefix === 54 || twoNumPrefix === 55) && (cardNumberLength === 16)){
    return ('MasterCard');
  }
  else if ((cardNumber.length === 16 || cardNumber.length === 19) && (fourNumPrefix  === 6011 || (threeNumPrefix >= 644 && threeNumPrefix <= 649) || twoNumPrefix === 65)) {
    return 'Discover';
  }
  else if ((cardNumber.length >= 12 && cardNumber.length <= 19) && (fourNumPrefix  === 5018 || fourNumPrefix  === 5020 || fourNumPrefix  === 5038 || fourNumPrefix  === 6304)) {
    return 'Maestro';
  }

  else {
    return 'Card type not found';
  }

};

/*test
detectNetwork('38345678901234')
detectNetwork('39345678901234')
detectNetwork('343456789012345')
detectNetwork('373456789012345')
detectNetwork('4123456789012')
detectNetwork('4123456789012345')
detectNetwork('4123456789012345678')
detectNetwork('5112345678901234')
detectNetwork('5212345678901234')
detectNetwork('5312345678901234')
detectNetwork('5412345678901234')
detectNetwork('5512345678901234')
*/