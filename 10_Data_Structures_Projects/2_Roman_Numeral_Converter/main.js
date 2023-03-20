// Converta o número dado em um numeral romano.
// números romanos	algarismos arábicos
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// eu	50
// GG	40
// x	10
// IX	9
// V	5
// 4	4
// EU	1
// Todas as respostas em algarismos romanos devem ser fornecidas em letras maiúsculas.

function convertToRoman(num) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";
  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      result += key;
      num -= romanNumerals[key];
    }
  }
  return result;
}

console.log(convertToRoman(36)); // result: XXXVI

// ====================================================

function convertToRoman(num) {
  const romanNumerals = [
    { numeral: "M", value: 1000 },
    { numeral: "CM", value: 900 },
    { numeral: "D", value: 500 },
    { numeral: "CD", value: 400 },
    { numeral: "C", value: 100 },
    { numeral: "XC", value: 90 },
    { numeral: "L", value: 50 },
    { numeral: "XL", value: 40 },
    { numeral: "X", value: 10 },
    { numeral: "IX", value: 9 },
    { numeral: "V", value: 5 },
    { numeral: "IV", value: 4 },
    { numeral: "I", value: 1 },
  ];

  let result = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].numeral;
      num -= romanNumerals[i].value;
    }
  }
  return result;

  // return romanNumerals.reduce((result, numeral) => {
  //   while (num >= numeral.value) {
  //     result += numeral.numeral;
  //     num -= numeral.value;
  //   }
  //   return result;
  // }, "");
}

console.log(convertToRoman(4)); // result: IV
