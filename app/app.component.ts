import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html' 
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
