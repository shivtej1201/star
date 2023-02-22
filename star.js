n = 5;
char = "";
for (let i = 1; i <= n; i++) {

  for (let j = 0; j < n - i; j++) {
    char += " ";
  }
 
  for (let k = 0; k < i; k++) {
    char += "*";
  }
  char += "\n";
}
console.log(char);