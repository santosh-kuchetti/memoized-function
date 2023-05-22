// create a function that memoizes the function.


const memoise = (fn) => {
	const catche = {};
	return (...args) => {
		const argstostringify = JSON.stringify(args);
		if (argstostringify in catche) {
			console.log(`fetching from ${argstostringify}`);
			return catche[argstostringify];
		} else {
			console.log(`printing val ${argstostringify}`);
			const val = fn.apply(this, args);
			catche[argstostringify] = val;
			return val;
		}
	};
};

/*

    memoize of the function will return another new function.
    So, we are passing the parameters to the the retuned function, so we destructured in the line 6.
    the parameters can be of any type, so we are stringifying the args before and the args is the array. So, we are stringifying the array in line 7.
    If that stringfied key is present in the catche, we will return that value of that key or elase we will call the function and return the value that is returned by the function.


*/

//func1

const addThreeNums = (a, b, c) => a + b + c;

const add = memoise(addThreeNums);
console.log(add(1, "2", 3));
console.log(add(1, "2", 3));



//func2

const factNum = (n) => {
	if (n == 0) {
		return 1;
	}

	return n * fact(n - 1);
};

const fact = memoise(factNum);

console.log(fact(5));
console.log(fact(6));



