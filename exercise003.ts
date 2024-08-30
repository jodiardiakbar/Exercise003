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
