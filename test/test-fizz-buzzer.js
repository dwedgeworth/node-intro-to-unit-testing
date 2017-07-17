const should = require('chai').should();

const fizzbuzzer = require('../fizzBuzzer');

// unit tests for our `fizzbuzzer` function
describe('fizzbuzzer', function(){

  it('Should return fizz-buzz, buzz, fizz, or num', function(){
    const normalCases = [
      {num: 15, expected: 'fizz-buzz'},
      {num: 5, expected: 'buzz'},
      {num: 3, expected: 'fizz'},
      {num: 2, expected: 2}
    ];

    // for each number input (num), `fizzbuzzer` should
    // produce the expected value
    normalCases.forEach(function(input){
      const answer = fizzbuzzer(input.num);
      answer.should.equal(input.expected);
    });

  });

  it('should raise error is arg is not a number', function(){
    const badInputs = [
      '15', null, undefined
    ];

    badInputs.forEach(function(input){
      (function() {
          fizzbuzzer(input)
      }).should.throw(Error);
    });

  });
});

