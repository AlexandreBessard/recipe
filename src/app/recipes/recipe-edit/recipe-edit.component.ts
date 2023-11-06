import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        // id is the name of our parameter using the dynamic route
        this.id = +params['id'];
        // Check if the id exists, returns true if the id exists
        this.editMode = params['id'] != null;
        console.log("Edit mode: -> " + this.editMode);
      }
    );
  }

}
