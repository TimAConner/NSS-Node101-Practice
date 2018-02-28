// Exercise #1
const [,,...cheerTextArray] = process.argv;

// If there is no value, set the default to JOHN DOE.
if(cheerTextArray.length === 0) {
    cheerTextArray[0] = "JOHN";
    cheerTextArray[1] = "DOE";
}

const cheerText = cheerTextArray.reduce((ac, cv) => ac.toUpperCase() + cv.toUpperCase()); 

const letterInterval = 1000;
const vowelSounds = ["O", "H", "E", "N"]

// Prints text into console log with delay
const printDelayedText = (delay, text) => {
    setTimeout(() => {
        process.stdout.write(`${text}\n`);
    }, delay);
}

// Loops over cheer text lettesr and prints them out x seconds apart
for(const letter of cheerText){
    var letterIndex = typeof letterIndex === "undefined" ? 0 : letterIndex += 1;
    delayTime = letterInterval * letterIndex;
    printDelayedText(delayTime, `Give me ${vowelSounds.includes(letter) ? 'an' : 'a'} ${letter.toUpperCase()}!`);

    
    const {length: finalIndex} = cheerText;
    const isPenultimateIndex = () => letterIndex === (finalIndex-1);
    if(isPenultimateIndex()) {
        printDelayedText(delayTime+(letterInterval),  "What does that spell?");
        printDelayedText(delayTime+(letterInterval*2), `${cheerTextArray.join(" ")}!`);
        break;
    }

}