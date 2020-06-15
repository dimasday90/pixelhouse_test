function palindrome(value) {
  while (true) {
    let alphanumeric = "0123456789abcdefghijklmnopqrstuvwxyz";
    let random = "";
    let randomReverse = "";
    for (let i = 0; i < value; i++) {
      let randomIndex = Math.round(Math.random() * (alphanumeric.length - 1));
      random += alphanumeric[randomIndex];
    }
    for (let j = random.length - 1; j >= 0; j--) {
      randomReverse += random[j];
    }
    if (random === randomReverse) {
      return random;
    }
  }
}

console.log("=====JAVASCRIPT TEST 1=====");
console.log(palindrome(5));
