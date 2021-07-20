//* Audio Functions
function clap() {
    var audioClap = new Audio('./audio/clap.wav')
    audioClap.play()
}

function hihat() {
    var audioHihat = new Audio('./audio/hihat.wav')
    audioHihat.play()
}

function kick() {
    var audioKick = new Audio('./audio/kick.wav')
    audioKick.play()
}

function openhat() {
    var audioOphat = new Audio('./audio/openhat.wav')
    audioOphat.play()
}

function boom() {
    var audioBoom = new Audio('./audio/boom.wav')
    audioBoom.play()
}

function ride() {
    var audioRide = new Audio('./audio/ride.wav')
    audioRide.play()
}

function snare() {
    var audioSnare = new Audio('./audio/snare.wav')
    audioSnare.play()
}

function tom() {
    var audioTom = new Audio('./audio/tom.wav')
    audioTom.play()
}

function tik() {
    var audioTik = new Audio('./audio/tink.wav')
    audioTik.play()
}

//* Add Border When Play function
function borderA() {
    document.getElementById("letter-A").classList.add("text-A")
}

function borderS() {
    document.getElementById("letter-S").classList.add("text-S")
}

function borderD() {
    document.getElementById("letter-D").classList.add("text-D")
}

function borderF() {
    document.getElementById("letter-F").classList.add("text-F")
}

function borderG() {
    document.getElementById("letter-G").classList.add("text-G")
}

function borderH() {
    document.getElementById("letter-H").classList.add("text-H")
}

function borderJ() {
    document.getElementById("letter-J").classList.add("text-J")
}

function borderK() {
    document.getElementById("letter-K").classList.add("text-K")

}

function borderL() {
    document.getElementById("letter-L").classList.add("text-L")
}

//* FUNCTION REMOVE
function removeA() {
    document.getElementById("letter-A").classList.remove("text-A")
}

function removeS() {
    document.getElementById("letter-S").classList.remove("text-S")
}

function removeD() {
    document.getElementById("letter-D").classList.remove("text-D")
}

function removeF() {
    document.getElementById("letter-F").classList.remove("text-F")
}

function removeG() {
    document.getElementById("letter-G").classList.remove("text-G")
}

function removeH() {
    document.getElementById("letter-H").classList.remove("text-H")
}

function removeJ() {
    document.getElementById("letter-J").classList.remove("text-J")
}

function removeK() {
    document.getElementById("letter-K").classList.remove("text-K")
}

function removeL() {
    document.getElementById("letter-L").classList.remove("text-L")
}


//* Key Press Event Listener

document.addEventListener('keypress', (event) => {

    if (event.key === 'a' || event.key === 'A') {
        event.preventDefault()
        clap()
        borderA()
        setTimeout(() => {
            removeA()
        }, 100)
    } else if (event.key === 's' || event.key === 'S') {
        event.preventDefault()
        hihat()
        borderS()
        setTimeout(() => {
            removeS()
        }, 100)
    } else if (event.key === 'd' || event.key === 'D') {
        event.preventDefault()
        kick()
        borderD()
        setTimeout(() => {
            removeD()
        }, 100)
    } else if (event.key === 'f' || event.key === 'F') {
        event.preventDefault()
        openhat()
        borderF()
        setTimeout(() => {
            removeF()
        }, 100)
    } else if (event.key === 'g' || event.key === 'G') {
        event.preventDefault()
        boom()
        borderG()
        setTimeout(() => {
            removeG()
        }, 100)
    } else if (event.key === 'h' || event.key === 'H') {
        event.preventDefault()
        ride()
        borderH()
        setTimeout(() => {
            removeH()
        }, 100)
    } else if (event.key === 'j' || event.key === 'J') {
        event.preventDefault()
        snare()
        borderJ()
        setTimeout(() => {
            removeJ()
        }, 100)
    } else if (event.key === 'k' || event.key === 'K') {
        event.preventDefault()
        tom()
        borderK()
        setTimeout(() => {
            removeK()
        }, 100)
    } else if (event.key === 'l' || event.key === 'L') {
        event.preventDefault()
        tik()
        borderL()
        setTimeout(() => {
            removeL()
        }, 100)
    }
})