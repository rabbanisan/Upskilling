// Jenis Conditional
// IF, Switch Case
// if sederhana
let a = 2;
let b = 3;
if (a < b && a > 1) {
    console.log(`${a} lebih kecil dari ${b}`);
}

if (a < b) {
    if (a > 1) {

    }
} 

// // if ternary
// a < b && a > 1 ? console.log(`${a} lebih kecil dari ${b}`) : console.log('false');
// Switch Case
switch (a) {
    case 2:
        console.log("Benar");
        break;
    default:
        console.log("Salah");
        break;
}