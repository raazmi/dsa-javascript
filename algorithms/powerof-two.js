// Big-O = O(logn)
function powerofTwo(num) {
	if (num < 1) {
		return false;
	}
	while (num > 1) {
		if (num % 2 !== 0) {
			return false;
		}
		num = num / 2;
	}
	return true;
}

console.log(powerofTwo(1));
console.log(powerofTwo(2));
console.log(powerofTwo(5));
console.log(powerofTwo(8));

// Big-O = O(1)
function powerofTwoBitwise(num) {
	if (num < 1) {
		return false;
	}
	return (num & (num - 1)) === 0;
}

console.log(powerofTwoBitwise(1));
console.log(powerofTwoBitwise(2));
console.log(powerofTwoBitwise(5));
console.log(powerofTwoBitwise(8));
