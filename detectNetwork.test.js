/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  /*
  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });
  */
  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    //throw new Error('Delete me!');

    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
  var should = chai.should();

  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
});

function getNumString(charLength) {
  var longNumString = '123456789012345678901234567890';
  return longNumString.slice(0,charLength);
}

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should;

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function (prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function () {
          detectNetwork(prefix + '1234567890123').should.equal('Discover');
        });
        it('has a prefix of ' + prefix + ' and a length of 19', function () {
          detectNetwork(prefix + '1234567890123456').should.equal('Discover');
        });
    }) (prefix)
  }

  it('has a prefix of 6011 and a length of 16', function () {
    detectNetwork('6011123456781234').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function () {
    detectNetwork('6011123456781234123').should.equal('Discover');
  });
  it('has a prefix of 644 and a length of 16', function () {
    detectNetwork('6441123456781234').should.equal('Discover');
  });
  it('has a prefix of 649 and a length of 19', function () {
    detectNetwork('6491123456781234123').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function () {
    detectNetwork('6591123456781234').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function () {
      detectNetwork('6591123456781234123').should.equal('Discover');
  });
  twoDimTest(65, 65, 16, 16, 'Discover');
  twoDimTest(6011, 6011, 16, 16, 'Discover');
  twoDimTest(644, 649, 16, 16,'Discover');
  twoDimTest(65, 65, 19, 19, 'Discover');
  twoDimTest(6011, 6011, 19, 19, 'Discover');
  twoDimTest(644, 649, 19, 19,'Discover');
});


describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect=chai.expect;
  var should = chai.should();

  for (var cardLength = 12 - 4; cardLength <= 19 - 4; cardLength++) {
    (function (cardLength) {
      it('has a prefix of 5018 and a length of ' + (cardLength + 4), function() {
        detectNetwork(5018 + getNumString(cardLength)).should.equal('Maestro');
      });
    }) (cardLength)
  }
  for (var cardLength = 12 - 4; cardLength <= 19 - 4; cardLength++) {
    (function (cardLength) {
      it('has a prefix of 5020 and a length of ' + (cardLength + 4), function() {
        detectNetwork(5020 + getNumString(cardLength)).should.equal('Maestro');
      });
    }) (cardLength)
  }
  for (var cardLength = 12 - 4; cardLength <= 19 - 4; cardLength++) {
    (function (cardLength) {
      it('has a prefix of 5038 and a length of ' + (cardLength + 4), function() {
        detectNetwork(5038 + getNumString(cardLength)).should.equal('Maestro');
      });
    }) (cardLength)
  }
  for (var cardLength = 12 - 4; cardLength <= 19 - 4; cardLength++) {
    (function (cardLength) {
      it('has a prefix of 6304 and a length of ' + (cardLength + 4), function() {
        detectNetwork(6304 + getNumString(cardLength)).should.equal('Maestro');
      });
    }) (cardLength)
  }
});

describe('should support China UnionPay', function(){
  var should = chai.should();
  // prefixes 622126-622925
  // lengths 16-19
  // This outside test works

  /*  console.log('testing parent test function for China UnionPay')
    it('outside test: has a prefix of ' + 622925 + ' and a length of 16', function () {
      detectNetwork('6229251234567890').should.equal('China UnionPay');
    });
  */

    twoDimTest(622126, 622925, 16, 19, 'China UnionPay');
    twoDimTest(624, 626, 16, 19, 'China UnionPay');
    twoDimTest(6282, 6288, 16, 19, 'China UnionPay');
  });

  function twoDimTest(startPre, endPre, shortLength, longLength, cardType) {
    // shortLength and longLength are total lengths for the credit card strings
    var should = chai.should();
    for (var prefix = startPre; prefix <= endPre; prefix++) {
      (function (prefix) {
        for (var stubLength = shortLength - prefix.toString().length; stubLength <= longLength - prefix.toString().length; stubLength++) {
          (function (stubLength) {
            it('has a prefix of ' + prefix + ' and a length of ' + (stubLength + prefix.toString().length), function () {
              detectNetwork(prefix + getNumString(stubLength)).should.equal(cardType);
            });
          }) (stubLength)
        }
      }) (prefix)
    }
  }

  function oneDimTest(prefix, length, cardType) {
    twoDimTest(prefix, prefix, length, length, cardType);
  }

describe('should support Switch', function() {
  var should = chai.should();

  console.log('in switch test');
  oneDimTest(4903, 16, 'Switch');
  oneDimTest(4905, 16, 'Switch');
  oneDimTest(4911, 16, 'Switch');
  oneDimTest(4936, 16, 'Switch');
  oneDimTest(564182, 16, 'Switch');
  oneDimTest(633110, 16, 'Switch');
  oneDimTest(6333, 16, 'Switch');
  oneDimTest(6759, 16, 'Switch');

  oneDimTest(4903, 18, 'Switch');
  oneDimTest(4905, 18, 'Switch');
  oneDimTest(4911, 18, 'Switch');
  oneDimTest(4936, 18, 'Switch');
  oneDimTest(564182, 18, 'Switch');
  oneDimTest(633110, 18, 'Switch');
  oneDimTest(6333, 18, 'Switch');
  oneDimTest(6759, 18, 'Switch');

  oneDimTest(4903, 19, 'Switch');
  oneDimTest(4905, 19, 'Switch');
  oneDimTest(4911, 19, 'Switch');
  oneDimTest(4936, 19, 'Switch');
  oneDimTest(564182, 19, 'Switch');
  oneDimTest(633110, 19, 'Switch');
  oneDimTest(6333, 19, 'Switch');
  oneDimTest(6759, 19, 'Switch');
});