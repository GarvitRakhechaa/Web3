// bits
const x = 0
console.log(x);

// byte

const y = 202
console.log(y);

// Array of byte
const bytes = [105,233,129]
console.log(bytes);

// Uint8Array

let Uint8Arrays = new Uint8Array([0,255,123,533]) 
 // last will convert in binary and last 8 bits will br recognised and other will discarded  like this 1000010101  last ki 2 bit will be discarded and the decimal value of remaining bits wwill be stored in Uint8Array
// this array take only 8 bits in each value that why it is unique
 console.log(Uint8Arrays);

// here comes textencodeder

let string = "Garvit"
 
let newByteString = new TextEncoder().encode(string)
console.log(newByteString); 
//text ENcodedr converts strings in uInt8Array
 
 
