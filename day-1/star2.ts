import fs from "fs";

const inputLines: string[] = [];

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  inputLines.push(...data.split("\n"));
  processLines();
});

function processLines(): void {
  const arrOne: number[] = [];
  const arrTwo: number[] = [];

  for (const line of inputLines) {
    const splitLine = line.split("   ");
    arrOne.push(parseInt(splitLine[0]));
    arrTwo.push(parseInt(splitLine[1]));
  }

  const occurences: { [key: number]: number } = {};

  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] in occurences) {
      occurences[arrOne[i]] += arrTwo.filter((x) => x === arrOne[i]).length;
    } else {
      occurences[arrOne[i]] = arrTwo.filter((x) => x === arrOne[i]).length;
    }
  }

  let sum: number = 0;
  for (const [key, value] of Object.entries(occurences)) {
    sum += Number(key) * value;
  }

  console.log(sum);
}
