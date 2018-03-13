'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// OPTIONAL
// The frist columns should be automatically as wide as the longest key
let ingredients: any[] = [
  { name: 'vodka', in_stock: 1, needs_cooling: true },
  { name: 'coffee_liqueur', in_stock: 0, needs_cooling: true },
  { name: 'fresh_cream', in_stock: 1, needs_cooling: true },
  { name: 'captain_morgan_rum', in_stock: 2, needs_cooling: true },
  { name: 'mint_leaves', in_stock: 0, needs_cooling: false },
  { name: 'sugar', in_stock: 0, needs_cooling: false },
  { name: 'lime juice', in_stock: 0, needs_cooling: true },
  { name: 'soda', in_stock: 0, needs_cooling: true }
];


/*function ingredientList(inPut: any[]) {
    
  console.log('+--------------------+---------------+----------+');
  console.log('| Ingredient         | Needs cooling | In stock |');
  console.log('+--------------------+---------------+----------+');

  for (let i:number = 0; i < ingredients.length; i++) {
  
console.log('| ' + ingredients[i].name  + '| ' + ingredients[i].needs_cooling +  '| ' + ingredients[i].in_stock + '|');
  }
console.log('+--------------------+---------------+----------+');
}
ingredientList(ingredients); */

function ingredientList(inPut: any[]) {
    
  console.log('+--------------------+---------------+----------+');
  console.log('| Ingredient         | Needs cooling | In stock |');
  console.log('+--------------------+---------------+----------+');
  for(let i: number = 0; i < ingredients.length; i++) {
      let tabs: string = ' ';
      let tabs2: string = ' ';
      let tabs3: string = ' ';
      for(let j: number = 0; j < 18 - ingredients[i].name.length; j++) {
          tabs += ' ';
      }
      if(ingredients[i].needs_cooling === true) {             
        for(let j: number = 0; j < 10; j++) {
          tabs2 += ' ';
        }
      } else {
          for(let j: number = 0; j < 11; j++) {
            tabs2 += ' ';
          }
        }
      for(let j: number = 0; j < 7; j++) {
        tabs3 += ' ';
      }

      if(ingredients[i].needs_cooling == true) {
          ingredients[i].needs_cooling = 'yes';
      } else {
          ingredients[i].needs_cooling = 'no';
      }
      if(ingredients[i].in_stock == 0) {
          ingredients[i].in_stock = '-';
      }
      console.log('| ' + ingredients[i].name  + tabs + '| ' + ingredients[i].needs_cooling + tabs2 +  '| ' + ingredients[i].in_stock + tabs3 + '|');
  }
  
  console.log('+--------------------+---------------+----------+');
}
ingredientList(ingredients);