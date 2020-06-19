### By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

#### Solution - Initial:
As Fibonacci sequence starts at 1 and adds previous natural with it for next term in sequence, this algorithm add some optimization. The sequence can be generated without this optimization, by using a conditional statement in the loop.

##### Step 1:
Declare an array with two initial numbers of the sequence and to pointers to the array members.
```js
const arr = [1, 2];

let pointer_1 = arr[arr.length - 2];
let pointer_2 = arr[arr.length - 1];
```

##### Step 2:
Create a `for` loop with an iterator with very big max limit or use `while` loop (not implemented yet).

```js
for (let i = 0; i < 99999; i++) {}
```

Find the next term in the sequence by adding two pointers.
```js
let term = pointer_1 + pointer_2;
```

Break the loop if value of the term exceeds 4 millions.
```js
if (term >= 4000000) break;
```

Push the value to the `arr` array.
```js
arr.push(term);
```

Reassign last two terms in the sequence to the pointers.
```js
pointer_1 = arr[arr.length - 2];
pointer_2 = arr[arr.length - 1];
```

##### Step 3:
Declare `sum` variable with initial value `0`.
```js
let sum = 0;
```

Construct a `for` loop with an iterator and with a limit of `arr.length`.
```js
for (let i = 0; i < arr.length; i++) {
```

Check if the array element is even, then add and update the sum.

```js
let el = arr[i];

if (el % 2 === 0) {
  sum += el;
}
```

#### Full Code:
```js
function main() {
  // Step 1
  const arr = [1, 2];

  let pointer_1 = arr[arr.length - 2];
  let pointer_2 = arr[arr.length - 1];

  // Step 2 : build the sequence
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
  // Step 3 : filter out odd values and make sum
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

```

#### References:
1. https://en.wikipedia.org/wiki/Fibonacci_number