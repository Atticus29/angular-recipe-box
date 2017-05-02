import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <div class="row">
      <div class="recipe-display-section col-md-6">
        <ul>
          <li *ngFor="let currentRecipe of recipes">
            <h3 (click)="revealDetails(currentRecipe)">{{currentRecipe.title}}</h3>
          </li>
          <div *ngIf=selectedRecipe>
            <h5>{{selectedRecipe.details}}</h5>
            <button (click)="hideDetails()">Hide</button>
            <button (click)="turnOnEditMode()">Edit</button>
          </div>
        </ul>
      </div>
      <div *ngIf=editMode>
        <div class="form-display-section col-md-6">
          <form>
            <label for="title">Title:</label>
            <input [(ngModel)]="selectedRecipe.title" name="title">
            <label for="description">Description:</label>
            <input [(ngModel)]="selectedRecipe.details" name="description">
            <button (click)="hideDetails()"  type="button">Done</button>
          </form>
        </div>
      </div>
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
  editMode = null;

  turnOnEditMode(){
    this.editMode = true;
  }

  hideDetails() {
    this.selectedRecipe = null;
    this.editMode = null;
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
