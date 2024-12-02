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
    if (isSafe(values, false)) {
      count += 1;
    }
  }
  console.log(count);
}

function isSafe(values: number[], alreadyFailed: boolean): boolean | undefined {
  let increasing = false;
  let decreasing = false;

  for (let i = 1; i < values.length; i++) {
    const diff = values[i] - values[i - 1];
    if (diff > 3 || diff < -3) {
      if (!alreadyFailed) {
        const testValues = values;
        testValues.splice(i, 1);
        if (isSafe(testValues, true)) {
          return true;
        } else {
          return false;
        }
      }
      return false;
    }

    if (diff > 0) {
      increasing = true;
      if (decreasing && !alreadyFailed) {
        const testValues = values.slice();
        const testValuesnless1 = values.slice();
        testValuesnless1.splice(i - 1, 1);
        testValues.splice(i, 1);
        if (isSafe(testValues, true)) {
          return true;
        } else {
          if (isSafe(testValuesnless1, true)) {
            return true;
          } else {
            return false;
          }
        }
      } else if (decreasing) {
        return false;
      }
    } else if (diff < 0) {
      decreasing = true;
      if (increasing && !alreadyFailed) {
        const testValues = values.slice();
        const testValuesnless1 = values.slice();
        testValuesnless1.splice(i - 1, 1);
        testValues.splice(i, 1);
        if (isSafe(testValues, true)) {
          return true;
        } else {
          if (isSafe(testValuesnless1, true)) {
            return true;
          } else {
            return false;
          }
        }
      } else if (increasing) {
        return false;
      }
    } else {
      if (!alreadyFailed) {
        const testValues = values.slice();
        const testValuesnless1 = values.slice();
        testValuesnless1.splice(i - 1, 1);
        testValues.splice(i, 1);
        if (isSafe(testValues, true)) {
          return true;
        } else {
          if (isSafe(testValuesnless1, true)) {
            return true;
          } else {
            return false;
          }
        }
      }
    }

    if (increasing && decreasing) {
      return false;
    } else {
      return true;
    }
  }
}
