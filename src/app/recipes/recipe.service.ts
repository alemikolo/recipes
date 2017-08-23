import {  Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Sznycel',
      'Bardzo smaczy sznycel',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Wielki burger',
      'Wielki i przetłusty burger',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
    [
      new Ingredient('Buns', 1),
      new Ingredient('Meat', 2),
      new Ingredient('Cheese', 1)
    ]),
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
      return this.recipes.slice();
  }

  getRecipe(index: number) {
    if (index > (this.recipes.length - 1)) {
      index = this.recipes.length - 1;
    }
    return this.recipes[index];
}

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
