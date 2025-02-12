import { MealsComponent } from './meals/meals.component';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: MealsComponent,
  title: 'Meals',
  children: [
    { path: '', redirectTo: 'category/All', pathMatch: 'full' },
    {
      path: 'category/:categoryName',
      component: MealsComponent,
      title: 'Meals',
    },
  ],
 },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
