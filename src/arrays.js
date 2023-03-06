const getNthElement = (index, array) => {
   index2 = index - array.length;
  if (index >= array.length) {
    return array[index2]
  }
  return array[index];
}

const arrayToCSVString = array => {
 return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat([element]);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  const numberString = numbers.map(number => {
    return number.toString();
  });
  return numberString;
};

const uppercaseWordsInArray = strings => {
  const uppercaseWords = strings.map(word => {
    return word.toUpperCase();
  });
  return uppercaseWords;
};

const reverseWordsInArray = strings => {
};

const onlyEven = numbers => {
  const evenNumbers = numbers.filter(number => {
    return number % 2 === 0;
  });
  return evenNumbers;
};

const removeNthElement2 = (index, array) => {
  array.toString();

};

const elementsStartingWithAVowel = strings => {
  const firstLetter = strings.filter(string =>
      string.toLowerCase().startsWith('a') ||
      string.toLowerCase().startsWith('e') ||
      string.toLowerCase().startsWith('i') ||
      string.toLowerCase().startsWith('o') ||
      string.toLowerCase().startsWith('u')
  );
  return firstLetter;
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
