let stringArr = ",Wulan,Raharjo,Widya,Yuda,Cinta,Iskandar,Hidayat,Kusuma,Indah,Jusuf,";

function newArr(strings) {
  let result = [];
  let string = "";
  for (let letter of strings) {
    if (letter === ",") {
      if(string.length) {
        result = [...result, string];
        string = "";
      }
    } else if(letter.match(/[a-zA-Z]+/)) {
      string += letter;
    }
  }
  return result;
}

function randomArr(num1, num2) {
  let newStringArr = newArr(stringArr)
  let result = [];
  for (let i = 0; i < num1; i++) {
    let namesToInput = [];
    for (let j = 0; j < num2; j++) {
      let randomIndex = Math.round(Math.random() * (newStringArr.length - 1 - 0));
      namesToInput = [...namesToInput, newStringArr[randomIndex]];
    }
    result = [...result, namesToInput.join(",")];
  }
  return result;
}

console.log("=====JAVASCRIPT TEST 2=====");
console.log(randomArr(2, 3));
