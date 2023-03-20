// Para este desafio, você receberá uma string como 800-692-7753ou 8oo-six427676;laskdjf. Seu trabalho é validar ou rejeitar o número de telefone dos EUA com base em qualquer combinação dos formatos fornecidos acima. O código de área é obrigatório. Se o código do país for fornecido, você deve confirmar se o código do país é 1. Retorne true se a string for um número de telefone válido nos EUA; caso contrário, retorne false.

function telephoneCheck(str) {
  let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
    rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

  return rex1.test(str) ? true : rex2.test(str) ? true : false;
}

console.log(telephoneCheck("555-555-555")); // false

// clean code
function telephoneCheck(str) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  return regex.test(str);
}

console.log(telephoneCheck("555-555-5555")); // true
