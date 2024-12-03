import * as fs from "fs";

const lines: string[] = [];

fs.readFile(
  "C:/Users/Administrator/AoC/src/day-3/input.txt", // for at work: "C:/Users/Administrator/AoC/src/day-3/input.txt" // for at home: /home/fraser/AoC24/src/day-3/input.txt
  "utf8",
  (err: any, data: string) => {
    if (err) {
      console.error(err);
      return;
    }
    lines.push(data);
    processLines();
  }
);

function processLines() {
    let sum: number = 0;
    const match = [];
    const nums = [];
  for (const line of lines) {
    if (line === "") {
      continue;
    }
    const regexp: RegExp = /mul\(\d{1,3}\,\d{1,3}\)/g;
    match.push(line.match(regexp));
  }
  for (const mul of match[0]!) {
    if (mul === "") {
        continue;
    }
    const regexp: RegExp = /\(\d{1,3}\,\d{1,3}\)/g;
    nums.push(mul.match(regexp));
  }

  for (const num of nums!) {
    const splitLine = (num!.toString()).split(",");
    console.log(splitLine);
    sum += parseInt(splitLine[0].substring(1)) * parseInt(splitLine[1].substring(-1));
  }

  console.log(sum);
}
