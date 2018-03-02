const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
	it('Should check if number is divisible by 3 5 or 15', function() {
		const normalCase = [
		{num: 15, expected: 'fizz-buzz'},
		{num: 10, expected: 'buzz'},
		{num: 9,  expected: 'fizz'},
		{num: -7, expected: -7}
		];

	   normalCase.forEach(function(input) {
      	const answer = fizzBuzzer(input.num);
      	expect(answer).to.equal(input.expected);
    });
	});

	it('should raise error if args not numbers', function(){
		const badCase = ['a'];
		badCase.forEach(function(val){
			expect(function(){
			fizzBuzzer(val);
			}).to.throw(Error);
		});
	});
});