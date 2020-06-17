### Find the sum of all the multiples of 3 or 5 below 1000.

#### Solution:

##### Step 1:
Decleare a variable that holds the sum.
```js
let sum = 0;
```

##### Step 2:
Create a for loop with a iterator variable which value should not exceed 1000 and increases by 1.
```js 
for (let i = 0; i < 1000; i++) {
}
```
##### Step 3:
In an if statement check if iterator is divisable by 3 or 5 without any remainders.
```js
if (i % 3 === 0 || i % 5 === 0) {
}
```
##### Step 4:
If the if statement becomes true then add the value to `sum` variable and assign the result to the `sum`.

```js
sum = sum + i;
```

or,

```js
sum += i;
```

#### Full Code:

```js
function main() {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}

main();
```

#### References:
1. https://javascript.info/while-for#the-for-loop