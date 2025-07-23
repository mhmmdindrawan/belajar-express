import dns from "dns/promises";

const ip = await dns.lookup("www.programmerzamannow.com");

console.info(address.address);
console.info(address.family);