// GLOBALS    - NO WINDOW!!!
// __dirname  - path to current directory
// __filename - filename
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where program is being executed

console.log(__filename);

setTimeout(() => {
  console.log("hello world");
}, 2000);
