function main() {
  let i = 1;
  while (true) {
    // break the loop if any dividable number found
    if (is_divisible(i, 20)) break;
    i++;
  }

  console.log(`Result: ${i}`)
}

// find if n is divisible by all natural numbers
// upto max.
function is_divisible(n, max = 10) {
  const nums = [];
  // populate nums array with natural numbers
  for (let i = 1; i <= max; i++) {
    nums.push(i);
  }

  // checks if not divisible by any item in nums array
  for (const i of nums) {
    if (n % i !== 0) return false;
  }

  return true;
}

main();
