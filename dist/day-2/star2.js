"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const lines = [];
fs.readFile("/home/fraser/AoC24/src/day-2/input.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    lines.push(...data.split("\n"));
    processLines();
});
let count = 0;
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
function isSafe(values, testing) {
    let increasing = false;
    let decreasing = false;
    for (let i = 1; i < values.length; i++) {
        const diff = values[i] - values[i - 1];
        if (diff > 3 || diff < -3) {
            if (!testing) {
                const test = values;
                test.splice(i, 1);
                if (isSafe(test, true)) {
                    return true;
                }
                else {
                    return false;
                }
            }
            return false;
        }
        if (diff > 0) {
            if (decreasing && !testing) {
                const test = values;
                //remove the value that is causing the issue
                test.splice(i, 1);
                //check if the array is still decreasing
                if (isSafe(test, true)) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else if (decreasing) {
                return false;
            }
            else {
                increasing = true;
            }
        }
        else if (diff < 0) {
            if (increasing && !testing) {
                const test = values;
                //remove the value that is causing the issue
                test.splice(i, 1);
                //check if the array is still increasing
                if (isSafe(test, true)) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else if (increasing) {
                return false;
            }
            else {
                decreasing = true;
            }
        }
        else {
            if (!testing) {
                const test = values;
                //remove the value that is causing the issue
                test.splice(i, 1);
                //check if the array now works
                if (isSafe(test, true)) {
                    return true;
                }
                else {
                    return false;
                }
            }
            return false;
        }
    }
    if (increasing && decreasing) {
        return false;
    }
    else {
        return true;
    }
}