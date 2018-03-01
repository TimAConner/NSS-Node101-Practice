const {
    createReadStream,
    createWriteStream,
    appendFile,
    writeFile
} = require("fs");
const { Transform, Writable } = require("stream");
const [,, fileArg] = process.argv;
const upperCaseify = Transform();
const writeStream = Writable();

// _ is an accepted naming convention is a private variable.
// This is a reminder that we are never going to directly call the transform method.
// console.log('upperCaseify', upperCaseify._transform);

// Why do we use _ in the arguments?  Have Joe explain later
// Google: error first syntax.
upperCaseify._transform = (buffer, _, callback) => {
    callback(null, buffer.toString().toUpperCase());
};

// Next in _write and callback in _transform are both callbacks for the next thing to happen.
writeStream._write = (buffer, _, next) => {
    writeFile("messageUppercase.txt", buffer, error => {
        if (error) throw error;
        console.log('The data to write was added to the file');
    });
    next();
};

createReadStream(fileArg)
.pipe(upperCaseify)
.pipe(writeStream);;