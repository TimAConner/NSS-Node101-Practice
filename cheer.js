// Exercise #1
const [,,...cheerTextArray] = process.argv;
const cheerText = cheerTextArray.reduce((ac, cv) => ac.toUpperCase() + cv.toUpperCase()); 

const letterInterval = 100;
const vowelSounds = ["O", "H", "E", "N"]

const printDelayedText = (delay, text) => {
    setTimeout(() => {
        process.stdout.write(`${text}\n`);
    }, delay);
}

let letterIndex = 0;


for(const letter of [...cheerText]){
    letterIndex++;

    delayTime = letterInterval * letterIndex;

    printDelayedText(delayTime, `Give me ${vowelSounds.includes(letter) ? 'an' : 'a'} ${letter}!`)

    const {length: finalIndex} = cheerText;
    if(letterIndex === finalIndex) {
        printDelayedText(delayTime+(letterInterval),  "What does that spell?");
        printDelayedText(delayTime+(letterInterval*2), `${cheerText}!`);
    }
}