function main() {
  const arr = [1, 2];

  let pointer_1 = arr[arr.length - 2];
  let pointer_2 = arr[arr.length - 1];

  // Step 1 : build the sequence
  for (let i = 0; i < 99999; i++) {
    // find next fibonacci term
    let term = pointer_1 + pointer_2;
    // break if term exceeds 4 millions
    if (term >= 4000000) break;
    // push term to the array if its even
    // if (term % 2 !== 0) arr.push(term);
    arr.push(term);
    // reassign pointers new value from array
    pointer_1 = arr[arr.length - 2];
    pointer_2 = arr[arr.length - 1];
  }

  let sum = 0;
  // Step 2 : filter out odd values and make sum
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];

    // check if the element is even
    if (el % 2 === 0) {
      // add the element to sum
      sum += el;
    }
  }

  console.log(sum);
}

main();
