'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let animals: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];

//agymenés de jó:
function appendA (newList: string[]){
    newList.forEach(function(item, index){
        newList[index] = (item + "a");
    })
    return newList;
    }
    console.log(appendA(animals));

    //szebb megoldás:
    function appendB (anim: string []) {
      anim = anim.map(allatok => allatok + "a");
      return anim
    }
    console.log(appendB(animals))

// The output should be: 'kutya', 'macska', 'kacsa', 'róka', 'halacska'
export = appendA;
