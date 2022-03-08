//Symbols

const uniqueId = Symbol("Hello World");

Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();

while (true) {
  let { value, done } = it.next();

  if (done) {
    break;
  }
  console.log(value);
}