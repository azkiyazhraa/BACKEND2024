// const formatName = (name) => name.toUpperCase();

// const getName = (name, callFormatName) => console.log(callFormatName(name));

// getName("Edo", formatName);


// const tambah = (a, b) => {
//     console.log(a + b);
// }
// const kurang = (a, b) => {
//     console.log(a - b);
// }

// const calculator = (a, b, coperator) => {
//     return coperator(a, b);
// }

// calculator(10, 5, kurang)

//async callback

// berenang
// bersepeda
// berlari

const berenang = () => {
    console.log("berenang");
}
const bersepeda = () => {
    console.log("bersepeda");
}

const berlari = () => {
    console.log("berlari");
}

const triathlon = () => {
    setTimeout(() => {
        berenang();
         
        setTimeout(() => {
            bersepeda();
            
            setTimeout(() => {
                berlari();
            }, 4000);
        }, 2000);

    }, 6000);


}

triathlon();