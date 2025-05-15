function makeChange(cents) {
  let result = {
    q: 0, // quarters
    d: 0, // dimes
    n: 0, // nickels
    p: 0  // pennies
  };

  result.q = Math.floor(cents / 25);
  cents %= 25;

  result.d = Math.floor(cents / 10);
  cents %= 10;

  result.n = Math.floor(cents / 5);
  cents %= 5;

  result.p = cents;

  return result;
}

// Get input using prompt
const input = Number(prompt("Enter amount in cents:"));
const output = makeChange(input);

// Show result using alert as JSON
alert(JSON.stringify(output));
