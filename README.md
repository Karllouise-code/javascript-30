# Day 3

## Scope CSS Variables and JS

This is the solution to the [third day challenge](https://javascript30.com/) which is the css and javascript event connection.

## Contents

- [Challenge and Process](#challenge-and-process)
- [Favorite Code](#favorite-code)
- [App Demo](#app-demo)
- [Full Screenshot](#screenshot)
- [Learnings](#what-i-learned)
- [Useful Resources](#useful-resources)
- [Links](#links)

## Challenge and Process

This is my own words of challenge and my process.

- HTML/CSS

  - Clone the web app
  - Use data and name attribute
  - Use :root pseudo code
  -

- JS
  - Fetch all inputs
  - Add change and mouseover events
  - Reasearch Date object
  - Function handle updates
  - Add data attribute to the inputs
  - Use dataset object

## Favorite Code

```js
//* This code lets me change the data attribute in the document.
function handleUpdate() {
  const suffix = this.dataset.size || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
```

## App Demo

![](https://github.com/Karllouise-code/javascript-30/blob/day3/images/scopeCssJs.gif)

## Screenshot

![](https://github.com/Karllouise-code/javascript-30/blob/day3/images/fullscreenshot.png)

## What I Learned

On this day,

## Useful Resources

- [Day 3 Template](https://github.com/wesbos/JavaScript30/tree/master/03%20-%20CSS%20Variables)

## Link

Live Site - <https://klr-scopecssjs.netlify.app/>
