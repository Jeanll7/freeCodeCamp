// Você recebe uma variável celsius que representa uma temperatura em Celsius. Use a variável fahrenheitjá definida e atribua a ela a temperatura Fahrenheit equivalente à temperatura Celsius dada. Use a fórmula mencionada acima para ajudar a converter a temperatura Celsius para Fahrenheit.
function convertCtoF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

console.log(convertCtoF(30));
// ================================================================
// Inverter a string. Por exemplo, "hello" deve se tornar "olleh".
function reverseString(str) {
  return str.split("").reverse("").join("");
}

console.log(reverseString("hello"));
// ================================================================
// Somente inteiros maiores ou iguais a zero serão fornecidos à função.
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

console.log(factorialize(5));
// ================================================================
// Retorna o comprimento da palavra mais longa na frase fornecida. Sua resposta deve ser um número.
function findLongestWordLength(str) {
  // return Math.max(...str.split(" ").map((word) => word.length));

  // const words = str.split(" ");
  // if (words.length == 1) {
  //   return words[0].length;
  // }
  // return Math.max(
  //   words[0].length,
  //   findLongestWordLength(words.slice(1).join(" "))
  // );

  const words = str.split(" ");

  return words.length == 1
    ? words[0].length
    : Math.max(
        words[0].length,
        findLongestWordLength(words.slice(1).join(" "))
      );
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
// ================================================================
// Lembre-se de que você pode iterar por meio de um array com um loop for simples e acessar cada membro com a sintaxe do array arr[i].
function largestOfFour(arr, finalArr = []) {
  return !arr.length
    ? finalArr
    : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])));
}

console.table(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
// ================================================================
// Lembre-se de que você pode iterar por meio de um array com um loop for simples e acessar cada membro com a sintaxe do array arr[i].
function largestOfFour(arr) {
  // return arr.map(Function.apply.bind(Math.max, null));

  return arr.map(function (group) {
    return group.reduce(function (prev, current) {
      return current > prev ? current : prev;
    });
  });
}

console.table(
  largestOfFour([
    [4, 5, 1, 9],
    [13, 15, 18, 19],
    [32, 35, 37, 38],
    [1000, 1001, 857, 990],
  ])
);
// ================================================================
// Esse desafio pode ser superado com o .endsWith() método, que foi introduzido no ES2015. Mas, para este desafio, gostaríamos que você usasse um dos métodos de substring do JavaScript.
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;

  // let re = new RegExp(target + "$", "i");
  // return re.test(str);
}

console.log(confirmEnding("Bastian", "n"));
console.clear();
// ================================================================
// Repita uma determinada string str(primeiro argumento) por num vezes (segundo argumento). Retorna uma string vazia se num não for um número positivo. Para este desafio, não use o método interno .repeat().
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }

  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : "";
}

console.log(repeatStringNumTimes("abc", 2));
// ================================================================
// Truncar uma string (primeiro argumento) se ela for maior que o comprimento máximo de string fornecido (segundo argumento). Retorna a string truncada com um ...final.
function truncateString(str, num) {
  // return str.length > num ? str.slice(0, num) + "..." : str;

  if (str.length > num) {
    return str.slice(0, num) + "....";
  } else {
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// ================================================================
// Crie uma função que examine uma matriz arre retorne o primeiro elemento nela que passe em um 'teste de verdade'. Isso significa que, dado um elemento x, o 'teste de verdade' é aprovado se func(x) for true. Se nenhum elemento passar no teste, retorne undefined.
function findElement(arr, func) {
  // return arr.find(func);
  // return arr[arr.map(func).indexOf(true)];
  // return arr.filter(func)[0];

  return arr.length > 0 && !func(arr[0])
    ? findElement(arr.slice(1), func)
    : arr[0];
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));
// ================================================================
// Verifique se um valor é classificado como um primitivo booleano. Voltar true ou false.
// Os primitivos booleanos são truee false.
function booWho(bool) {
  return bool === true || bool === false;
  // return typeof bool === "boolean";
}

console.log(booWho(null));
// ================================================================
// Retorne a string fornecida com a primeira letra de cada palavra em maiúscula. Certifique-se de que o restante da palavra esteja em letras minúsculas.
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

console.log(titleCase("I'm a little tea pot"));
// ================================================================
// Retorne a string fornecida com a primeira letra de cada palavra em maiúscula. Certifique-se de que o restante da palavra esteja em letras minúsculas.
const texto = "O freeCodeCamp é um recurso incrível";

function titleCase(str) {
  const subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
  return subst;
}

console.log(titleCase(texto));
// ================================================================
// Retorne a string fornecida com a primeira letra de cada palavra em maiúscula. Certifique-se de que o restante da palavra esteja em letras minúsculas.
const texto1 = `a vida é uma jornada cheia de altos e baixos. nem sempre é fácil lidar com os desafios que surgem no caminho, mas é importante lembrar que cada experiência pode nos ensinar algo valioso. não importa o quão difícil pareça, sempre há uma maneira de superar e seguir em frente. tenha fé em si mesmo e nunca desista dos seus sonhos.`;

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

console.log(titleCase(texto1));
console.clear();
// ================================================================
// Retorne a matriz resultante. As matrizes de entrada devem permanecer as mesmas após a execução da função.
function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArr.splice(n, 0, arr1[i]);
    n++;
  }
  return localArr;
}

console.clear();

function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

// function frankenSplice(arr1, arr2, n) {
//   let localArr = arr2.slice();
//   localArr.splice(n, 0, ...arr1);
//   return localArr;
// }

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// ================================================================
// verificar numeros impares
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const impar = [];

for (let i = 0; i < num.length; i++) {
  const numAtual = num[i];
  numAtual % 2 !== 0 && impar.push(numAtual);
}

console.log(impar);
// ================================================================
// Remova todos os valores falsos de uma matriz. Retorna um novo array; não altere a matriz original.
// Dica: tente converter cada valor em um booleano.
function bouncer(arr) {
  // return arr.filter(Boolean); clean code
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) filteredArr.push(arr[i]);
  }
  return filteredArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
// ================================================================
// Da mesma forma, getIndexToIns([20,3,5], 19)deve retornar 2 porque, uma vez que a matriz foi classificada, ela se parecerá com [3,5,20] e 19 será menor que 20(índice 2) e maior que 5(índice 1).
function getIndexToIns(arr, num) {
  return arr.filter((val) => num > val).length;
  // return arr
  //   .concat(num)
  //   .sort((a, b) => a - b)
  //   .indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));
// ================================================================
// Retorna truese a string no primeiro elemento do array contiver todas as letras da string no segundo elemento do array.
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);
