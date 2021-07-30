# Day 12

## Key Detection

This is the solution to the [twelve day challenge](https://javascript30.com/)
which is the HTML Video Player.

## Contents

- [Challenge and Process](#challenge-and-process)
- [Favorite Code](#favorite-code)
- [Full Screenshot](#screenshot)
- [Learnings](#what-i-learned)
- [Useful Resources](#useful-resources)
- [Link](#link)

## Challenge and Process

- Listen for key press
- Use window document
- Use splice and push method
- Store key press in an array
- Add cornify js for fun

## Favorite Code

```js
//* PRESS ARRAY
const pressed = [];
const secretCode = 'kim';
window.addEventListener('keyup', e => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    console.log('DING DING!');
    cornify_add();
  }
  console.log(pressed);
});
```

## Screenshot

![](https://github.com/Karllouise-code/javascript-30/blob/day12/resources/fullscreenshot.png)

## What I Learned

Today, what I learned is how to listen to what the user types using e.key and
also increased my idea that such things can be done.

## Useful Resources

- [Day 12 Template](https://github.com/wesbos/JavaScript30/tree/master/12%20-%20Key%20Sequence%20Detection)

## Link

Live Site - <https://klr-keydetection.netlify.app/>
