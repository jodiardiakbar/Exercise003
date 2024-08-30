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
