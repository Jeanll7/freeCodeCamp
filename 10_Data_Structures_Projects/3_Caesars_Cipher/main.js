// Uma das cifras mais simples e mais conhecidas é a cifra de César , também conhecida como cifra de deslocamento . Em uma cifra de deslocamento, os significados das letras são alterados por um determinado valor.
// Um uso moderno comum é a cifra ROT13 , onde os valores das letras são deslocados em 13 casas. Assim A ↔ N, B ↔ Oe assim por diante.
// Escreva uma função que receba uma string codificada ROT13 como entrada e retorne uma string decodificada.
// Todas as letras serão maiúsculas. Não transforme nenhum caractere não alfabético (ou seja, espaços, pontuação), mas passe adiante.

function rot13(str) {
  let decodedArr = [];

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      charCode -= 13;
      if (charCode < 65) {
        charCode += 26;
      }
    }
    decodedArr.push(String.fromCharCode(charCode));
  }
  return decodedArr.join("");
}

console.log(rot13("SERR PBQR PNZC"));

// clean code
function rot14(str) {
  return str.replace(/[A-Z]/g, (char) =>
    String.fromCharCode((char.charCodeAt(0) % 26) + 65)
  );
}

console.log(rot14("SERR YBIR?"));
