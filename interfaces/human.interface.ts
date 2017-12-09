interface Human {
  name: string,
  age: number,
  height: number,
  weight: number,
  bmi: () => void
}

const human = new Human();

