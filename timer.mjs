import timer from 'node:timers/promises';

setInterval(() => {
    console.info(`start time at ${new Date()}`);
}, 1000);
