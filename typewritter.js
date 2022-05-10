const sentence = "hello there from lighthouse labs";
let timer = 0;
setTimeout(() => {
  console.log("\n");
}, 2000);
for (const char of sentence) {
  timer += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
}
