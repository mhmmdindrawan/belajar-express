const buffer = Buffer.from("Muhammad indrawan", "utf8");

// console.info(buffer);
console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

// buffer.reverse();
// console.info(buffer.toString());

const bufferBase64 = Buffer.from("TXVoYW1tYWQgaW5kcmF3YW4=", "base64")
console.info(bufferBase64.toString("utf8"))

