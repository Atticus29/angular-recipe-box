import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <div class="recipe-display-section">
      <ul>
        <li *ngFor="let currentRecipe of recipes">
          <h3 (click)="revealDetails(currentRecipe)">{{currentRecipe.title}}</h3>
        </li>
        <div *ngIf=selectedRecipe>
          <h5>{{selectedRecipe.details}}</h5>
          <button (click)="hideDetails()">Hide</button>
        </div>
      </ul>
    </div>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] =[
    new Recipe('Apple pie', 'Just make an apple pie'),
    new Recipe('Salad', 'you should already know'),
    new Recipe('Tv dinner', 'epic fail....')
  ];

  selectedRecipe = null;

  hideDetails() {
    this.selectedRecipe = null;
  }

  revealDetails(currentRecipe) {
    this.selectedRecipe = currentRecipe;
  }
}

export class Recipe{
  constructor (public title: string, public details: string){}
  revealDetails(currentRecipe){


  }
}
