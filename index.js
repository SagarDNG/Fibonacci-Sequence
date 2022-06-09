const p = document.getElementById('p');

let n1 = 0, n2 = 1, nextTerm, i;
let n = parseInt(prompt("Enter the number of terms in Fibonacci Series"));
document.write("The Fibonacci Series is : <br>");
for (i = 1; i <= n; i++) {
    if (i != 1) document.write(", ");
    document.write(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
