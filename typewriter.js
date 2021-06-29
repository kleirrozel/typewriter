// will print each character every 50 ms
const sentence = function(string) {
  let time = 0;
  for (const char of string) {
    setTimeout (() => {
      process.stdout.write(char + "\n")
    }, time);
    time += 50;
  }
};
sentence("Elvis is a very fat rabbit");

// will print it all at once after a one second delay
// setTimeout(() => {
//   for (const char of sentence) {
//     process.stdout.write(char + "\n");
//   }
// }, 1000);