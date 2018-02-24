'use strict';

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once.

    let list = [1,2,3,4,5,6,1,3,6,7,9,8,9,4]
    list = list.filter(function (x, i, a) { 
        return a.indexOf(x) == i; 
    });
console.log(list);
