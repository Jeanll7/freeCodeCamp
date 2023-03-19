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
// Por exemplo, para a entrada GCG, retorne[["G", "C"], ["C","G"], ["G", "C"]]
// O caractere e seu par são emparelhados em uma matriz e todas as matrizes são agrupadas em uma matriz de encapsulamento.
function pairElement(str) {
  const pairs = [];

  for (let i = 0; i < str.length; i++) {
    const base = str[i];
    const pair =
      base === "A"
        ? "T"
        : base === "T"
        ? "A"
        : base === "C"
        ? "G"
        : base === "G"
        ? "C"
        : "";
    pairs.push([base, pair]);
  }
  return pairs;

  // const basePairs = {
  //   A: "T",
  //   T: "A",
  //   C: "G",
  //   G: "C",
  // };
  // const pairs = str.split("").map((base) => [base, basePairs[base]]);
  // return pairs;
}

console.table(pairElement("GCG"));
// ================================================================
// Encontre a letra que falta no intervalo de letras passado e devolva-a.
// Se todas as letras estiverem presentes no intervalo, retorne undefined.
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }

  // for (let i = 0; i < str.length - 1; i++) {
  //   const currCode = str.charCodeAt(i);
  //   const nextCode = str.charCodeAt(i + 1);
  //   if (nextCode - currCode > 1) {
  //     return String.fromCharCode(currCode + 1);
  //   }
  // }
  // return undefined;
}

console.log(fearNotLetter("abce"));
// ================================================================
// Os números exclusivos devem ser classificados por sua ordem original, mas a matriz final não deve ser classificada em ordem numérica.
function uniteUnique() {
  const finalArray = [];

  for (let i = 0; i < arguments.length; i++) {
    const arrayArguments = arguments[i];

    for (let j = 0; j < arrayArguments.length; j++) {
      let indexValue = arrayArguments[j];

      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}
// clean code
// const uniteUnique = (...arr) => [...new Set(arr.flat())];

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.clear();
// ================================================================
// Converta os caracteres &, <, >, "(aspas duplas) e '(apóstrofe) em uma string em suas entidades HTML correspondentes.
function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str
    .split("")
    .map((entity) => htmlEntities[entity] || entity)
    .join("");

  // return str.replace(/([&<>\"'])/g, (match) => htmlEntities[match]); // clean code
}

console.log(convertHTML("Dolce & Gabbana"));
// ================================================================
// Dado um número inteiro positivo num, retorne a soma de todos os números ímpares de Fibonacci menores ou iguais a num.
// Os dois primeiros números na sequência de Fibonacci são 0 e 1. Cada número adicional na sequência é a soma dos dois números anteriores. Os primeiros sete números da sequência de Fibonacci são 0, 1, 1, 2, 3, 5 e 8.
// Por exemplo, sumFibs(10)deve retornar 10 porque todos os números ímpares de Fibonacci menores ou iguais a 10 são 1, 1, 3 e 5.
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;

  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

console.log(sumFibs(4));
// ================================================================
// Reescreva sumPrimes para que retorne a soma de todos os números primos menores ou iguais a num.
function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      sum += i;
    }
  }
  return sum;

  // let primes = [];
  // for (let i = 2; i <= num; i++) {
  //   if (primes.every((prime) => i % prime !== 0))
  //     primes.push(i);
  // }
  // return primes.reduce((sum, prime) => sum + prime, 0);
}

console.log(sumPrimes(15));
// ================================================================
// Encontre o menor múltiplo comum dos parâmetros fornecidos que pode ser dividido igualmente por ambos, bem como por todos os números sequenciais no intervalo entre esses parâmetros.
function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return range.reduce((multiple, curr) => lcm(multiple, curr));

  // const [min, max] = arr.sort((a, b) => a - b);
  // let scm = min;
  // for (let i = min + 1; i <= max; i++) {
  //   let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  //   scm = (scm * i) / gcd(scm, i);
  // }
  // return scm;
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([2, 10]));
// ================================================================
// Dada a matriz arr, percorra e remova cada elemento começando do primeiro elemento (o índice 0) até que a função func retorne true quando o elemento iterado for passado por ela.

const dropElements = (arr, func) => {
  let sliceIndex = arr.findIndex(func);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
};

console.log(dropElements([1, 2, 3], (n) => n < 3));

function dropElements1(arr, func) {
  let sliceIndex = arr.findIndex(func);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}

console.log(dropElements1([1, 2, 3, 5, 8, 11], (n) => n < 3));
// ================================================================
// Achatar uma matriz aninhada. Você deve considerar os vários níveis de aninhamento.
function steamrollArray(arr) {
  let flattenedArray = [];
  // loop através da matriz
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Se o elemento atual for uma matriz, chama a função recursivamente
      flattenedArray = flattenedArray.concat(steamrollArray(arr[i]));
    } else {
      // Se o elemento atual não for uma matriz, adiciona-o à matriz achatada
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}

function steamrollArray1(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray1([1, [2, 8], [3, [[4]]]]));
// ================================================================
// Retorna uma frase traduzida para o inglês da string binária passada.
// A string binária será separada por espaço.
function binaryAgent(str) {
  // const binaries = str.split(" ");
  // let result = "";

  // for (let i = 0; i < binaries.length; i++) {
  //   const decimal = parseInt(binaries[i], 2);
  //   const character = String.fromCharCode(decimal);
  //   result += character;
  // }
  // return result;

  // clean code
  return String.fromCharCode(
    ...str.split(" ").map((char) => parseInt(char, 2))
  );
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);
// ================================================================
console.log(String.fromCharCode(65, 66, 67)); // retorna "ABC"
console.log(
  String.fromCharCode(
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    111,
    112,
    113,
    114,
    115,
    116,
    117,
    118,
    119,
    120,
    121,
    122,
    96
  )
); // retorna "alfabeto completo"

function stringFromCharCodeWithComma(numbers) {
  return String.fromCharCode(...numbers)
    .split("")
    .join(",");
}

const codes = [96, 97, 98, 99, 100, 101];
console.log(stringFromCharCodeWithComma(codes)); // saída: "`a,b,c,d,e"
// ================================================================
// Em JavaScript, truthy valores são valores convertidos true quando avaliados em um contexto booleano.
// Lembre-se, você pode acessar as propriedades do objeto por meio de notação de ponto ou []notação.
function truthCheck(collection, pre) {
  let counter = 0;
  for (let c in collection) {
    if (collection[c][pre]) {
      counter++;
    }
  }
  return counter == collection.length;

  // clean code
  // return collection.every((obj) => obj[pre]);
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot"
  )
);
// ================================================================
// Crie uma função que some dois argumentos. Se apenas um argumento for fornecido, retorne uma função que espera um argumento e retorna a soma.
function addTogether(first, second) {
  if (typeof first !== "number") return undefined;
  return arguments.length === 2
    ? typeof second === "number"
      ? first + second
      : undefined
    : (second) => addTogether(first, second);
}

console.log(addTogether(2, 3));
// ================================================================
// Execute os testes para ver a saída esperada para cada método. Os métodos que recebem um argumento devem aceitar apenas um argumento e deve ser uma string. Esses métodos devem ser os únicos meios disponíveis de interação com o objeto.
const Person = function (firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };

  this.getLastName = function () {
    return fullName.split(" ")[1];
  };

  this.getFullName = function () {
    return fullName;
  };

  this.setFirstName = function (name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function (name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function (name) {
    fullName = name;
  };
};

const bob = new Person("Bob Ross");
console.log(bob.getFullName());
// ================================================================
// O raio da Terra é de 6367,4447 quilômetros e o valor GM da Terra é de 398600,4418 km 3 s -2 .
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  const calculateOrbitalPeriod = (altitude) => {
    const a = earthRadius + altitude;
    const T = 2 * Math.PI * Math.sqrt(Math.pow(a, 3) / GM);
    return Math.round(T);
  };

  return arr.map(({ name, avgAlt }) => ({
    name,
    orbitalPeriod: calculateOrbitalPeriod(avgAlt),
  }));

  // const GM = 398600.4418;
  // const earthRadius = 6367.4447;

  // return arr.map(({ name, avgAlt }) => {
  //   const earth = earthRadius + avgAlt;
  //   const orbitalPeriod = Math.round(
  //     2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM)
  //   );
  //   return { name, orbitalPeriod };
  // });
}

console.table(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
