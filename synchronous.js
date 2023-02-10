/* buatlah program yg menjalankan 3 fungsi ( synchcronous/ blocking) */

const openCoffeShop = (open, time, coffee) => {
    if (open === true){
        console.log(`The Coffee Shop was opened at ${time}`)
        setTimeout(() => {
        makingCoffe(coffee)
        }, 1000);
    }
}

const makingCoffe = (yourCoffee) => {
    if (yourCoffee == "Arabica" || yourCoffee == "Cappucino" || yourCoffee == "Creamy Latte"){
        console.log(`You order coffe ${yourCoffee}`)
    } else {
        console.log("You're not order anythings.")
    }
}


const costumer = (open, time, coffee) => {
    return openCoffeShop(open, time, coffee)
}

console.log(costumer(true, "12 PM", "Arabica"))