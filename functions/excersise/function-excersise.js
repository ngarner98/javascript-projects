
function makeLine(size) {
    let output = '';
    for (let i = 0; i < size; i++) {
        output += '#';
    }
    return output;
}

console.log(makeLine(5));

// function makeSquare(size) {
//     let output = '';
//     for (let i = 0; i < size; i++) {
//          output += '\n';
//         for (let j = 0; j < size; j++) {   
//             output += '#';        
//         } 
//     }
//     return output;
// }

function makeSquare(size) {
    let output = '';
    output += makeRectangle(size, size);
    return output;
}

console.log(makeSquare(5));

function makeRectangle(width, height) {
    let output = '';
    for (let i = 0; i < height; i++) {
        output += '\n';
        output += makeLine(width);
    }
    return output;
} 

console.log(makeRectangle(5, 3));

function makeDownwardStairs(height) {
    let output = '';
    for (let i = 0; i < height; i++) {
        output += '\n'
        output += makeLine(i + 1);
    }
    return output;
}

console.log(makeDownwardStairs(5));


function makeSpaceLine(numSpaces, numChars) {
    let output = '';
    for (let i = 0; i < numSpaces; i++) {
        output += ' ';
    }
    for (let i = 0; i < numChars; i++) {
            output += '#';
    }
    for (let i = 0; i < numSpaces; i++) {
        output += ' ';
    }
    return output;
}

console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
    output = '';
    for (let i = 0; i < height; i++) {
        output += '\n';
        output += makeSpaceLine(height - i - 1, 2 * i + 1);
    }
    return output;
}

console.log(makeIsoscelesTriangle(5));

function makeDiamond(height) {
    output = '';
    output += makeIsoscelesTriangle(height)
    for(let i = height-1; i >= 0; i--) {
        output += '\n';
        output += makeSpaceLine(height - i - 1, 2 * i + 1);
    }
    return output;
}

console.log(makeDiamond(5));
