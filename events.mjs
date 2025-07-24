import { EventEmitter } from "events";

// Buat instance emitter
const emitter = new EventEmitter();

// Tambahkan listener ke event 'hello'
emitter.addListener("hello", (name) => {
  console.info(`hello ${name}`);
});

emitter.addListener("hello", (name) => {
  console.info(`hellow ${name}`);
});

// Trigger/panggil event 'hello'
emitter.emit("hello", "indra");
