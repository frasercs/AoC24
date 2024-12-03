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
fs.readFile("C:/Users/Administrator/AoC/src/day-3/input.txt", // for at work: "C:/Users/Administrator/AoC/src/day-3/input.txt" // for at home: /home/fraser/AoC24/src/day-3/input.txt
"utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    lines.push(data);
    processLines();
});
function processLines() {
    let sum = 0;
    const match = [];
    const nums = [];
    for (const line of lines) {
        if (line === "") {
            continue;
        }
        const regexp = /mul\(\d{1,3}\,\d{1,3}\)/g;
        match.push(line.match(regexp));
    }
    for (const mul of match[0]) {
        if (mul === "") {
            continue;
        }
        const regexp = /\(\d{1,3}\,\d{1,3}\)/g;
        nums.push(mul.match(regexp));
    }
    for (const num of nums) {
        const splitLine = (num.toString()).split(",");
        console.log(splitLine);
        sum += parseInt(splitLine[0].substring(1)) * parseInt(splitLine[1].substring(-1));
    }
    console.log(sum);
}
