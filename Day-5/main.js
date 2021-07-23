// const panels = Array.from(document.querySelectorAll(".panelist"))
// const firstPanels = document.querySelectorAll(".panel")

// function show() {
//     console.log(panels);
// }

// firstPanels.forEach(firstPanel => firstPanel.addEventListener('click', show))

// panels.forEach(panel => panel.addEventListener("click", show))

/* const firstText = document.querySelector('.hey')
const firstPanel = document.querySelector('.first-panel')

firstPanel.addEventListener('click', () => {
    firstText.classList.remove("hey")
    if (firstText.classList == "heyText") {
        firstText.classList.add("hey") 
    }
}) */

const panels = document.querySelectorAll('.panel')

function toggleOpen() {
    this.classList.toggle('open')
}

function toggleActive(e) {
    if (e.propertyName.includes('font')) {
        this.classList.toggle('open-active')
    }
}


panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))