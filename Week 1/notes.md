# Blockchain and Hashing - Complete Notes (Hinglish)

## 📌 Why Blockchains?

### 🌟 Inflating Currencies
- Government baar baar currencies print karte rehte hain, jisse inflation increase hota hai aur cheezo ki price badh jaati hai.

- Example:  Zimbabwe mein hyperinflation hui thi jab unhone apne currency ke trillions mein notes print kar diye. Yeh unki currency ki value ko almost zero tak le aaya.

- Cash ko hold karna long term mein ek loser’s bet hai. Agar aap kisi asset (Gold, Stock, Real Estate) ko hold karte hain, toh wo currencies jaise ki USD, INR se better hai.

### 💸 Fractional Reserve Banking

- Banks ke paas aapka paise nahi hota. Woh apka paise dusron ko lend kar dete hain.

- Agar sabhi log ek saath apna paisa nikalne jaayenge (bank run), toh banks sabko paisa nahi de paayenge.

- Real-Life Example: 2008 Financial Crisis mein Lehman Brothers collapse hone ka ek reason yehi tha. Unke paas enough reserves nahi the to fulfill the withdrawal requests.

### 🏦 Bailouts

- 2008 Financial Crisis mein mortgage-backed securities ki wajah se problem hui thi.

- Wall Street banks ki galti thi, par government ne taxpayer ke paise se unko bailout diya.

- **The Big Short** movie dekhna chahiye, agar aapko ye concept better samajhna hai. Maine ye movie ~5 times dekha hai.

### 📉 INR Depreciation 

- Indian Rupee aur Japanese Yen jaise currencies time ke saath value lose kar rahi hain.

- Example: INR ki value 2010 mein 1 USD = 45 INR thi, ab 1 USD = 80+ INR hai.

### 💰 Currencies Are Not Backed by Assets Anymore

- Aajkal currencies kisi asset se backed nahi hain. Pehle currencies Gold Standard par thi, jahan har note ke against gold reserve hota tha.

- Example: US ne 1971 mein Gold Standard officially drop kar diya.

## 💡 How To Create A New Currency?

- Abhi tak, currencies sirf central governments issue kar sakti hain. Aap apne khud ke "Garvit Coin" ko issue nahi kar sakte aur users ko use karne ke liye force nahi kar sakte.

- Agar aap apna "Garvit Coin" issue kar bhi lete hain, toh koi use nahi karega, because:

  - Aap jitne marzi coins print kar sakte hain, apne aap ko ameer banane ke liye.

  - Aap coin ke liye central mint aur verification authority ban jaate hain.

  - Koi aap par trust nahi karega.

## 🔑 Introduction to Hashing
- Hashing ek process hai jo input data (chahe uska size kuch bhi ho) ko ek fixed-size string of characters mein transform karta hai.

- Example: "Hello" ko SHA-256 ke through hash karenge toh result hoga:
  ```
  185F8DB32271FE25F561A6FC938B2E264306EC304EDA518007D1764826381969
  ```

### 🔍 Properties of Hash Functions
| Property                | Explanation                                                   |
|------------------------|-------------------------------------------------------------|
| Deterministic          | Same input hamesha same output produce karega.              |
| Fast Computation       | Hash value quickly compute ho sakta hai.                   |
| Pre-image Resistance    | Original input ko hash se reverse karna impossible hai.    |
| Avalanche Effect       | Chhoti change bhi output drastically change kar deti hai. |
| Collision Resistance   | Alag inputs ke liye same output generate hona practically impossible hai. |

### ❌ Poor Hashing Algorithm Example
- Simple hashing approach:
  - A -> 1, B -> 2, C -> 3, etc. "ABC" => "123".
  
  - Problems:
  
    - **Predictable:** Input recover karna easy hai.
  
    - **No Avalanche Effect:** "ABC" se "ABD" karne par result sirf last character mein change hoga.
  
    - **Collisions Possible:** "L0VE" aur "LOVE" same result produce kar sakte hain.

### ✅ Good Hashing Algorithm (SHA-256)

- Yeh ek famous cryptographic hash function hai jo NSA ne design kiya hai.

- Yeh 256-bit fixed-size output generate karta hai, chahe input kitna bhi bada ho.

### 📜 Node.js Code Example:
```javascript
const crypto = require('crypto');

const input = "100xdevs";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash); // Outputs the hashed value in hexadecimal
```

### 🔨 Applications of SHA-256
- Digital Signatures
- Blockchain Technology
- Password Hashing (with Salt for extra security)
- Data Integrity Verification

### 🔐 Security
- SHA-256 abhi tak secure maana jata hai. Quantum computers successful attacks launch karne mein abhi tak fail hue hain.

### 📊 Comparison: Poor vs Good Hashing
| Feature            | Poor Hashing (e.g., Simple Substitution) | Good Hashing (SHA-256) |
|--------------------|-------------------------------------------|-------------------------|
| Deterministic      | Yes                                       | Yes                     |
| Pre-image Resistance | No                                      | Yes                     |
| Avalanche Effect   | No                                        | Yes                     |
| Collision Resistance | No                                      | Yes                     |
| Security           | Poor                                      | Strong                  |

## 🛠️ Tools to Check SHA-256 Hashing
- **SHA-256 Hash Generator Tool:** [SHA-256 Hash Generator Tool](https://emn178.github.io/online-tools/sha256.html) - Yeh tool aapko kisi bhi input ka SHA-256 hash generate karne mein madad karta hai.

## 🌐 Blockchain Visualization Tool
- **Blockchain Visualization Tool:** [Blockchain Visualization](https://andersbrownworth.com/blockchain/) - Yeh tool help karta hai concepts like Hash, Block, Blockchain, Distributed, Tokens, Coinbase ko visualize 
karne mein.

https://andersbrownworth.com/blockchain/public-private-keys/keys

## 📚 Summary
Hashing aur blockchain ke concepts ko samajhna crucial hai for understanding how modern cryptography and blockchain technologies work. Hashing functions jaise ki SHA-256 security provide karte hain. Blockchain technology ise apne distributed nature ke saath combine karte hue secure and trustworthy system create karte hain.

