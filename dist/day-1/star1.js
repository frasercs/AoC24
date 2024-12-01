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
fs.readFile("/home/fraser/AoC24/src/day-1/input.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    lines.push(...data.split("\n"));
    processStar1Lines();
});
function processStar1Lines() {
    const arrOne = [];
    const arrTwo = [];
    for (const line of lines) {
        const splitLine = line.split("   ");
        console.log(splitLine);
        arrOne.push(parseInt(splitLine[0]));
        arrTwo.push(parseInt(splitLine[1]));
    }
    arrOne.sort((a, b) => a - b);
    arrTwo.sort((a, b) => a - b);
    console.log(arrOne);
    const distArr = [];
    for (let i = 0; i < arrOne.length; i++) {
        distArr.push(Math.abs(arrOne[i] - arrTwo[i]));
    }
    console.log(distArr.reduce((a, b) => a + b, 0));
}
