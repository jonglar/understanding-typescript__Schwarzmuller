// unknown type
let userInput: unknown;
let userName: string;

userInput = 33;
userInput = 'Rom';

if (typeof userInput === 'string') {
    userName = userInput;
}
userName = userInput;   // Type 'unknown' is not assignable to type 'string'



// never type
function generateError(message: string, code: number): never {
    throw {message: message, erroCode: code}
}

generateError('HEY! An error occured!', 500);
