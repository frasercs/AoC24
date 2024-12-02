import * as fs from "fs";

const lines: string[] = [];

fs.readFile(
  "/home/fraser/AoC24/src/day-2/input.txt",
  "utf8",
  (err: any, data: string) => {
    if (err) {
      console.error(err);
      return;
    }
    lines.push(...data.split("\n"));
    processLines();
  }
);

let count: number = 0;

function processLines() {
  for (const line of lines) {
    if (line === "") {
      continue;
    }
    const values = line.split(" ").map(Number);
    if (isSafe(values)) {
      count += 1;
    }
  }
  console.log(count);
}

function isSafe(values: number[]): boolean {
  let increasing = false;
  let decreasing = false;

  for (let i = 1; i < values.length; i++) {
    const diff = values[i] - values[i - 1];
    if (diff > 3 || diff < -3) {
      return false;
    }
    if (diff > 0) {
      decreasing = true;
    } else if (diff < 0) {
      increasing = true;
    } else {
      return false;
    }
  }

  if (increasing && decreasing) {
    return false;
  } else {
    return true;
  }
}
