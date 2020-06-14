function main() {
  const prime_nums = [];

  let pointer = 2;
  while (true) {
    // break if prime_nums length reaches 10001
    if (prime_nums.length === 10001) break;
    if (is_prime(pointer)) prime_nums.push(pointer);
    pointer++;
  }

  console.log(`10001st prime number: ${prime_nums[prime_nums.length - 1]}`);
}

// code dump from problem 3
function is_prime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

main();
