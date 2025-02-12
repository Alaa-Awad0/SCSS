import { MealsComponent } from './meals/meals.component';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'category/All', pathMatch: 'full' },
  {
    path: '',
    component: MealsComponent,
    title: 'Meals',
    children: [
      { path: '', redirectTo: 'category/All', pathMatch: 'full' },
      {
        path: 'category/:categoryName',
        component: MealsComponent,
        title: 'Meals',
      },
      {
        path: 'mealdetails/:mealId',
        component: MealsComponent,
        title: 'Meal Details',
      },
    ],
  },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
