function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);    
}

// callback function
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => void;
combineValues = add;
console.log(combineValues(8, 8));

// callback function
addAndHandle(10, 20, (culo) => {
    console.log(`culo: ` + culo);
});
