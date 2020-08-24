# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @SarahAlAshwal/lotide`

**Require it:**

`const _ = require('@SarahAlAshwal/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


   

  
  
  
  letterPositions,

 
  

* `head(array)`: This function takes an array as an input and return the first element of the array
* `tail(array)`: This function takes an array as an input and return the same array without the first element 
* `middle(array)`: This function takes an array as an input and return the middle element when the length of the array is odd or return the middle two elements when the length of the array is even.
*`countLetters(string)`: This function takes a string as an input and returns an object that has as parameters the letters of the string and as values the number of occurance each letter occured. 
*`countOnly(array, object)`: This function takes an array and an object. It will return an object containing counts of everything that the input object listed.
*`findKey(array, object)`: This function takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
*`findKeyByValue(object, value)`: This function takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
`flatten(array)`: This function takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

`takeUntil(array, callback)`: This function takes an array and a callback function the return is the result of collecting items from the provided array until the callback provided returns a truthy value.

`map(map, callback)`: This function takes in an array to map and a callback function. The map function will return a new array based on the results of the callback function.

 `letterPositions(string)`: This function takes a string as an input and returns an object of the postions of each letter in the stirng. 

`without(array, unwantedElements)`: This function takes an array and un wanted elements and retun a subset of a given array, removing unwanted elements.