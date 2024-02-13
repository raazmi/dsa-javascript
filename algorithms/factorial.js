// Big-O = O(n)

function factorial(n) {
	if (n < 0) {
		throw new Error("Not a valid input");
	}
	if (n === 0) {
		return 1;
	}
	let result = 1;
	for (let i = n; i >= 1; i--) {
		result *= i;
	}
	return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
