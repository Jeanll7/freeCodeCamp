// Retorna truese a string fornecida for um palíndromo. Caso contrário, retorne false.
// Um palíndromo é uma palavra ou frase que é escrita da mesma maneira para frente e para trás, ignorando pontuação, maiúsculas e minúsculas e espaçamento.
// Observação: você precisará remover todos os caracteres não alfanuméricos (pontuação, espaços e símbolos) e colocar tudo no mesmo formato (maiúsculas ou minúsculas) para verificar os palíndromos.
// Passaremos strings com formatos variados, como racecar, RaceCar, e race CARentre outros.
// Também passaremos strings com símbolos especiais, como 2A3*3a2, 2A3 3a2e 2_A3*3#A2.

function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  for (var i = 0, len = str.length - 1; i < len / 2; i++) {
    if (str[i] !== str[len - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome("1 eye for of 1 eye."));
