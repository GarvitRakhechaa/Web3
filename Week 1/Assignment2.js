// Assignment #2
// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?
// A: You will have to brute force until you find a value that starts with 00000
// What if I ask you that the input string should start with Garvit ? How would the code change?
import { log } from "console"
import crypto from "crypto"
function findHashWithPrefix(prefix){
let input = 0
// const prefix = 00000
while(true){
    let inputstr = "Garvit"+input.toString()
    const hash = crypto.createHash('sha256').update(inputstr).digest('hex')
    
    
    if(hash.startsWith(prefix)){
        console.log(input);
        return {
            input: inputstr,
            hash: hash
        }
    }
    input++
    
}

}
const result = findHashWithPrefix("00000")
console.log(`input: ${result.input}`);
console.log(`hash: ${result.hash}`);

