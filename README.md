# Day 10

## Hold Shift to Check Multiple Checkboxes

This is the solution to the [tenth day challenge](https://javascript30.com/)
which is the HTML 5 Canvas.

## Contents

- [Challenge and Process](#challenge-and-process)
- [Favorite Code](#favorite-code)
- [App Demo](#app-demo)
- [Full Screenshot](#screenshot)
- [Learnings](#what-i-learned)
- [Useful Resources](#useful-resources)
- [Links](#link)

## Challenge and Process

- Get all inputs element using querySelectorforAll
- Apply forEach to select input elements specifically
- Add event listener click to manage click on checkboxes
- Create a function that will handle checks
- Researched about shiftKey
- If statement to check if they had the shift key down and check that they are
  checking it
- Loop every single checkboxes and create a if statement checkbox is in between
  checks
- If inBetween execute checked = true

## Favorite Code

```js
//* loop every single checkboxes
checkboxes.forEach(checkbox => {
    console.log(checkbox);
    // To check where checkboxes inBetween
    if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check in between');
    }
```

## App Demo

![](https://github.com/Karllouise-code/javascript-30/blob/main/Day-10/images/shiftCheck.gif)

## Screenshot

![](https://github.com/Karllouise-code/javascript-30/blob/day10/images/shiftCheck.png)

## What I Learned

Today, as my knowledge of DOM manipulation has expanded, I have discovered that
every step is important to think about in order to achieve the desired answer.
The one I thought I was going to use the mouse event wasn't used but it's okay
because I've gained new knowledge.

## Useful Resources

- [Day 10 Template](https://github.com/wesbos/JavaScript30/tree/master/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes)
- [Shift key pressed? : Key Event « Event « JavaScript DHTML](http://www.java2s.com/Code/JavaScript/Event/Shiftkeypressed.htm)
- [HTMLElement: input event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
- [MouseEvent.shiftKey](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/shiftKey)

## Link

Live Site - <https://klr-shiftcheckbox.netlify.app/>
