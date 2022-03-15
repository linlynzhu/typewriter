const sentence = "hello there from lighthouse labs";
let t = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, t);
  t += 100;
}