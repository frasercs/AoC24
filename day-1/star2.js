const fs = require("fs");

const lines = [];

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  lines.push(...data.split("\n"));
  processLines();
});

function processLines() {
  const arrOne = [];
  const arrTwo = [];

  for (const line of lines) {
    const splitLine = line.split("   ");
    arrOne.push(parseInt(splitLine[0]));
    arrTwo.push(parseInt(splitLine[1]));
  }

  const occurences = {};

  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] in occurences) {
      occurences[arrOne[i]] += arrTwo.filter((x) => x === arrOne[i]).length;
    } else {
      occurences[arrOne[i]] = arrTwo.filter((x) => x === arrOne[i]).length;
    }
  }

  let sum = 0;
  for (const [key, value] of Object.entries(occurences)) {
    sum += key * value;
  }

  console.log(sum);
}
