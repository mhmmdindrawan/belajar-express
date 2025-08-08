import util from "node:util";

// 1. Variabel nama
const firstname = "Muhammad";
const lastname = "Indrawan";

// 2. Cetak langsung dan pakai util.format
console.info(`Hello ${firstname} ${lastname}`);
console.info(util.format("Hello %s %s", firstname, lastname));

// 3. Objek person
const person = {
    firstname: "Muhammad",
    lastname: "Indrawan",
};

console.info(`Person: ${JSON.stringify(person)}`);
console.info(util.format("person: %j", person));

// 4. util.types example
console.info("Is Date?", util.types.isDate(person)); // false

// 5. Contoh fungsi callback-style
function getFullName(person, callback) {
    if (!person.firstname || !person.lastname) {
        return callback(new Error("Data tidak lengkap"));
    }
    const fullName = `${person.firstname} ${person.lastname}`;
    callback(null, fullName);
}

// 6. Promisify fungsi getFullName
const getFullNameAsync = util.promisify(getFullName);

// 7. Pakai async/await untuk getFullName
async function run() {
    try {
        const fullName = await getFullNameAsync(person);
        console.info("Full name (async):", fullName);
    } catch (err) {
        console.error("Gagal ambil nama:", err.message);
    }
}

run();
