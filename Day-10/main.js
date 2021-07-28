//* WES BOS
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    // Check if they had the shift key down
    // And check that they are checking it
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        // go ahead and do what we please
        // loop every single checkboxes
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check in between');
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

//* CODEPEN I ANSWER I HAD FOUND
/* const checkboxes = document.querySelectorAll('input');
let lastChecked;

function handleCheck(e) {
    let inBetween = false;

    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them in Between!');
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck)); */

//* My answer not accomplish 😥
/* const checkboxes = document.querySelectorAll('input');
// console.log(
//     '🚀 ~ file: main.js ~ line 2 ~ checkboxes',
//     (checkboxes[0].checked = true),
// );
checkboxes.length;
console.log(
    '🚀 ~ file: main.js ~ line 7 ~ checkboxes.length',
    checkboxes.length,
);

function boxCheck(e) {
    console.log(e);
    if (e.shiftKey) {
        console.log(`Shift Key is pressed`);
        check();
    } else {
        console.log(`Not pressed`);
    }
}

// checkboxes.forEach(checkbox =>
//     checkbox.addEventListener('mouseenter', boxCheck),
// );

/* function check() {
    for (let index = 0; index < checkboxes.length; index++) {
        if (condition) {
            
        }
         checkboxes[index].checked = true;
    }
    // checkboxes.forEach(checkbox => (checkbox.checked = true));
} */
