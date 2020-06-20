// This solution currently only works this specific problem
// It uses properties Pascal's Triangle
// References:
// 1. https://en.wikipedia.org/wiki/Pascal%27s_triangle
function main() {
  // As problems specifies 20x20 square
  const squareHeight = 20;
  // Max height (row count) of the triangle
  // The corner point will be in the `maxTriangleRows + 1` row
  // And the in the center column
  const maxTriangleRows = squareHeight * 2;
  // There should be two rows predefined to begin with
  const pascalsTriangle = [[1], [1, 1]];
  // Starting count from 2, this will generate the last extra array
  for (let i = pascalsTriangle.length; i <= maxTriangleRows; i++) {
    pascalsTriangle.push(generateNewRow(pascalsTriangle));
  }

  const result = middleItem(pascalsTriangle[pascalsTriangle.length - 1]);
  console.log(`Result : ${result}`);
}

// Generate next row for Pascal's Triangle
function generateNewRow(t) {
  // The last row in provided array `t`
  const prevRow = t[t.length - 1];
  // This will hold the values of the row
  const newRow = [];
  // Add starting 1
  newRow.push(1);
  // iterate over all the items of `prevRow`
  // add iterating item with next item in the array
  for (let i = 0; i < prevRow.length; i++) {
    const el = prevRow[i];
    const nextEl = prevRow[i + 1];
    // only push when nextEl is not null
    if (nextEl) newRow.push(el + nextEl);
  }
  // Add ending 1
  newRow.push(1);

  return newRow;
}

// Get the center element of the array `t`
function middleItem(t) {
  if (t.length % 2 === 0) {
    return t[t.length / 2 - 1];
  } else {
    return t[(t.length + 1) / 2 - 1];
  }
}

main();
