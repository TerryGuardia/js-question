let q1 = document.querySelectorAll('[name="chien"]');
let q2 = document.querySelectorAll('[name="voiture"]');
let q3 = document.querySelectorAll('[name="pere"]');
let q4 = document.querySelectorAll('[name="naissance"]');
let q5 = document.querySelectorAll('[name="louis"]');
let btnResult = document.querySelector('button');
let total = 0;
if (q1[0].checked) {
    total++;
}
if (q2[1].checked) {
    total++;
}
if (q3[2].checked) {
    total++;
}
if (q4[2].checked) {
    total++;
}
if (q5[1].checked) {
    total++;
}
function check() {
    if (q1[0].checked) {
        total++;
    }
    if (q2[1].checked) {
        total++;
    }
    if (q3[2].checked) {
        total++;
    }
    if (q4[2].checked) {
        total++;
    }
    if (q5[1].checked) {
        total++;
    }
    if (total <= 2) {
        alert('Votre score est de ' + total + ' Veuillez reessayer.');
    }
    if (total > 2 && total <= 3) {
        alert('Votre score est de ' + total + ' Pas mal.');
    }
    if (total >= 4) {
        alert('Votre score est de ' + total + ' Bien.');
    }
    total = 0;
}
btnResult.addEventListener('click', check);