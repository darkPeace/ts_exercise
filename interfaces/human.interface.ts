interface Human {
  name: string,
  age: number
}

/**
* interface use case
**/

/**
* instead of having thie
**/
function human(human:{name: string, age: number}): void {
  console.log(human);
}

/**
* its better if we use this instead
**/
function anotherHuman(human:Human): void {
  console.log(human);
  
}

let man1: Human = {
  name: 'apis',
  age: 39
}

human(man1)
anotherHuman(man1)