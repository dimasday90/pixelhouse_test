function randomArr(num1, num2) {
  let stringArr = [
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
  let result = [];
  for (let i = 0; i < num1; i++) {
    let namesToInput = [];
    for (let j = 0; j < num2; j++) {
      let randomIndex = Math.round(Math.random() * (stringArr.length - 1 - 0));
      namesToInput = [...namesToInput, stringArr[randomIndex]];
    }
    result = [...result, namesToInput.join(",")];
  }
  return result;
}

console.log("=====JAVASCRIPT TEST 2=====");
console.log(randomArr(2, 3));
