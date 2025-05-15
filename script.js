const makeChange = (c) => {
  // your name here
	let result = {
        q: 0,
        d: 0,
        n: 0,
        p: 0
    }
    result.q = Math.floor(amount / 25);
    amount %=25

    result.d = Math.floor(amount / 10);
    amount %=10
    
    result.n = Math.floor(amount / 5);
    amount %=5

    result.p = amount;
    return result;
    
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
