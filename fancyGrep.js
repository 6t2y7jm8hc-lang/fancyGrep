const fs = require('fs');

const word = process.argv[2];
const filename = process.argv[3];

if (word == undefined || filename == undefined) {
    console.log('Usage: node fancyGrep.js <word> <filename>');
}
else if (fs.existsSync(filename) == false) {
    console.log('File does not exist.');
}
else {
    const data = fs.readFileSync(filename, 'utf8');
    const lines = data.split('\n');

    let count = 0;

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(word)) {
            console.log(lines[i]);
            count++;
        }
    }

    if (count == 0) {
        console.log('No matches found.');
    }

    console.log('Total matching lines: ' + count);
}





