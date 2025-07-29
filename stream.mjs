import fs from 'fs';

const write = fs.createWriteStream("target.log");

write.write("indra\n");
write.write("wan");
write.write("muhammad");
write.end(); 

write.on("finish", () => {
    const reader = fs.createReadStream("target.log");
    reader.on("data", (data) => {
        console.info(data.toString());
    });
});
