// Passaremos a você um array de dois números. Retorne a soma desses dois números mais a soma de todos os números entre eles. O número mais baixo nem sempre virá primeiro.
function sumAll(arr) {
  // let sumBetween = 0;
  // for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
  //   sumBetween += i;
  // }
  // return sumBetween;

  // const [first, last] = [...arr].sort((a, b) => a - b);
  // return first !== last ? first + sumAll([first + 1, last]) : first;

  const sorted = [...arr].sort((a, b) => a - b);
  const first = sorted[0];
  const last = sorted[1];

  if (first !== last) {
    const sumBetween = sumAll([first + 1, last]);
    return first + sumBetween;
  } else {
    return first;
  }
}

console.log(sumAll([1, 4]));
// ================================================================
// Compare duas matrizes e retorne uma nova matriz com quaisquer itens encontrados apenas em uma das duas matrizes fornecidas, mas não em ambas. Em outras palavras, retorne a diferença simétrica dos dois arrays.
// Observação: você pode retornar o array com seus elementos em qualquer ordem.
function diffArray(arr1, arr2) {
  // const uniqueArr1 = arr1.filter((item) => !arr2.includes(item));
  // const uniqueArr2 = arr2.filter((item) => !arr1.includes(item));
  // return [...uniqueArr1, ...uniqueArr2];

  // return arr1
  //   .concat(arr2)
  //   .filter((item) => !arr1.includes(item) || !arr2.includes(item));

  function diff(a, b) {
    return a.filter((item) => b.indexOf(item) === -1);
  }
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// ================================================================
// Você receberá um array inicial (o primeiro argumento na destroyer função), seguido por um ou mais argumentos. Remova todos os elementos da matriz inicial que tenham o mesmo valor desses argumentos.
// Nota: Você tem que usar o arguments objeto.
function destroyer(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 1; j < arguments.length; j++) {
      arr[i] === arguments[j] && arr.splice(i, 1);
    }
  }
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

function cleanCode(arr, ...args) {
  return arr.filter((val) => !args.includes(val));
}
console.log(cleanCode([1, 2, 3, 1, 2, 3], 2, 3)); // pois os valores 2 e 3 foram filtrados.
// ================================================================
// Por exemplo, se o primeiro argumento for [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], e o segundo argumento for { last: "Capulet" }, então deve-se retornar o terceiro objeto do array (o primeiro argumento), pois contém o nome e seu valor, que foi passado como o segundo argumento.
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter((obj) =>
    sourceKeys.every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );

  // const souceKeys = Object.keys(source);

  // // filter the collection
  // return collection.filter(obj => {
  //   for (let i = 0; i < souceKeys.length; i++) {
  //     if (!obj.hasOwnProperty(souceKeys[i]) ||
  //         obj[souceKeys[i]] !== source[souceKeys[i]]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // });
}

console.table(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
// ================================================================
// Converter uma string em caixa vertebral. As maiúsculas e minúsculas são todas as palavras-minúsculas unidas por travessões.
function spinalCase(str) {
  return str
    .replace(/[\s_]/g, "-")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();

  // return str;
  // .split(/\s|_|(?=[A-Z])/)
  // .join("-")
  // .toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
// ================================================================
// Traduza a string fornecida para Pig Latin. Strings de entrada são garantidamente palavras em inglês em letras minúsculas.
function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";

  // let consonantRegex = /^[^aeiou]+/;
  // let myConsonants = str.match(consonantRegex);
  // return myConsonants !== null
  //   ? str
  //       .replace(consonantRegex, "")
  //       .concat(myConsonants)
  //       .concat("ay")
  //   : str.concat("way");
}

console.log(translatePigLatin("consonant"));
// ================================================================
// Faça uma pesquisa e substitua na frase usando os argumentos fornecidos e retorne a nova frase.
// O primeiro argumento é a frase para realizar a pesquisa e substituir.
// O segundo argumento é a palavra que você substituirá (antes).
// O terceiro argumento é o que você substituirá o segundo argumento por (depois).
// Observação: Preserve a caixa do primeiro caractere na palavra original ao substituí-la. Por exemplo, se você pretende substituir a palavra Book pela palavra dog, ela deve ser substituída como Dog
function myReplace(str, before, after) {
  if (str.indexOf(before) !== -1) {
    if (before.charAt(0) === before.charAt(0).toUpperCase()) {
      after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      after = after.charAt(0).toLowerCase() + after.slice(1);
    }
    str = str.replace(before, after);
  }
  return str;
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
// ================================================================
