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

function ascInsertSort(arr) {
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

function descInsertSort(arr) {
  for (let firstIndex = 1; firstIndex < arr.length; firstIndex++) {
    for (let i = firstIndex; i > 0; i--) {
      if (arr[i] > arr[i - 1]) {
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

function sortData(arr, cmd = "asc") {
  let stringArr = [];
  let numberArr = [];

  for (let characters of arr) {
    if (typeof characters === "string") {
      stringArr = [...stringArr, characters];
    } else if (typeof characters === "number") {
      numberArr = [...numberArr, characters];
    }
  }

  if (cmd === "desc") {
    numberArr = descInsertSort(numberArr);
    stringArr = descInsertSort(stringArr);
    return [...stringArr, ...numberArr];
  } else {
    numberArr = ascInsertSort(numberArr);
    stringArr = ascInsertSort(stringArr);
    return [...numberArr, ...stringArr];
  }
}

console.log("=====JAVASCRIPT TEST 3 ASC=====");
console.log(sortData(numeric));
console.log(sortData(string));
console.log(sortData(alphanumeric));

console.log("=====JAVASCRIPT TEST 3 DESC=====");
console.log(sortData(numeric, "desc"));
console.log(sortData(string, "desc"));
console.log(sortData(alphanumeric, "desc"));
