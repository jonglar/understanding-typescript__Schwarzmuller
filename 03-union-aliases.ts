enum ConvertAs { NUMBER, STRING };
type Combinable = number | string;
type User = {name: string, age: number};

function combine(
    input1: number | string, // union types
    input2: number | string, // union types
    // resultConversion: 'as-number' | 'as-string',
    conversionMode: ConvertAs
) {
    let result: any;

    // if (typeof input1 === 'number' && typeof input2 === 'number' || conversionMode === 'as-number') {
    if (typeof input1 === 'number' && typeof input2 === 'number' || conversionMode === ConvertAs.NUMBER) {
        result = +input1 + +input2;  // Literal Type
    } else {
        result = input1.toString() + input2.toString();
    }

    // if (resultConversion === 'as-number') {
    //     return +result;  // Literal Type, it's the same as -> result = parseFloat(result)
    // } else {
    //     return result.toString();
    // }
    return result;
}

// const combinedAges = combine(30, 26,'as-number');
const combinedAges = combine(30, 26, ConvertAs.NUMBER);
console.log(combinedAges);

// const combinedStringAges = combine('30', '26', 'as-number');
const combinedStringAges = combine('30', '26', ConvertAs.NUMBER);
console.log(combinedStringAges);

// const combinedNames = combine('Max', 'Anna', 'as-string');
const combinedNames = combine('Max', 'Anna', ConvertAs.STRING);
console.log(combinedNames);
