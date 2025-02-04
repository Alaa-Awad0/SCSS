import { Component } from '@angular/core';
import { MealsComponent } from "./meals/meals.component";

@Component({
  selector: 'app-root',
  imports: [MealsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'assignment-2-scss';
}
