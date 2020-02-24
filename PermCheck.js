function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)
	A.sort(function(a, b) {
		return a - b;
	});

	const len = A.length - 1;

	let solution = 1;

	let count = 0;

	for (leti = 0; i < len; i++) {
		count++;

		if (count !== A[i + 1] - 1) {
			solution = 0;

			return solution;

			break;
		}
	}

	if ((len === 0) & (A[0] !== 1)) return 0;

	returnsolution;
}
