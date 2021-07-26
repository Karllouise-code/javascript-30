# Day 8

## HTML 5 Canvas

This is the solution to the [eight day challenge](https://javascript30.com/) which is the HTML 5 Canvas.

## Contents

- [Challenge and Process](#challenge-and-process)
- [Favorite Code](#favorite-code)
- [App Demo](#app-demo)
- [Full Screenshot](#screenshot)
- [Learnings](#what-i-learned)
- [Useful Resources](#useful-resources)
- [Links](#link)

## Challenge and Process

- Research about HTML canvas
- Use mouse event listeners to listen to mouse movements
- Get to know the syntax of syntax

## Favorite Code

```js
if (!isDrawing) return; // stop the fn from running when they are not moused down
// To control the width as well as reset the value of hue
if (hue >= 360) {
  hue = 0;
}
if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
  direction = !direction;
}
if (direction) {
  ctx.lineWidth++;
} else {
  ctx.lineWidth--;
}
```

## App Demo

![](https://github.com/Karllouise-code/javascript-30/blob/main/Day-8/images/htmlcanvas.gif)

## Screenshot

![](https://github.com/Karllouise-code/javascript-30/blob/day8/images/fullscreenshot.png)

## What I Learned

Today, I learned about a technique where you can create a flag variable to control or limit what happens in the flow of code. And of course I was introduced to the basics of making a canvas using html and javascript.

## Useful Resources

- [Day 8 Template](https://github.com/wesbos/JavaScript30/tree/master/08%20-%20Fun%20with%20HTML5%20Canvas)
- [Basic usage of canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage)
- [CanvasRenderingContext2D.lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin)

## Link

Live Site - <https://klr-htmlcanvas.netlify.app/>
