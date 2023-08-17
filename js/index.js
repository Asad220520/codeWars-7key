function removeDuplicates(arr) {
  const uniqueValues = [];
  const seenValues = {};

  for (const num of arr) {
    if (!seenValues[num]) {
      seenValues[num] = true;
      uniqueValues.push(num);
    }
  }

  return uniqueValues;
}
console.log(removeDuplicates([1, 2, 3, 1]));

function removeDuplicates(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}
console.log(removeDuplicates([1, 4, 2, 3, 1]));

// Преобразовать число в перевернутый массив цифр
// Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке.
// #1 способ
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}
console.log(digitize(223));
// #2 способ
function digitize2(n) {
  return String(n).split("").map(Number).reverse();
  // return (n + '').split("").map(Number).reverse();
}
console.log(digitize2(223));
