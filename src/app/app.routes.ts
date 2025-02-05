import { MealsComponent } from './meals/meals.component';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'meals', pathMatch: 'full' },
  // { path: 'meals', component: MealsComponent, title: 'Meals' },
  // { path: '**', component: NotFoundComponent,, pathMatch: 'full' },


  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: MealsComponent },
 { path: '**', component: NotFoundComponent, title: 'Not Found'} 

];
