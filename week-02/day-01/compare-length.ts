// -  Create a variable named `firstList`
//    with the following content: `[1, 2, 3]`
// -  Create a variable named `secondList`
//    with the following content: `[4, 5]`
// -  Log to the console if `secondList` has more elements than `firstList`

var firstList: number[] = [1, 2, 3];
var secondList: number [] = [4, 5];

if (secondList.length > firstList.length){

    console.log("The first list has more elements than the second.");
} else {
    console.log("The second list has more elements than the first.");
}