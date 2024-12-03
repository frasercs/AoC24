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
  const regexp: RegExp = /mul\((\d{1,3}),(\d{1,3})\)/g;

  for (const line of lines) {
    if (line === "") {
      continue;
    }

    let match;
    while ((match = regexp.exec(line)) !== null) {
      const num1 = parseInt(match[1]);
      const num2 = parseInt(match[2]);
      sum += num1 * num2;
    }
  }

  console.log(sum);
}