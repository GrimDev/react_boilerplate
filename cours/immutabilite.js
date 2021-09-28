// Petit point sur l'immutabilité

const constante = 'Je suis immutable';

// On ne peut pas réassigner une constante
constante = 'Ceci est interdit';

let tableau = [];
const objets = {};

// NB: En js, un tableau, c'est un objet, c'est juste que les clés sont 0, 1, 2 ...

const tableau1 = tableau;

tableau.push('Bonjour');
objets.test = 'Bonjour';

console.log(tableau1 === tableau); // TRUE

tableau = [...tableau1, 'Bonjour'];

console.log(tableau1 === tableau); // FALSE

// Dans les méthodes que vu utilisez, vérifiez toujours si elle mute (mutate)

map; // ça mute pas
slice; // ça mute pas
splice; // ça mute

// Rest et spread

const object2 = {
  a: 1,
  b: 2,
  c: 3,
};

const { a, ...rest } = object2;
// a = 1
// rest = { b: 2, c: 3 }

const array2 = [1, 2, 3];

const [i, ...other] = array2;
// i = 1
// other = [2, 3]

const test = {
  ...object2,
  b: 4,
  d: 5,
};

/*
  {
    a: 1,
    b: 4,
    c: 3,
    d: 5
  }
*/
