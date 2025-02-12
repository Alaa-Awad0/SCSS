import { MealsComponent } from './meals/meals.component';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'category/All', pathMatch: 'full' },
  {
    path: 'category',
    component: MealsComponent,
    title: 'Meals',
    children: [
      { path: '', redirectTo: 'All', pathMatch: 'full' },
      {
        path: ':categoryName',
        component: MealsComponent,
        title: 'Meals',
      },
    ],
  },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
