# Day 5

## Flex Panels

This is the solution to the [fifth day challenge](https://javascript30.com/) which is the flex panels challenge.

## Contents

- [Challenge and Process](#challenge-and-process)
- [Favorite Code](#favorite-code)
- [Full Screenshot](#screenshot)
- [Learnings](#what-i-learned)
- [Useful Resources](#useful-resources)
- [Links](#link)

## Challenge and Process

- HTML
  - Clone the UI
  - Think about where to put div tags
- CSS
  - Apply flexbox to align items
  - Add class open(for text and space) and open-active(to show the top and also the bottom text) to toggle for later
- JS
  - Get each panels using forEach
  - Add event click
  - Research about toggle

## Favorite Code

```js
//* The following code can control the toggle method where it knows if it includes 'font' property name
function handleUpdates() {
 function toggleActive(e) {
    if (e.propertyName.includes('font')) {
        this.classList.toggle('open-active')
    }
}
```

## App Demo

![](https://github.com/Karllouise-code/javascript-30/blob/day5/images/flexpanels.gif)

## Screenshot

![](https://github.com/Karllouise-code/javascript-30/blob/day5/images/fullscreenshot.png)

## What I Learned

Today, I feel that my flexbox skill has improved and I was introduced to using the flex property which I had a bit of a hard time that's why my website is not working accordingly when click and I am forced to use a different approach where instead of using flex:5 on .panel.open I had used padding to resize the squares but I am planning to rearrange this tomorrow. It's okay because in the end I still learned a lot.

## Useful Resources

- [Day 5 Template](https://github.com/wesbos/JavaScript30/tree/master/05%20-%20Flex%20Panel%20Gallery)
- [W3School How to Toggle Class](https://www.w3schools.com/howto/howto_js_toggle_class.asp)

## Link

Live Site - <https://klr-flexpanel.netlify.app/>
