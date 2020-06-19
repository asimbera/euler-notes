function main() {
  const limit = 1000000; // 1 million
  const length_arr = [];

  // Calculate length of all Collatz sequence in range 1 to limit
  // starting from 0 for optimization in next step
  for (let i = 0; i < limit; i++) {
    const length = calculate_collatz_length(i);
    length_arr.push(length);
  }

  let max = 0;
  let position = 0;
  // Calculate max and position of the longest chain
  for (let j = 0; j < length_arr.length; j++) {
    if (length_arr[j] >= max) {
      max = length_arr[j];
      position = j;
    }
  }

  console.log(`Position: ${position}`);
  console.log(`Max Value: ${max}`);
}

// dead code
function generate_collatz(term) {
  const arr = [];
  while (true) {
    if (arr.length === 0) {
      arr.push(term);
    } else {
      const last = arr[arr.length - 1];
      if (last === 1) break;
      if (last % 2 === 0) {
        arr.push(last / 2);
      } else {
        arr.push(3 * last + 1);
      }
    }
  }
  return arr;
}

function calculate_collatz_length(term) {
  // return 0 if term is less or equal to 0
  if (term <= 0) return 0;
  let length = 1;
  let last_item = term;
  // loop until last_item becomes 1
  while (true) {
    if (last_item === 1) break;
    if (last_item % 2 === 0) {
      last_item = last_item / 2;
    } else {
      last_item = 3 * last_item + 1;
    }
    length += 1;
  }
  return length;
}

main();
