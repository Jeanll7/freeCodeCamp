// Definimos uma variável chamada yourArray. Complete a instrução atribuindo uma matriz de pelo menos 5 elementos de comprimento à yourArray variável. Sua matriz deve conter pelo menos uma string , um número e um booleano .
let yourArray = ["a", 2, true, "c", null, { name: "john" }];

console.table(yourArray);
// ================================================================
// Para completar este desafio, defina a 2ª posição (índice 1) de myArray como quiser, além da letra b.
let myArray = ["a", "b", "c", "d"];

myArray[1] = "anything we want";
console.table(myArray);
// ================================================================
// Definimos uma função, mixedNumbers, para a qual estamos passando um array como argumento. Modifique a função usando push()e unshift()para adicionar 'I', 2, 'three'ao início da matriz e 7, 'VIII', 9 ao final para que a matriz retornada contenha representações dos números de 1 a 9 em ordem.
function mixedNumbers(arr) {
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  return arr;
}

console.log(mixedNumbers(["IV", 5, "six"]));
// ================================================================
// Definimos uma função, popShift, que recebe um array como argumento e retorna um novo array. Modifique a função, usando pop()e shift(), para remover o primeiro e o último elemento da matriz de argumentos e atribua os elementos removidos às suas variáveis ​​correspondentes, para que a matriz retornada contenha seus valores.
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

console.table(popShift(["challenge", "is", "not", "complete"]));
// ================================================================
// Inicializamos um array arr. Use splice()para remover elementos de arr, para que ele contenha apenas elementos que somam o valor de 10.
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
let newArray = arr.splice(1, 4);

console.log(arr);
// ================================================================
// Definimos uma função, htmlColorNames, que recebe uma matriz de cores HTML como argumento. Modifique a função usando splice()para remover os dois primeiros elementos da matriz e adicione 'DarkSalmon'e 'BlanchedAlmond'em seus respectivos lugares.
function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);
// ================================================================
// Definimos uma função, forecast, que recebe um array como argumento. Modifique a função usando slice() para extrair informações da matriz de argumentos e retornar uma nova matriz que contém os elementos de string warme sunny.
function forecast(arr) {
  return arr.slice(2, 4);
}

console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);
// ================================================================
// Definimos uma função, copyMachineque recebe arr(uma matriz) e num(um número) como argumentos. A função deve retornar uma nova matriz composta de num cópias de arr. Fizemos a maior parte do trabalho para você, mas ainda não está funcionando direito. Modifique a função usando a sintaxe de propagação para que funcione corretamente (dica: outro método que já abordamos pode ser útil aqui!).
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
// ================================================================
// Definimos uma função, htmlColorNames, que recebe uma matriz de cores HTML como argumento. Modifique a função usando splice()para remover os dois primeiros elementos da matriz e adicione 'DarkSalmon'e 'BlanchedAlmond'em seus respectivos lugares.
function htmlColorNames(arr) {
  arr.splice(0, 2, "WhiteSmoke", "BlanchedAlmond");
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);
// ================================================================
// Definimos uma função, forecast, que recebe um array como argumento. Modifique a função usando slice()para extrair informações da matriz de argumentos e retornar uma nova matriz que contém os elementos de string warme sunny.
function forecast(arr) {
  arr.slice(2, 4);
  return arr;
}

console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);
// ================================================================
// Definimos uma função spreadOutque retorna a variável sentence. Modifique a função usando o operador spread para que ela retorne o array ['learning', 'to', 'code', 'is', 'fun'].
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}

console.log(spreadOut());
// ================================================================
// indexOf()pode ser incrivelmente útil para verificar rapidamente a presença de um elemento em um array. Definimos uma função, quickCheck, que recebe um array e um elemento como argumentos. Modifique a função usando indexOf() para que ela retorne true se o elemento passado existir na matriz e false se não existir.
function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0 ? true : false;
  // if (arr.indexOf(elem) >= 0) {
  //   return true;
  // } else {
  //   return false;
  // }
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
// ================================================================
// Definimos uma função, filteredArray, que recebe arr, uma matriz aninhada e elemcomo argumentos e retorna uma nova matriz. elemrepresenta um elemento que pode ou não estar presente em um ou mais arrays aninhados em arr. Modifique a função, usando um forloop, para retornar uma versão filtrada da matriz passada de forma que qualquer matriz aninhada dentro de arrcontainer elemtenha sido removida.
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);
// ================================================================
// Definimos uma variável, myNestedArray, igual a um array. Modifique myNestedArray, usando qualquer combinação de strings , números e booleanos para elementos de dados, para que tenha exatamente cinco níveis de profundidade (lembre-se, o array mais externo é o nível 1). Em algum lugar no terceiro nível, inclua a string deep, no quarto nível, inclua a string deepere no quinto nível, inclua a string deepest.
let myNestedArray = [
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]],
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]],
];
// ================================================================
// Um foodsobjeto foi criado com três entradas. Usando a sintaxe de sua escolha, adicione mais três entradas a ela: bananascom um valor de 13, grapescom um valor de 35 e strawberriescom um valor de 27.
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

foods["bananas"] = 13;
foods["grapes"] = 35;
foods["strawberries"] = 27;

console.log(foods);
// ================================================================
// Aqui definimos um objeto userActivity, que inclui outro objeto aninhado dentro dele. Defina o valor da online chave como 45.
let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};

userActivity.data.online = 45;

console.log(userActivity);
// ================================================================
// Definimos uma função, checkInventory, que recebe um item digitalizado como um argumento. Retorna o valor atual da scannedItemchave no foodsobjeto. Você pode assumir que apenas chaves válidas serão fornecidas como um argumento para checkInventory.
let foods1 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  return foods1[scannedItem];
}

console.log(checkInventory("apples"));
console.clear();
// ================================================================
// Use a palavra-chave delete para remover as chaves oranges, plumse strawberriesdo foodsobjeto.
let foods2 = {
  apples: 25,
  grapes: 35,
  bananas: 13,
  oranges: 32,
  plums: 28,
  strawberries: 27,
};

delete foods2.oranges;
delete foods2.plums;
delete foods2.strawberries;

console.log(foods2);
// ================================================================
// Termine de escrever a função para que ela retorne true se o objeto passado a ela contiver todos os quatro nomes, Alan, Jeffe Sarahe Ryan retorne false caso contrário.
let users = {
  Alan: {
    age: 27,
    online: true,
  },

  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every((name) =>
    userObj.hasOwnProperty(name)
  );
}

console.log(users);
console.log(isEveryoneHere(users));
// ================================================================
// Definimos uma função countOnline que aceita um argumento (um objeto de usuários). Use uma instrução for...in dentro dessa função para percorrer o objeto de usuários passado para a função e retornar o número de usuários cuja onlinepropriedade está definida como true. Um exemplo de um objeto de usuários que pode ser passado countOnline é mostrado abaixo. Cada usuário terá uma online propriedade com um valor trueou false.
const users1 = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
  Ryan: {
    online: true,
  },
};

function countOnline(usersObj) {
  let result = 0;
  for (let user in usersObj) {
    // if (usersObj[user].online === true) {
    //   result++;
    // }
    usersObj[user].online === true && result++;
  }
  return result;
}

console.log(countOnline(users1));
// ================================================================
// Termine de escrever a getArrayOfUsers função para que ela retorne um array contendo todas as propriedades do objeto que recebe como argumento.
let users2 = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users2));
// ================================================================
// Dê uma olhada no objeto que fornecemos no editor de código. O userobjeto contém três chaves. A datachave contém cinco chaves, uma das quais contém uma matriz de friends. A partir disso, você pode ver como os objetos são flexíveis como estruturas de dados. Começamos a escrever uma função addFriend. Termine de escrevê-lo para que ele pegue um userobjeto e adicione o nome do friendargumento ao array armazenado user.data.friendse retorne esse array
let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}

console.log(addFriend(user, "Pete"));
