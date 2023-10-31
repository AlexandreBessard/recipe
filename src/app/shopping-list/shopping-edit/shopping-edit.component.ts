import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/Ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput')
  nameInputRef: ElementRef;

  @ViewChild('amountInput')
  amountInput: ElementRef;

  @Output()
  ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmout = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmout);
    this.ingredientAdded.emit(newIngredient);
  }

}
