// Fetch DOM
// Get to move the hands of clock
// Function to move every second/hr/min
// move hands in its origin

//* DECLARATION
const hourHand = document.querySelector(".hour-hand")
const minHand = document.querySelector(".min-hand")
const secondHand = document.querySelector(".second-hand")

//* GET SECONDS 
function moveSeconds() {
    const date = new Date()
    const seconds = date.getSeconds()
    const secondsDeg = ((seconds / 60) * 360) + 90

    setTimeout(() => {
        if (secondsDeg == 444) {
            secondHand.style.transition = `0s`
        } else {
            secondHand.style.transition = `.01s`
        }
        console.log(secondHand.style.transition);
    }, 1)

    secondHand.style.transform = `rotate(${secondsDeg}deg)`
}

//* GET MINUTES
function moveMinutes() {
    const date = new Date()
    const minutes = date.getMinutes()
    const minuteDeg = ((minutes / 60) * 360) + 90
    minHand.style.transform = `rotate(${minuteDeg}deg)`

    if (minuteDeg == 90) {

    }
}

//* GET HOURS
function moveHour() {
    const date = new Date()
    const hours = date.getHours()
    const hoursDeg = ((hours / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hoursDeg}deg)`
}

//* FUNCTION CALL
setInterval(moveSeconds, 1000)
setInterval(moveMinutes, 1000)
setInterval(moveHour, 1000)