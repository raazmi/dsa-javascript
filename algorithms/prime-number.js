// Big-O = O(n)
function isPrimeNumber(num) {
	if (num <= 1) {
		return false;
	}
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

console.log(isPrimeNumber(12));
console.log(isPrimeNumber(5));
console.log(isPrimeNumber(2));

// Big-O = O(sqrt(n))
function isPrimeNumberOptimal(num) {
	if (num <= 1) {
		return false;
	}
	for (let i = 2; i < Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

console.log(isPrimeNumberOptimal(12));
console.log(isPrimeNumberOptimal(5));
console.log(isPrimeNumberOptimal(2));
