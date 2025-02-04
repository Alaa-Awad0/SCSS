import { MealsComponent } from './meals/meals.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'meals', pathMatch: 'full' },
  { path: 'meals', component: MealsComponent, title: 'meals' },
  { path: '**', redirectTo: 'meals', pathMatch: 'full' },
];
