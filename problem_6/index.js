function main() {
  const limit = 100;

  let sum_of_square = 0;
  let pre_square_of_sum = 0;
  let square_of_sum = 0;
  let difference;

  for(let i = 1; i <= limit; i++) {
    const square = i * i;
    sum_of_square += square;
  }

  for(let i = 1; i <= limit; i++) {
    pre_square_of_sum += i;
  }

  square_of_sum = pre_square_of_sum * pre_square_of_sum;

  difference = square_of_sum - sum_of_square;

  console.log(`Square of Sum : ${square_of_sum}`);
  console.log(`Sum of Square : ${sum_of_square}`);
  console.log(`Difference : ${difference}`);

}

main();