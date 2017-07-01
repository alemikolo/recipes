import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() recipeRoute = false;
  @Output() shoppingListRoute = false;
  constructor() { }

  ngOnInit() {
  }

  onGetRecipes() {
    this.recipeRoute = true;
  }

  onGetShoppingList() {
    this.shoppingListRoute = true;
  }
}
