# Day 14

## JS Reference Vs Copy

This is the solution to the
[fourteenth day challenge](https://javascript30.com/) which is the JS Reference
Vs Copy.

## Contents

- [Challenge and Process](#challenge-and-process)
- [Favorite Code](#favorite-code)
- [Learnings](#what-i-learned)
- [Useful Resources](#useful-resources)

## Challenge and Process

- Follow along WES BOS

## Favorite Code

```js
// // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const karl = {
	name: 'karl',
	age: 100,
	social: {
		twitter: '@karl_rito',
		facebook: 'karllouise08',
	},
};

console.clear();
console.log(karl);

const dev = Object.assign({}, karl);

const dev2 = JSON.parse(JSON.stringify(karl));
```

## What I Learned

Today my knowledge of JavaScript have increased again about referencing
different data types to their values.

## Useful Resources

- [Day 14 Template](https://github.com/wesbos/JavaScript30/tree/master/14%20-%20JavaScript%20References%20VS%20Copying)
