# Day 1

## JavaScript Drum Kit

This is the solution to the [first day challenge](https://javascript30.com/) which is the drum kit web app.

## Contents

- [Challenge and Process](#challenge-and-process)
- [Favorite Functions](#favorite-functions)
- [App Demo](#app-demo)
- [Full Screenshot](#screenshot)
- [Learnings](#what-i-learned)
- [Useful Resources](#useful-resources)
- [Links](#links)

## Challenge and Process

This is my own words of challenge and my process.

- Clone the UI or just clone the repo if just want to hone your JS skills.
- Fetch the objects on the documents using DOM manipulation on JavaScript.
- Reasearch about listening on to the keyboard.
- Embed audio files to html as well as add event to it.
- Release event immediately after press.
- Make it responsive

## Favorite Functions

```js
//* Audio function for clap just like the rest of audio
function clap() {
  var audioClap = new Audio("./audio/clap.wav");
  audioClap.play();
}
```

```js
//* Add border when play function on clap just like the rest of audio
function borderA() {
  document.getElementById("letter-A").classList.add("text-A");
}
```

```js
//* Remove function borderA() and place this to setTimeout() to remove function immediately
function removeA() {
  document.getElementById("letter-A").classList.remove("text-A");
}
```

```js
//* The keyboard listener and the callbacks of the functions above
//* Key Press Event Listener

document.addEventListener('keypress', (event) => {
//* FOR LETTER 'A' BUT SAME CODE ON THE REST OF THE KEYS
    if (event.key === 'a' || event.key === 'A') {
        event.preventDefault()
        clap()
        borderA()
        setTimeout(() => {
            removeA()
        }, 100)

    //* my favorite function is this setTimeout() and put 100ms so that after click it will remove the function border immediately. Soo glad that I am able to use this
```

## App Demo

![](https://github.com/Karllouise-code/javascript-30/blob/day1/images/drumKit.gif)

## Screenshot

![](https://github.com/Karllouise-code/javascript-30/blob/day1/images/full-screenshot.png)

## What I Learned

On this day, I've learned how to use listeners on keyboard, also play audio files on JavaScript and create a function that can play it on browser along with disabling a function after keypress.

## Useful Resources

- [How to Use Keyboard Listeners in Vanilla JavaScript](https://alligator.io/js/listening-to-keyboard/)
- [MDN Web Docs - for definitions](https://developer.mozilla.org/en-US/)
- [Code Grepper - play sound mp3 javascript](https://www.codegrepper.com/code-examples/javascript/play+sound+mp3+javascript)

## Links

Live Site - <https://karllouise-drumkit.netlify.app/>
