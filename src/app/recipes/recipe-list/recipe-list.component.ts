import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test',
      'This is sample test',
      'https://cdn.loveandlemons.com/wp-content/uploads/2017/01/shakshuka-736x1024.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
