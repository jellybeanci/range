// single parameter means to

// range`[{${start}..${end}]` haskell style 2 args
// range`[${first}, {${second}..${end}]` 3 args


// λaskell style

function int(x) {
  return ~~x; // TODO @jellybeanci/int
}

function abs(num: number): number {
  return num < 0 ? num * -1 : num;
}

function operatorFactory(step: number) {
  return step > 0
      ? (index: number, value: number) => index <= value
      : (index: number, value: number) => index >= value;
}

function estimateLenght(start: number, step: number, end: number): number {
  return int(abs(end - start) / abs(step)) + 1;
}

export function haskellRange(first: number, second: number, last: number) {
  if (first >= second || second >= last) throw Error("Order Error!");
  const step = second - first;
  const op = operatorFactory(step);
  const result: number[] = Array(estimateLenght(first, step, last));
  for (let current = first, i = 0; op(current, last); current += step, i++) {
    result[i] = current;
  }
  return result;
}

console.log(haskellRange(1, 1.2, 10));
//
// export function range(first: number, second?: number, last?: number) {
//   // 1 arg means start with 0 and end with first, step size 1
//   // 2 args means start with first, end with second, step size 1
//   // 3 args means start with first end with last, step size second - first
//   if (second === undefined) {
//     // single arg
//     return haskellRange(0, Math.sign(first), first)
//   }
//   if (last === undefined) {
//     const step = first < second ? 1 : -1;
//     return haskellRange(first, step, second)
//   }
//   return haskellRange(first, second, last);
// }
//
//
// console.log(range(10))
// console.log(range(5, 20))
// console.log(range(1.1, 1.2, 3.5));
