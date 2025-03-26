// Bytes to Ascii

function bytesToAscii(byteArray) {
    return byteArray.map(byte => String.fromCharCode(byte)).join('');
  }
  
  // Example usage:
  const bytes = [71, 97, 114, 118, 105, 116]; 
  const asciiString = bytesToAscii(bytes);
  console.log(asciiString); 

  // Ascii to Bytes

  function asciiToBytes(asciiString) {
    const byteArray = [];
    for (let i = 0; i < asciiString.length; i++) {
      byteArray.push(asciiString.charCodeAt(i));
    }
    return byteArray;
  }
  
  // Example usage:
  const ascii = "Garvit";
  const byteArray = asciiToBytes(ascii);
  console.log(byteArray); 

  //uInt8Array to ascii

  function bytesToAscii1(byteArray) {
    return new TextDecoder("utf-8").decode(byteArray)
  }
  
  // Example usage:
  const var1 = new Uint8Array([71, 97, 114, 118, 105, 116]); 
  const asciiString1 = bytesToAscii1(var1);
  console.log(asciiString); 
  
  //Ascii to UInt8Array

  function asciiToBytes2(asciiString) {
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
  }
  
  // Example usage:
  const ascii2 = "Hello";
  const byteArray2 = asciiToBytes2(ascii2);
  console.log(byteArray2); // Output: Uint8Array(5) [72, 101, 108, 108, 111]
  