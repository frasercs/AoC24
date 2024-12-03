"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const lines = [];
fs.readFile("/home/fraser/AoC24/src/day-1/input.txt", // for at work: "C:/Users/Administrator/AoC/src/day-1/input.txt"
"utf8", (err, data) => {
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
        if (line === "") {
            continue;
        }
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
