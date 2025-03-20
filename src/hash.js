async function hashFunction (input) {
    const data = new TextEncoder().encode(input); // converts input string into byte data
    const hashBuffer = await crypto.subtle.digest("SHA-256", data); // Compute SHA-256 hash

    // converted buffer to a hex string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, "0").join(""));

    return hashHex;
};

hashFunction("Hello")
.then(hash => console.log("SHA-256 hash of Hello: ", hash))