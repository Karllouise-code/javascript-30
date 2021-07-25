# Day 6

## Type Ahead

This is the solution to the [sixth day challenge](https://javascript30.com/) which is the type ahead challenge.

## Contents

- [Challenge and Process](#challenge-and-process)
- [Favorite Code](#favorite-code)
- [Full Screenshot](#screenshot)
- [Learnings](#what-i-learned)
- [Useful Resources](#useful-resources)
- [Links](#link)

## Challenge and Process

- Show every single city that matches whatever typed in, along with the corresponding population.
- Get data from external source in cities.json file
- Assign the source into the variable
- Fetch data in the array
- When user typed, filter the results that matches city/state names
- Lastly, highlights the letters whatever keypressed

## Favorite Code

```js
//* The following code can access array of objects inside the JSON file
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));
```

## App Demo

![](https://github.com/Karllouise-code/javascript-30/blob/main/Day-6/images/typeahead.gif)

## Screenshot

![](https://github.com/Karllouise-code/javascript-30/blob/day6/images/fullscreenshot.png)

## What I Learned

- .then() can return a blob of data on a fetch promise
- Use of push() and the spread '...' syntax to return proper array without putting it in new array.
- The use of RegExp to store whatever the user passes in

## Useful Resources

- [Day 6 Template](https://github.com/wesbos/JavaScript30/tree/master/06%20-%20Type%20Ahead)
- [Number With Commas](https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript)

## Link

Live Site - <https://klr-typeahead.netlify.app/>
