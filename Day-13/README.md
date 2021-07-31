# Day 13

## Slide In on Scroll

This is the solution to the
[thirteenth day challenge](https://javascript30.com/) which is the Slide In on
Scroll Images.

## Contents

- [Challenge and Process](#challenge-and-process)
- [Favorite Code](#favorite-code)
- [App Demo](#app-demo)
- [Full Screenshot](#screenshot)
- [Learnings](#what-i-learned)
- [Useful Resources](#useful-resources)
- [Link](#link)

## Challenge and Process

- Hide first the images using opacity and transform properties
- Create a 'active' class to reveal images like turning back the transform
  properties as well as the opacity value.
- Use and research about the debounce provided by Wes Bos
- Use window with scroll event to listen for the mouse scroll
- Create a formula to calculate when to reveal the image (e.g. half way & bottom
  of the images)

## Favorite Code

```js
// To control the trigger of the scroll event
function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function () {
		var context = this,
			args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}
```

## App Demo

![](https://github.com/Karllouise-code/javascript-30/blob/main/Day-13/images/slidescroll.gif)

## Screenshot

![](https://github.com/Karllouise-code/javascript-30/blob/day13/resources/fullscreenshot.png)

## What I Learned

Day 13 - I learned how to put a scrolling event on images so that the User
Experience of my website visitors would be better and also this has increased my
knowledge about adding an event listener to the elements.

## Useful Resources

- [Day 13 Template](https://github.com/wesbos/JavaScript30/tree/master/13%20-%20Slide%20in%20on%20Scroll)

## Link

Live Site - <https://klr-slidescroll.netlify.app/>
