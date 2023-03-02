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
// Escreva a incrementer função para que ela receba um argumento e, em seguida, retorne um resultado após aumentar o valor em um.
let fixedValue1 = 4;

function incrementer1() {
  // Only change code above this line
}
