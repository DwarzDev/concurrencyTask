
const orderTea = (yourTea, wait, done) => {
    console.log(`Anda memesan ${yourTea}.`)
    wait(yourTea);
    setTimeout(() => {
        done(yourTea);
    }, 1000);
    
}

function wait(yourTea) { 
    console.log(`Sedang membuat ${yourTea}, silahkan tunggu..`) 
}

function done(yourTea) {
    console.log(`${yourTea} sudah jadi!`)
}

orderTea('Thai Tea', wait, done)