let numeric = [10, 9, 102, 66, 5421, 1, 0];
let string = [
  "Wulan",
  "Raharjo",
  "Widya",
  "Yuda",
  "Cinta",
  "Iskandar",
  "Hidayat",
  "Kusuma",
  "Indah",
  "Jusuf",
];
let alphanumeric = [
  "Wulan",
  "Raharjo",
  "Widya",
  10,
  9,
  102,
  66,
  5421,
  1,
  0,
  "Yuda",
  "Cinta",
  "Iskandar",
  "Hidayat",
  "Kusuma",
  "Indah",
  "Jusuf",
];

function insertSort(arr) {
  for (let firstIndex = 1; firstIndex < arr.length; firstIndex++) {
    for (let i = firstIndex; i > 0; i--) {
      if (arr[i] < arr[i - 1]) {
        let swap = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = swap;
      } else {
        break;
      }
    }
  }
  return arr;
}

function ascSortData(arr) {
  let stringArr = [];
  let numberArr = [];

  for (let characters of arr) {
    if (typeof characters === "string") {
      stringArr = [...stringArr, characters];
    } else if (typeof characters === "number") {
      numberArr = [...numberArr, characters];
    }
  }

  stringArr = insertSort(stringArr);
  numberArr = insertSort(numberArr);

  return [...numberArr, ...stringArr];
}

console.log("=====JAVASCRIPT TEST 3=====");
console.log(ascSortData(numeric));
console.log(ascSortData(string));
console.log(ascSortData(alphanumeric));
