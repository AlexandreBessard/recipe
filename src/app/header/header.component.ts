import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {

  // Use this event to be used from the parent component like app-component for example
    @Output()
    featureSelected = new EventEmitter<string>();

    onSelect(feature: string) {
      this.featureSelected.emit(feature);
    }
}
