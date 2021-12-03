function getName(): string {
  return "hello my name is dandy";
}

console.log(getName());

function getAge(): number {
  return 23
}

console.log(getAge());

function printName(): void {
  console.log("print name");
}

// arguments

function multiply(val1: number, val2: number): number {
  return val1 * val2
}

const result = multiply(2, 6)
console.log(result);

// function as type
type Tambah = (val: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
  return val1 + val2;
}

console.log(Add(1, 5), "aaaa");

// default parameter
const fullName = (first: string, last: string = 'Raspudi'):string => {
  return first + ' ' + last;
}

console.log(fullName('Dandy'));
