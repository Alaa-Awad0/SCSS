import { Component, OnInit, inject } from '@angular/core';
import { MealsService } from '../meals.service';
import { IMeal } from '../imeal';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meals',
  imports: [NavbarComponent],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss',
})
export class MealsComponent implements OnInit {
  categories: any[] = [];
  meals: IMeal[] = [];
  areas: string[] = [];
  selectedCategory: string = 'All';
  isVisible: boolean = false;
idMeal: any;


  constructor(private mealsService: MealsService, private router: Router) {}

  ngOnInit(): void {
    this.mealsService.getCategories().subscribe({
      next: (res) => {
          this.categories = res.categories;
      },
      error: (err) => console.error('Error fetching categories', err),
    });

    this.fetchAllMeals();
  }

  fetchAllMeals(): void {
    this.mealsService.getAllMeals().subscribe({
      next: (res) => {

          this.meals = res.meals;
          
      },
      error: (err) => {
        console.error('Error fetching all meals', err);

      },
    });
  }

  updateMealsByCategory(category: string): void {
    this.selectedCategory = category;
    this.router.navigate(['/categories', category]);

    if (category === 'All') {
      this.fetchAllMeals();
    } else {
      this.mealsService.getMealsByCategory(category).subscribe({
        next: (res) => {
          this.meals = res.meals;
        },
        error: (err) => console.error('Error fetching meals for category', err),
      });
    }
  }

  updateCategory(category: string): void {
    this.selectedCategory = category;
    this.updateMealsByCategory(category);
  }

  updateOption(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const category = target.value;

    console.log('Selected Category:', category);

    this.selectedCategory = category;
    this.updateMealsByCategory(category);
  }

  openNav(): void {
    this.isVisible = true;
  }

  updateVisibility(value: boolean): void {
    this.isVisible = value;
  }

  closeNav(): void {
    this.isVisible = false;
  }
}
