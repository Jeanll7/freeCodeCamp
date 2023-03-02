// Crie um dogobjeto com propriedades namee numLegse defina-os como uma string e um número, respectivamente.
let dog = {
  name: "Aflac",
  numLegs: 2,
};

console.log(dog);
// ================================================================
// Imprima ambas as propriedades do dogobjeto em seu console.
let dog1 = {
  name: "Spot",
  numLegs: 4,
};

console.log(dog1.name);
console.log(dog1.numLegs);
// ================================================================
// Usando o dogobjeto, dê a ele um método chamado sayLegs. O método deve retornar a fraseThis dog has 4 legs.
let dog2 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return `This dog has ${this.numLegs} legs.`;
  },
};

console.log(dog2.sayLegs());
// ================================================================
// Uma maneira de evitar esses problemas é com a this palavra-chave
// Modifique o dog3.sayLegs método para remover quaisquer referências a dog. Use o duck exemplo para orientação.
let dog3 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};
// ================================================================
// Crie um construtor, Dog, com propriedades name, color, e numLegsque sejam definidas como uma string, uma string e um número, respectivamente.
function Dog() {
  this.name = "Rufus";
  this.color = "gray";
  this.numLegs = 4;
}
// ================================================================
// Use o Dog1 construtor da última lição para criar uma nova instância de Dog, atribuindo-a a uma variável hound.
function Dog1() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

let hound = new Dog1();
console.table(hound);
// ================================================================
// Crie outro Dogconstrutor. Desta vez, configure-o para receber os parâmetros namee color, e tenha a propriedade numLegsfixada em 4. Em seguida, crie um novo Dogsalvo em uma variável terrier. Passe duas strings como argumentos para as propriedades namee color.
function Dog2(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog2("Terrier", "Brown");
// ================================================================
// Crie uma nova instância do House construtor, chamando-a myHouse e passando por vários quartos. Em seguida, use instanceofpara verificar se é uma instância de House.
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(5);
myHouse instanceof House;
console.log(myHouse instanceof House);
console.clear();
// ================================================================
// Adicione as próprias propriedades de canary ao array ownProps.
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
// ================================================================
// Adicionar uma numLegs propriedade ao prototype de Dog
function Dog3(name) {
  this.name = name;
}

Dog3.prototype.numLegs = 4;
let beagle = new Dog3("Snoopy");
console.log(beagle);
// ================================================================
// Adicione todas as propriedades próprias de beagleao array ownProps. Adicione todas as prototypepropriedades de Dogà matriz prototypeProps.
function Dog4(name) {
  this.name = name;
}

Dog4.prototype.numLegs = 4;

let beagle1 = new Dog4("Snoopy");

let ownProps1 = [];
let prototypeProps = [];

for (let property in beagle1) {
  beagle1.hasOwnProperty(property)
    ? ownProps1.push(property)
    : prototypeProps.push(property);

  // if (beagle1.hasOwnProperty(property)) {
  //   ownProps1.push(property);
  // } else {
  //   prototypeProps.push(property);
  // }
}

console.log(ownProps1);
console.log(prototypeProps);
// ================================================================
// Escreva uma joinDogFraternity função que receba um candidate parâmetro e, usando a constructor propriedade, retorne true se o candidato for um Dog, caso contrário retorne false.
function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  // return candidate.constructor === Dog ? true : false;

  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

console.log(joinDogFraternity(name));
// ================================================================
// Adicione a propriedade numLegse os dois métodos eat() e describe() ao prototypede Dog definindo o prototype para um novo objeto.
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

console.log(Dog.prototype);
// ================================================================
// Defina a constructor propriedade no arquivo Dog prototype.
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function () {
    console.log("nom nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

console.log(Dog.prototype);
// ================================================================
// Use isPrototypeOf para verificar o prototy pede beagle.
function Dog(name) {
  this.name = name;
}

let beagle2 = new Dog("Snoopy");

console.log(Dog.prototype.isPrototypeOf(beagle2));
// ================================================================
// Modifique o código para mostrar a cadeia de protótipo correta.
function Dog(name) {
  this.name = name;
}

let beagle3 = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle3);

Object.prototype.isPrototypeOf(Dog.prototype);
// ================================================================
// O eat método é repetido em ambos Cat e Bear. Edite o código no espírito do DRY movendo o eat método para o arquivo Animal supertype.
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};
// ================================================================
// Use Object.createpara criar duas instâncias de Animalnamed ducke beagle.
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

let duck = Object.create(Animal.prototype);
let beagle4 = Object.create(Animal.prototype);

duck.eat();
beagle4.eat();
// ================================================================
// Modifique o código para que as instâncias de Dogherdem de Animal.
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

let beagle5 = new Dog();
beagle5.eat();
// ================================================================
// Corrija o código duck.constructore beagle.constructor retorne seus respectivos construtores.
function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck1 = new Bird();
let beagle6 = new Dog();
console.clear();
// ================================================================
// Adicione todo o código necessário para que o Dog objeto herde Animale o Dog construtor de prototype seja definido como Dog. Em seguida, adicione um bark() método ao Dog objeto para que beagle ambos eat()e bark(). O bark() método deve ser impresso Woof! no console.
function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log("Woof!");
};

let beagle7 = new Dog();

beagle7.eat();
beagle7.bark();
// ================================================================
// Substitua o fly() método for Penguin para que ele retorne a string Alas, this is a flightless bird.
function Bird() {
  Bird.prototype.fly = () => {
    return "I am flying!";
  };
}

function Penguin() {
  Penguin.prototype = Object.create(Bird.prototype);
  Penguin.prototype.constructor = Penguin;
}

Penguin.prototype.fly = () => "Alas, this is a flightless bird.";
// Penguin.prototype.fly = function() {
//   return 'Alas, this is a flightless bird.'
// }

let penguin = new Penguin();
console.log(penguin.fly());
// ================================================================
// Crie um mixin chamado glideMixinque defina um método chamado glide. Em seguida, use o glideMixin para dar ambos birde boata capacidade de deslizar.
let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

let glideMixin = (obj) => {
  obj.glide = () => console.log("Gliding!");
};

glideMixin(bird);
glideMixin(boat);
// ================================================================
// Altere como weight é declarado na Bird função para que seja uma variável privada. Em seguida, crie um método getWeight que retorne o valor de weight 15.
function Bird() {
  let weight = 15;

  // this.getWeight = () => weight;
  this.getWeight = function () {
    return weight;
  };
}
// ================================================================
// Reescreva a função makeNest e remova sua chamada para que seja uma expressão de função imediatamente invocada anônima (IIFE).
// (function makeNest() {
(function () {
  console.log("A cozy nest is ready");
})();

// makeNest(); // A função deve então ser colocada entre parênteses com outro conjunto de parênteses no final para chamar imediatamente a função.
// ================================================================
// Crie um módulo nomeado funModule para agrupar os dois mixins isCuteMixin e singMixin. funModule deve retornar um objeto.
// let isCuteMixin = function (obj) {
//   obj.isCute = function () {
//     return true;
//   };
// };
// let singMixin = function (obj) {
//   obj.sing = function () {
//     console.log("Singing to an awesome tune");
//   };
// };  fazer modificações

let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    },
  };
})();
