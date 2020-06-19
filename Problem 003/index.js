function main() {
  const target_num = 600851475143;
  const prime_nums = [];

  // find prime numbers between 0 and 10000
  for (let i = 0; i < 10000; i++) {
    if(is_prime(i)) prime_nums.push(i);
  }
  console.log(`Found ${prime_nums.length} prime terms.`);

  const factors = get_factors(target_num, prime_nums);
  console.log(`Largest prime : ${factors[factors.length - 1]}`);
}

function get_factors(n, d) {
  const factors = [];

  for (let i = 0; i < d.length; i++) {
    const el = d[i];
    if (n % el === 0) factors.push(el);
  }

  return factors;
}

// checks if the number is prime
function is_prime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

main();