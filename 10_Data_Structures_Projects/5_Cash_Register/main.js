// Projete uma função de caixa registradora checkCashRegister() que aceite preço de compra como primeiro argumento (price), pagamento como segundo argumento (cash) e dinheiro na gaveta (cid) como terceiro argumento.

// cid é uma matriz 2D que lista a moeda disponível.

// A checkCashRegister() função sempre deve retornar um objeto com uma status chave e uma change chave.

// Devolva {status: "INSUFFICIENT_FUNDS", change: []} se o dinheiro na gaveta for menor que o troco devido ou se você não puder devolver o troco exato.

// Devolução {status: "CLOSED", change: [...]} com dinheiro na gaveta como valor da chave change se for igual ao troco devido.

// Caso contrário, retorne {status: "OPEN", change: [...]}, com o troco devido em moedas e cédulas, ordenadas do maior para o menor, conforme o valor da change chave.

function checkCashRegister(price, cash, cid) {
  const denominations = {
    "ONE HUNDRED": 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };

  let totalCash = cid.reduce((sum, item) => sum + item[1], 0);
  let changeDue = cash - price;
  let change = [];
  let status = "";

  if (totalCash < changeDue) {
    status = "INSUFFICIENT_FUNDS";
  } else if (totalCash == changeDue) {
    status = "CLOSED";
    change = cid;
  } else {
    for (let i = cid.length - 1; i >= 0; i--) {
      let denomination = cid[i][0];
      let denominationValue = denominations[denomination];
      let denominationAmount = cid[i][1];
      let count = 0;

      while (denominationAmount > 0 && changeDue >= denominationValue) {
        changeDue = Math.round((changeDue - denominationValue) * 100) / 100;
        denominationAmount =
          Math.round((denominationAmount - denominationValue) * 100) / 100;
        count++;
      }

      if (count > 0) {
        change.push([denomination, count * denominationValue]);
      }
    }

    if (changeDue > 0) {
      status = "INSUFFICIENT_FUNDS";
      change = [];
    } else {
      status = "OPEN";
    }
  }
  return { status: status, change: change };
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
