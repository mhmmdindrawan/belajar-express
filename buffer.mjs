const buffer = Buffer.from("Muhammad indrawan", "utf-8");

console.info(buffer);
console.info(buffer.toString());

buffer.reverse();
console.info(buffer.toString());