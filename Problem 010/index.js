function main() {

  const target = 2000000;
  const arr = [];

  for (let i = 2; i < target; i++) {
    if(is_prime(i)) arr.push(i);
  }

  console.log(`Found ${arr.length} prime terms.`);
  console.log(`Result: ${arr.reduce((a, b) => a + b, 0)}`)

}

// code dump from problem 3 with some modifications
function is_prime(n) {
  // 2 is prime as later statement discards terms
  // dividable by 2
  if (n === 2) return true;
  // terms dividable by 2 are always composite number
  if (n % 2 === 0) return false;
  // as per wikipedia, trial division checks for
  // factors between 2 and square root of the term
  // both included
  const lim = Math.sqrt(n);
  for (let i = 2; i <= lim; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

main();