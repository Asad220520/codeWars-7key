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

// 1 Преобразовать число в перевернутый массив цифр
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

// 2 Банкоматы позволяют использовать 4- или 6-значные PIN-коды, а PIN-коды не могут содержать ничего, кроме ровно 4 или ровно 6 цифр.

// Если функции передана допустимая строка PIN-кода, верните true, иначе верните false.
function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }

  return /^\d+$/.test(pin);
}
console.log(validatePIN("1333"));

var twoSum = function (nums, target) {
  const numIndices = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numIndices) return [numIndices[complement], i];
    numIndices[nums[i]] = i;
  }

  return [];
};

const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log(result); // [0, 1], так как nums[0] + nums[1] = 2 + 7 = 9

const palinNum = (n) => {
  let res = n
    .toString()
    .toLowerCase()
    .replace(/[ ,.!?-]/g, "");
  return res === res.split("").reverse().join("");
};
console.log(palinNum(-21));

var addTwoNumbers = function (l1, l2) {
  let num1 = parseInt(l1.reverse().join(""));
  let num2 = parseInt(l2.reverse().join(""));

  let sum = num1 + num2;
  let result = sum.toString().split("").reverse().map(Number);

  return result;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));


function squareSum(numbers) {
  return Math.pow(+numbers);
}
console.log(squareSum(3));