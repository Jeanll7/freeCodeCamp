function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
// ================================================================
const s = [5, 7, 2];

function editInPlace() {
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
console.log(s);
// ================================================================
// Neste desafio, você usará Object.freezepara evitar que as constantes matemáticas mudem. Você precisa congelar o MATH_CONSTANTSobjeto para que ninguém possa alterar o valor de PI, adicionar ou excluir propriedades.
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
// ================================================================
// Reescreva a função atribuída à variável magicque retorna um new Date()para usar a sintaxe da função de seta. Além disso, certifique-se de que nada seja definido usando a palavra-chave var.
const magic = () => {
  return new Date();
};
// ================================================================
// Reescreva a myConcatfunção que anexa o conteúdo de arr2 para arr1 que a função use a sintaxe de função de seta.
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
// ================================================================
// Modifique a função incrementadicionando parâmetros padrão para que adicione 1 a numberse valuenão for especificado.
const increment = (number, value = 1) => number + value;

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
// ================================================================
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
// ================================================================
// Modifique a função sum usando o parâmetro rest de forma que a função sum seja capaz de receber qualquer número de argumentos e retornar sua soma.

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
console.log(sum(1, 2, 3));
// ================================================================
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];

const arr2 = [...arr1];

console.log(arr2);
// ================================================================
// Substitua as duas atribuições por uma atribuição de desestruturação equivalente. Ele ainda deve atribuir as variáveis today​​e tomorrowos valores de todaye tomorrowdo HIGH_TEMPERATURESobjeto.
const HIGH_TEMPERATURESS = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

const { today, tomorrow } = HIGH_TEMPERATURESS;

console.log(HIGH_TEMPERATURESS);
// ================================================================
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today: highTodays, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
// ================================================================
// Substitua as duas atribuições por uma atribuição de desestruturação equivalente. Ele ainda deve atribuir as variáveis lowToday​​e highTodayos valores de today.lowe today.highdo LOCAL_FORECASTobjeto.
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;

console.log(LOCAL_FORECAST);
// ================================================================
// Use a atribuição de desestruturação para trocar os valores de a e b para que a receba o valor
// armazenado em b e b receba o valor armazenado em a.
let a = 8,
  b = 6;

[a, b] = [b, a];
// ================================================================
// Em algumas situações envolvendo desestruturação de array, podemos querer coletar o resto dos elementos em um array separado.
// O resultado é semelhante a Array.prototype.slice(), conforme mostrado abaixo:

function removeFirstTwo(list) {
  const [a, b, ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
// ================================================================
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = ({ max, min }) => (max + min) / 2.0;
// ================================================================
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};

function makeList(arr) {
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class='text-warning'>${arr[i]}</li>`);
  }
  return failureItems;
}

const failuresList = makeList(result.failure);
// ================================================================
const createPerson = (name, age, gender) => {
  return {
    // name: name,
    // age: age,
    // gender: gender
    name,
    age,
    gender,
  };
};
// ================================================================
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
bicycle.setGear(3);
console.log(bicycle.gear);
// ================================================================
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable("carrot");
console.log(carrot.name);
// ================================================================
class Thermostat {
  constructor(fahrenheit) {
    this._celsius = (5 / 9) * (fahrenheit - 32);
  }
  get temperature() {
    return this._celsius;
  }
  set temperature(celsius) {
    this._celsius = celsius;
  }
}

const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
// ================================================================
// Existem duas funções relacionadas a strings no editor. Exporte ambos usando o método de sua escolha.
// const uppercaseString = (string) => {
//   return string.toUpperCase();
// };

// const lowercaseString = (string) => {
//   return string.toLowerCase();
// };

// export { uppercaseString, lowercaseString };
// ================================================================
const uppercaseString = (string) => {
  return string.toUpperCase();
};

const lowercaseString = (string) => {
  return string.toLowerCase();
};

console.log(uppercaseString("hello!"));
console.log(lowercaseString("WORLD!"));
// ================================================================
// const makeServerRequest = new Promise((resolve, reject) => {
//   let responseFromServer;

//   // if (responseFromServer) {
//   //   resolve("We got the data");
//   // } else {
//   //   reject("Data not received");
//   // }
//   // return responseFromServer;

//   return responseFromServer
//     ? resolve("We got the data")
//     : reject("Data not received");
// });
// ================================================================
// Adicione o thenmétodo à sua promessa. Use resultcomo parâmetro de sua função de retorno de chamada e registre result-se no console.
const makeServerRequest1 = new Promise((resolve, reject) => {
  let responseFromServer = true;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
makeServerRequest1.then((result) => {
  console.log(result);
});
// ================================================================
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = false;

  // if (responseFromServer) {
  //   resolve("We got the data");
  // } else {
  //   reject("Data not received");
  // }

  return responseFromServer
    ? resolve("We got the data")
    : reject("Data not received");
});

makeServerRequest.catch((error) => {
  console.log(error);
});
