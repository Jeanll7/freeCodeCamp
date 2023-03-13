// No editor de código, as funções prepare Teae getTea já estão definidas para você. Chame a getTea função para obter 40 xícaras de chá para a equipe e armazene-as na tea4TeamFCC variável.
const prepareTea = () => "greenTea";

const getTea = (numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);
// console.table(tea4TeamFCC);
// ================================================================
// Prepare 27 xícaras de chá verde e 13 xícaras de chá preto e armazene-as em tea4GreenTeamFCCe tea4BlackTeamFCC variáveis, respectivamente. Observe que a getTea função foi modificada para que agora receba uma função como primeiro argumento.
const prepareGreenTea = () => "greenTea";

const prepareBlackTea = () => "blackTea";

const getTea1 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea1(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea1(prepareBlackTea, 13);

// console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);
// ================================================================
// Altere Window.prototype.tabClose para que remova a guia correta.
const Window = function (tabs) {
  this.tabs = tabs;
};

Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

Window.prototype.tabOpen = function (tab) {
  this.tabs.push("new tab");
  return this;
};

Window.prototype.tabClose = function (index) {
  const tabsBeforeIndex = this.tabs.splice(0, index);
  const tabsAfterIndex = this.tabs.splice(1);

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);

  return this;
};

const workWindow = new Window([
  "GMail",
  "Inbox",
  "Work mail",
  "Docs",
  "freeCodeCamp",
]);
const socialWindow = new Window([
  "FB",
  "Gitter",
  "Reddit",
  "Twitter",
  "Medium",
]);
const videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]);

const finalTabs = socialWindow
  .tabOpen()
  .join(videoWindow.tabClose(2))

  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
// ================================================================
// Preencha o código da função incrementer para que ela retorne o valor da variável global fixedValu e aumentado em um.
let fixedValue = 4;

function incrementer() {
  return fixedValue + 1;
}

console.log(fixedValue); //  Deve imprimir 4
console.log(incrementer()); // Deve ser igual a 5
// ================================================================
// Escreva a incrementer função para que ela receba um argumento(value) e, em seguida, retorne um resultado após aumentar o valor em um.
// Tente passar o argumento(value) para a função e retorne o valor aumentado desse argumento.
let fixedValue1 = 6;

// argumento(value)
function incrementer1(value) {
  return value + 3;
}

let differentValue = incrementer1(fixedValue);
console.log(fixedValue1);
// ================================================================
// Nota: Ambas as funções devem retornar uma matriz e quais quer novos parâmetros devem ser adicionados antes do bookName parâmetro.
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

function add(arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName);
  return newArr;
}

function remove(arr, bookName) {
  let newArr = [...arr];
  return newArr.indexOf(bookName) >= 0
    ? newArr.splice(newArr.indexOf(bookName), 1)
    : newArr;
}
// console.log(bookList);

// clean code

const bookList0 = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

function add(list, bookName) {
  return [...list, bookName];
}

function remove(list, bookName) {
  return list.filter((book) => book !== bookName);
}

console.table(bookList0);
// ================================================================
// A watchList matriz contém objetos com informações sobre vários filmes. Use mapon watchList para atribuir uma nova matriz de objetos à ratings variável. Cada filme na nova matriz deve ter apenas uma title chave com o nome do filme e uma rating chave com a classificação do IMDB. O código no editor atualmente usa um forloop para fazer isso, então você deve substituir a funcionalidade do loop pela sua map expressão.
const watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
];

const ratings = watchList.map((movie) => {
  return {
    title: movie.Title,
    genres: movie.Genre,
  };
});

console.table(ratings);
// ================================================================
// Escreva o seu próprio Array.prototype.myMap(), que deve se comportar exatamente como Array.prototype.map(). Você não deve usar o método interno map. A Arrayinstância pode ser acessada no myMapmétodo usando this.

Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};
// ================================================================
// Veja abaixo um exemplo usando o filter método na users matriz para retornar uma nova matriz contendo apenas os usuários com menos de 30 anos. Para simplificar, o exemplo usa apenas o primeiro argumento do retorno de chamada.
const watchList1 = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
];

const filteredList = watchList
  .filter((movie) => movie.imdbRating >= 8.0)
  .map((movie) => ({ title: movie["Title"], rating: movie["imdbRating"] }));

console.log(filteredList);
console.clear();
// ================================================================
// Escreva o seu próprio Array.prototype.myFilter(), que deve se comportar exatamente como Array.prototype.filter(). Você não deve usar o método interno filter. A Arrayinstância pode ser acessada no myFiltermétodo usando this.
Array.prototype.myFilter = function (callback) {
  const newArray = [];
  for (const [index, elem] of this.entries()) {
    if (callback(elem, index, this)) newArray.push(elem);
  }
  return newArray;
};
// ================================================================
// Use o slice método na sliceArray função para retornar parte do anim array dado o fornecido beginSlicee endSliceos índices. A função deve retornar um array.
function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
console.table(sliceArray(inputAnim, 1, 3));
// ================================================================
// Reescreva a função nonMutatingSplice usando slice em vez de splice. Ele deve limitar o cities array fornecido a um comprimento de 3 e retornar um novo array com apenas os três primeiros itens.

function nonMutatingSplice(cities) {
  return cities.splice(1, 3);
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.table(nonMutatingSplice(inputCities));
// ================================================================
// Use o concat método na nonMutatingConcat função para concatenar attach ao final de original. A função deve retornar o array concatenado.
function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingConcat(first, second));
// ================================================================
// Altere a nonMutatingPush função para que ela use concat para mesclar newItemao final original sem mutação original ou newItem arrays. A função deve retornar um array.
function nonMutatingPush(original, newItem) {
  // return original.push(newItem);
  return original.concat(newItem);
}

const first1 = [1, 2, 3, 4];
const second1 = [5, 6, 7, 8];
nonMutatingPush(first1, second1);
console.log(nonMutatingPush(first1, second1));
// ================================================================
// A variável watchListcontém um array de objetos com informações sobre diversos filmes. Use reducepara encontrar a classificação média do IMDB dos filmes dirigidos por Christopher Nolan. Lembre-se de desafios anteriores de como obter filterdados e mapsobre eles para extrair o que você precisa. Pode ser necessário criar outras variáveis ​​e retornar a classificação média da getRatingfunção. Observe que os valores de classificação são salvos como strings no objeto e precisam ser convertidos em números antes de serem usados ​​em qualquer operação matemática.
const watchList2 = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
];

function getRating(watchList2) {
  const nolanData = watchList2.reduce(
    (data, { Director: director, imdbRating: rating }) => {
      if (director === "Christopher Nolan") {
        data.count++;
        data.sum += Number(rating);
      }
      return data;
    },
    { sum: 0, count: 0 }
  );
  const averageRating = nolanData.sum / nolanData.count;
  return averageRating;
}

console.log(getRating(watchList2));
// ================================================================
// Complete o código para a squareList função usando qualquer combinação de map(), filter()e reduce(). A função deve retornar uma nova matriz contendo os quadrados apenas dos inteiros positivos (números decimais não são inteiros) quando uma matriz de números reais é passada para ela. Um exemplo de uma matriz de números reais é [-3, 4.8, 5, 3, -3.2].
const squareList = (arr) => {
  return arr.reduce((sqrIntegers, num) => {
    return Number.isInteger(num) && num > 0
      ? sqrIntegers.concat(num * num)
      : sqrIntegers;
  }, []);
};

// const squareList = (arr) =>
//   arr.filter((num) => Number.isInteger(num) && num > 0).map((num) => num * num);

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
// ================================================================
// Use o sortmétodo na alphabeticalOrder função para classificar os elementos arr em ordem alfabética. A função deve retornar o array classificado.
function alphabeticalOrder(arr) {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
// ================================================================
// Função para classificar os elementos arr em ordem numérica
function alphabeticalOrder1(arr) {
  return arr.sort((a, b) => a.localeCompare(b));
}

console.log(alphabeticalOrder1(["a", "d", "c", "a", "z", "g", "w", "y"]));
console.clear();
// ================================================================
// Função para classificar os elementos arr em ordem numérica
function alphabeticalOrder2(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(alphabeticalOrder2([12, 7, 15, 10, 33, 22, 18, 37]));
// ================================================================
// Use o sort método na nonMutatingSort função para classificar os elementos de uma matriz em ordem crescente. A função deve retornar uma nova matriz e não alterar a globalArray variável.
const globalArray = [5, 6, 3, 2, 9, 11, 22, 8];

function nonMutatingSort(arr) {
  return arr.slice().sort((a, b) => {
    return a - b;
  });

  // return arr.sort((a, b) => a - b);
}

console.log(nonMutatingSort(globalArray));
// ================================================================
// Use o split método dentro da splitify função para dividir str em uma matriz de palavras. A função deve retornar o array. Observe que as palavras nem sempre são separadas por espaços e a matriz não deve conter pontuação.
function splitify(str) {
  return str.split(/\W/);
}

console.log(splitify("Hello World,I-am code"));
// ================================================================
// Use o join método (entre outros) dentro da sentensify função para fazer uma frase com as palavras da string str. A função deve retornar uma string. Por exemplo, I-like-Star-Warsseria convertido para I like Star Wars. Para este desafio, não use o replace método.
function sentensify(str) {
  return str.split(/\W/).join(" ");
}

console.log(sentensify("May-the-force-be-with-you"));
// ================================================================
// Preencha a urlSlug função para que ela converta uma string titlee retorne a versão hifenizada da URL. Você pode usar qualquer um dos métodos abordados nesta seção e não usar replace. Aqui estão os requisitos:
//A entrada é uma string com espaços e palavras entre maiúsculas e minúsculas
// A saída é uma string com os espaços entre as palavras substituídos por um hífen ( - )
// A saída deve ser todas as letras minúsculas
// A saída não deve ter nenhum espaço
function urlSlug(title) {
  return title
    .toLowerCase()
    .split(" ")
    .filter((word) => word !== "")
    .join("-");
}
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
// ================================================================
// Use o every método dentro da checkPositive função para verificar se todos os elementos arr são positivos. A função deve retornar um valor booleano.
function checkPositive(arr) {
  return arr.every((val) => val > 0);
}

console.log(checkPositive([1, 2, 3, -4, 5])); // false
console.log(checkPositive([1, 2, 3, 4, 5])); // true
// ================================================================
// Use o some método dentro da checkPositive função para verificar se algum elemento em arr é positivo. A função deve retornar um valor booleano.
function checkPositive1(arr) {
  return arr.some((val) => val > 0);

  // return arr.every((value) => {
  //   return value > 0;
  // });  outo método com every
}

console.log(checkPositive1([1, 2, 3, -4, 5]));
// ================================================================
// Preencha o corpo da add função para que ela use currying para adicionar parâmetros x, y e z.
function add(x) {
  return (y) => (z) => x + y + z;

  // return function (y) {
  //   return function (z) {
  //     return x + y + z;
  //   };
  // };
}

console.log(add(10)(20)(30));
