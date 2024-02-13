// Big-O = O(n)

function fibonacci(n) {
	if (n <= 0) {
		throw new Error("Not a valid input");
	}
	if (n === 1) {
		return [0];
	}
	if (n === 2) {
		return [0, 1];
	}
	const fib = [0, 1];
	for (let i = 2; i < n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	return fib;
}

console.log(fibonacci(0));
console.log(fibonacci(10));
