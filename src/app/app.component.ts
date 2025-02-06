import { Component, OnInit } from '@angular/core';
import { MealsComponent } from './meals/meals.component';
import { FooterComponent } from './footer/footer.component';
import {  RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
