function findMissingLetter(array) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let lowerCaseArr = array.map((l) => l.toLowerCase());
  let startingPoint = alphabet.indexOf(lowerCaseArr[0]);
  for (let i = 0; i < lowerCaseArr.length; i++) {
    if (lowerCaseArr[i] !== alphabet[startingPoint + i]) {
      return /[A-Z]/.test(array[0]) ? alphabet[startingPoint + i].toUpperCase() : alphabet[startingPoint + i]
    }
  }
}