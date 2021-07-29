# Day 11

## HTML Video Player

This is the solution to the [eleventh day challenge](https://javascript30.com/)
which is the HTML Video Player.

## Contents

- [Challenge and Process](#challenge-and-process)
- [Favorite Code](#favorite-code)
- [App Demo](#app-demo)
- [Full Screenshot](#screenshot)
- [Learnings](#what-i-learned)
- [Useful Resources](#useful-resources)
- [Links](#link)

## Challenge and Process

- Make your own video control as shown by Wes Bos
- Add a feature if you can but if you can't, look at the finish file or follow
  Wes Bos's process
- Research about video tags
- Get elements first
- Build out functions to handle handle updates
- Hook up the event listeners

## Favorite Code

```js
// TO HANDLE MOUSE CHANGE WHEN IF USER IS JUST CLICKING IF NOT DO NOT CHANGE
let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', e => mousedown && scrub(e))
progress.addEventListener('mousedown', () => (mousedown = true))
progress.addEventListener('mouseup', () => (mousedown = false))
```

## App Demo

![](https://github.com/Karllouise-code/javascript-30/blob/main/Day-10/resources/videoplayer.gif)

## Screenshot

![](https://github.com/Karllouise-code/javascript-30/blob/day10/resources/fullscreenshot.png)

## What I Learned

The most that I have learned today is about manipulating a video element using
HTML, CSS, and JavaScript.

I realized that videos on famous websites like youtube really made an effort in
making such videos on the purpose of making user experience better.

## Useful Resources

- [Day 11 Template](https://github.com/wesbos/JavaScript30/tree/master/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes)
- [MDN - video: The Video Embed element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [W3School - HTML Video](https://www.w3schools.com/html/html5_video.asp)

## Link

Live Site - <https://klr-videoplayer.netlify.app/>
