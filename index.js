let n1 = 0, n2 = 1, nextTerm, i;
let n = parseInt(prompt("Enter the number of terms in Fibonacci Series"));

while (!n) {
    alert('Please enter only Numbers');
    n = parseInt(prompt("Once again, Enter the number of terms in Fibonacci Series"));
}

document.write("The Fibonacci Series is : <br>");
for (i = 1; i <= n; i++) {
    if (i != 1) document.write(", ");
    document.write(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}





/*
let p = document.getElementById('p');
let uL = document.querySelector('ul');
let terms = document.getElementById('number');
let button = document.getElementById('button');



button.addEventListener('click', result);

function result() {
    p.innerText = `The Fibonacci Series is :`;
    let n1 = 0, n2 = 1;
    for (let i = 1; i <= terms.value; i++) {
        let entity = document.createElement('li');
        entity.innerText = n1;
        let nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        uL.appendChild(entity);
    }
    p.classList.add('show');
    terms.value = '';
}
 */