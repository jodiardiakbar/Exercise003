// -1. multiplication table
let _givenNumber: number = 9;
let _i: number = 0;
while (_i < 10) {
  console.log(`${_givenNumber} x ${_i} = ${_givenNumber * _i}`);
  _i++;
}

// -2. palindrome check
let _checkPalindrome: string = `madam`;
console.log(_checkPalindrome.split("").reverse().join(""));
let _checkPalindromeReverse: string = _checkPalindrome
  .split("")
  .reverse()
  .join("");
console.log(
  _checkPalindrome === _checkPalindromeReverse ? `palindrome` : `not palindrome`
);

// other method
// looping
// console.log(_string1.length / 2);
// let _hasilPalindrome = "palindrome";
// for (let i = 0; i < _string1.length / 2; i++) {
//   console.log(_string1[i]);
//   console.log(_string1[_string1.length - 1 - i]);
//   if (_string1[i] !== _string1[_string1.length - 1 - i]) {
//     _hasilPalindrome = "not palindrome";
//     break;
//   }
// }

// console.log(_hasilPalindrome);

// -3. cm to km
let _inCentiMeter: number = 100000;
let _inKiloMeter: number = _inCentiMeter / 100000;
console.log(`${_inKiloMeter.toString()} km`);

// -4. to IDR
let _money: number = 1000;
let _toIDR = _money.toLocaleString(`in-ID`{
    style: "currency",
    currency: "IDR"
});
console.log(_toIDR)

// other method
// soal no 4
const _number3 = 1000;
let numberToCurrency = _number3.toLocaleString("in-ID", {
  style: "currency",
  currency: "IDR",
});
console.log(numberToCurrency);

numberToCurrency = new Intl.NumberFormat("in-ID", {
  style: "currency",
  currency: "IDR",
}).format(_number3);
console.log(numberToCurrency);

// soal no 5
const _string5: string = "Hello world";
const searchString: string = "o";

console.log(_string5.replace(searchString, ""));


// -5. remove first occurence of search string
let _completeString: string = `Hello world`;
let _searchString: string = `ell`;
console.log(_completeString.replace(_searchString, ""));


// -6. uppercase on first letter only
let _str6: string = `hello world`
console.log(_str6.split(' ').length)
let loopIndex: number = _str6.split(' ').length
let _newWord: string[] = [];
let newWord: string = ''
for (let i = 0; i < loopIndex; i++) {
    console.log(_str6.split(' ')[i].charAt(0).toUpperCase())
    _newWord.push(_str6.split(' ')[i].charAt(0).toUpperCase() + _str6.split(' ')[i].slice(1))
    newWord +=  _str6.split(' ')[i].charAt(0).toUpperCase() + _str6.split(' ')[i].slice(1) + ' '
}
console.log(_newWord)
console.log(newWord)

// 1. Character case swap
let originalCharacter: string = `The QuiCk BrOwN Fox`;
let swapCaseCharacter: string = ``;
let i: number = 0;
while (i < originalCharacter.length) {
  console.log(i);
  if (originalCharacter[i] === originalCharacter[i].toLowerCase()) {
    swapCaseCharacter += originalCharacter[i].toUpperCase();
  } else {
    swapCaseCharacter += originalCharacter[i].toLocaleLowerCase();
  }
  i++;
}
console.log(`${originalCharacter} -> ${swapCaseCharacter}`);

// 2. find the largest of two given integers
let num1: number = 42;
let num2: number = 27;
if (num1 > num2) {
  console.log(num1);
} else {
  console.log(num2);
}

// 3. sort three numbers
let num3: number = 42;
let num4: number = 27;
let num5: number = 18;

// 4. input checker
let _input = 100;
if (typeof _input === `number`) {
  console.log(`${_input} -> 2`);
} else if (typeof _input === `string`) {
  console.log(`${_input} -> 1`);
} else {
  console.log(`${_input} -> 3`);
}

// 5. change every letter a into *
let _inputString: string = `An apple a day keeps the doctor away`;
console.log(_inputString.replace(/[A,a]/g, `*`));
