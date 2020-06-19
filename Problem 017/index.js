function main() {
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    const in_words = number_to_word(i);
    const word_length = in_words.replace(/[-\ ]/gi, '').length;
    sum += word_length;
  }
  console.log(`Result: ${sum}`);
}

function number_to_word(n) {
  // Convert number to string for further usage
  const num = String(n);
  // Predefine constant words in an object
  const words = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety',
    '000': 'hundred',
    '0000': 'thousand',
  };

  // Find predefined words
  const findOne = (t) => {
    const key = Object.keys(words).find((val) => val === t);
    return words[key];
  };

  // Find two digits
  const findTwo = (t) => {
    const n = Number(t);
    if (n <= 20) {
      return findOne(String(n));
    } else {
      const w = [];
      w.push(findOne(`${t[0]}0`));
      if (t[1] === '0') {
        return w.toString();
      } else {
        w.push(findOne(t[1]));
        return w.join('-');
      }
    }
  };

  // Find three digits
  const findThree = (t) => {
    const w = [];
    w.push(findOne(`${t[0]}`));
    w.push(words['000']);
    if (t[1] === '0' && t[2] === '0') {
      return w.join(' ');
    } else {
      w.push('and');
      w.push(findTwo(`${t[1]}${t[2]}`));
      return w.join(' ');
    }
  };

  switch (num.length) {
    case 4:
      // Hardcode only round value
      return words['1'] + ' ' + words['0000'];
    case 3:
      return findThree(num);
    case 2:
    case 1:
      return findTwo(num);
    default:
      return '😭 Not Implemented';
  }
}

main();
