function main() {

  // start 3 nested loop
  for (let a = 1; a < 1000; a++) {
    // console.log('a: ' + a);
    for (let b = 1; b < 1000; b++) {
      // console.log('b: ' + b);
      for (let c = 1; c < 1000; c++) {
        // console.log('c: ' + c);
        const sum = a + b + c;
        const ab_square_sum = a * a + b * b;
        const c_square = c * c;

        // checks the theory of Special Pythagorean Triplet
        if (sum === 1000 && ab_square_sum === c_square && a < b && b < c) {
          console.log('Result: ' + a + ' + ' + b + ' + ' + c);
          console.log(`Product: ${a * b * c}`);
          break;
        }
      }
    }
  }
}

main();
