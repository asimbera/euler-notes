function main() {
  const arr_1 = [];
  const arr_2 = [];
  let results = [];

  // construct the array of 3 digit numbers
  for (let i = 100; i < 1000; i++) {
    arr_1.push(i);
  }
  
  // construct the array of multiplication of 3 digit
  // numbers with each others
  for (let i = 0; i < arr_1.length; i++) {
    const el_1 = arr_1[i];
    for (let j = 0; j < arr_1.length; j++) {
      const el_2 = arr_1[j];
      arr_2.push(el_1 * el_2);
    }
  }

  console.log(`Total elements: ${arr_2.length}`);

  for (let i = 0; i < arr_2.length; i++) {
    const el = arr_2[i];
    if (is_palindrome(el)) results.push(el);
  }

  // sort array from lesser to greater
  results = results.sort((a, b) => a - b);

  console.log(results[results.length - 1]);
}

function is_palindrome(n) {
  const reversed = parseInt(String(n).split('').reverse().join(''));
  return n === reversed ? true : false;
}

main();
