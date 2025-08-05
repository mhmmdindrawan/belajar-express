import timers from 'timers/promises';

// console.log(new Date().toISOString());
// const name = await timers.setTimeout(5000, "indra");

// console.log(new Date().toISOString());
// console.log(name);

const date = new Date();
for await (const startTime of timers.setInterval(1000, "ignored")) {
    console.info(`start time at ${new Date()}`);
}