import * as fs from 'fs';

function processFile(filePath: string) {
    let sum: number = 0;
    let canDo: boolean = true;
    const regexp: RegExp = /mul\((\d{1,3}),(\d{1,3})\)/g;

    // Read the file content
    const content = fs.readFileSync(filePath, 'utf-8');

    let index = 0;

    while (index < content.length) {
        // Check for do() and don't() first to set the canDo flag
        if (content.substring(index, index + 4) === 'do()') {
            canDo = true;
            index += 4;
        } else if (content.substring(index, index + 7) === 'don\'t()') {
            canDo = false;
            index += 7;
        } else {
            // Only perform multiplication if canDo is true
            if (canDo) {
                regexp.lastIndex = index;
                const match = regexp.exec(content);
                if (match && match.index === index) {
                    const num1 = parseInt(match[1]);
                    const num2 = parseInt(match[2]);
                    sum += num1 * num2;
                    index += match[0].length;
                } else {
                    index++;
                }
            } else {
                index++;
            }
        }
    }

    console.log(sum);
}

// Call the function with the path to your file
processFile('src/day-3/input.txt');