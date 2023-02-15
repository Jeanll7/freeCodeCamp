function hello(name) {
  let welcome = `Bem-vindo ${name}`;
  write(welcome, 1);
}

function write(phrase, type) {
  switch (type) {
    case 1:
      console.log(phrase);
      break;
    case 2:
      alert(phrase);
    default:
      document.write(phrase);
  }
}

hello("Jean");
// ================================================================
// Use o console.log()método para imprimir o valor da variável aonde anotado no código.
let a = 5;
let b = 1;
a++;

let sumAB = a + b;
console.log(a);
// ================================================================
// Depois disso, use console.log para registrar a outputvariável. Visualize os dois consoles para ver o log. Por fim, use console.clear após seu log para limpar o console do navegador. Veja a diferença nos dois consoles.
let output =
  "Get this to show once in the freeCodeCamp console and not at all in the browser console";

console.log(output);
console.clear();
