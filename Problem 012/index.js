/* Problem 12: Highly divisible triangular number
References: 
1. https://en.wikipedia.org/wiki/Triangular_number
2. https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
3. https://byjus.com/maths/factors-of-a-number/
*/

function main() {
  const target = 500;
  const length = 5000;
  // Step 1: generate list of primes
  // Note: raise length for futher optimization
  const primes = generate_primes(length);
  // Starting from first triangular number
  let i = 1;
  // run until result is found
  while (true) {
    // Step 2: calculate the i'th triangular number
    const t = calculate_triangle(i);
    // Step 3: calculate prime factors of the number
    const f = prime_factorization(t, primes);
    // Step 4: calculate total number of factors of the number
    const c = calculate_factors(f);

    // exit and print when factors count matches or crosses 500
    if (c >= target) {
      console.log(`Result: ${t}`);
      break;
    }
    i++;
  }
}

// From reference 1
// calculate the n'th triangular number
function calculate_triangle(n) {
  return (n * (n + 1)) / 2;
}

// calculate total factor from Map m
function calculate_factors(m) {
  let count = 1;
  for (const a of m.values()) {
    count = count * (a + 1);
  }
  return count;
}

// fatorize n while l is the list of primes
// returns map of factors as, prime => occurence
function prime_factorization(n, l) {
  // using Map to store occuerance of divisor
  const factors = new Map();
  let remainder = n;

  while (remainder !== 1) {
    // console.log(`Remainder: ${remainder}`);
    for (const a of l) {
      if (remainder % a === 0) {
        remainder = remainder / a;
        if (factors.has(a)) {
          factors.set(a, factors.get(a) + 1);
        } else {
          factors.set(a, 1);
        }
        break;
      }
    }
  }

  return factors;
}

// From reference 2
function generate_primes(limit) {
  const primes = [2, 3, 5, 7];

  let pointer = 2;
  while (true) {
    if (primes.length == limit) break;
    if (
      pointer % 2 !== 0 &&
      pointer % 3 !== 0 &&
      pointer % 5 !== 0 &&
      pointer % 7 !== 0
    ) {
      primes.push(pointer);
    }
    pointer++;
  }

  return primes;
}

main();
