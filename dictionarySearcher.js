const { createReadStream } = require('fs');
const { Writable } = require('stream');
const { map, split } = require('event-stream');
const limitToTen = require('./transforms/limit_to_ten')

const userInput = process.argv[2] ? process.argv[2].toLowerCase() : null;

const writeStream = Writable();
const wordListStream = createReadStream('words');

const exit = (text = 'Exit') => {
    console.log(text);
    process.exit();
};

writeStream._write = (wordBuffer, _, next) => {
    if (wordBuffer.toString() === 'limit reached') {
        exit('Limited reached.');
    }
    process.stdout.write(wordBuffer);
    next();
};

if (!userInput) {
    exit('Usage: readfile [search term]');
}

wordListStream
.pipe(split())
// What happens here? Does split sends each individual word along to the next part?  
// Is this how pipeing always works?  Each part sends an individual peice of data?   
// Can we make our own "pipe" functions?
.pipe(map((word, next) => {
    word.toString().toLowerCase().includes(userInput) 
        ? next(null, word + '\n') 
        : next();
}))
.pipe(limitToTen())
.pipe(writeStream);