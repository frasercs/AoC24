const fs = require("fs");

const lines: string[] = [];

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  lines.push(...data.split("\n"));
  processLines();
});

function processLines() {
  const arrOne: number[] = [];
  const arrTwo: number[] = [];

  for (const line of lines) {
    const splitLine = line.split("   ");
    console.log(splitLine);
    arrOne.push(parseInt(splitLine[0]));
    arrTwo.push(parseInt(splitLine[1]));
  }

  arrOne.sort((a: number, b: number) => a - b);
  arrTwo.sort((a: number, b: number) => a - b);

  console.log(arrOne);

  const distArr: number[] = [];

  for (let i = 0; i < arrOne.length; i++) {
    distArr.push(Math.abs(arrOne[i] - arrTwo[i]));
  }

  console.log(distArr.reduce((a, b) => a + b, 0));
}
