// Why will if () create a boolean within the parenthesis?  
//1 !== true but if(1) equals true.  Do the parenthesis make it a boolean or the if?

const {readFileSync} = require("fs");
const [,,fileArg] = process.argv;

 // Question: undefined is equal to false.  So, if you are checking if somethign is undefined, an you just use the variable right in the parenthesis instead of typeof.... etc.?
 // Answer: Undefined is equal to false.  So, unless you specifically are lookign if it is undefined, you can just say if(variable) to check if it exists.
 
if (fileArg) {
    try {
        // This is a synchronous read file.  All progress is stopped until data is read.
        const data = readFileSync(fileArg);  
        process.stdout.write(data.toString());
    } catch ({message: error = "Unkown Error."}) {
        console.log('Error:', error);
    }
} else {
    console.log('Please input a file name to read.');
    process.exit();
}

// This will run if proccess.exit isn't called.
// console.log('This is the synchronous version.');