const picketMeal = () => {
    console.log("Today I gonna picket meal for making rice and side dish with 'Geprek Chicken' at picket shift in the morning.")
}

const bathe = () => {
    console.log("I wash my body.")
}

const eat = () => {
    console.log("I'm hungry and wanna lunch.")
}

const turnOnLamp = () => {
    console.log("Turn ON the Lamp.")
}

setTimeout(() => {
    turnOnLamp()
}, 100);

setTimeout(() => {
    eat()
}, 1000);

setTimeout(() => {
    bathe()
}, 2000);

setTimeout(() => {
    picketMeal()
}, 3000);