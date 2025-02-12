import { Component, OnInit, inject } from '@angular/core';
import { MealsService } from '../meals.service';
import { IMeal } from '../imeal';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-meals',
  imports: [NavbarComponent, FooterComponent, RouterLink, RouterLinkActive],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss',
})
export class MealsComponent implements OnInit {
  categories: any[] = [];
  meals: IMeal[] = [];
  areas: string[] = [];
  selectedCategory: string = 'All';
  isLoading: boolean = true;

  constructor(
    private mealsService: MealsService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.mealsService.getCategories().subscribe({
      next: (res) => {
        setTimeout(() => {
          this.categories = res.categories;
          this.isLoading = false;
        }, 1500);
      },
      error: (err) => {
        console.error('Error fetching categories', err),
          (this.isLoading = false);
      },
    });

    this.fetchAllMeals();

    this.activateRoute.paramMap.subscribe((params) => {
      const categoryName = params.get('categoryName');

      if (categoryName) {
        this.updateMealsByCategory(categoryName);
      } else {
        this.updateMealsByCategory('All');
      }
    });
  }

  fetchAllMeals(): void {
    this.mealsService.getAllMeals().subscribe({
      next: (res) => {
        setTimeout(() => {
          this.meals = res.meals;
          this.isLoading = false;
        }, 1500);
      },
      error: (err) => {
        console.error('Error fetching categories', err),
          (this.isLoading = false);
      },
    });
  }

  updateMealsByCategory(category: string): void {
    this.selectedCategory = category;

    if (category === 'All') {
      this.fetchAllMeals();
    } else {
      this.mealsService.getMealsByCategory(category).subscribe({
        next: (res) => {
          this.meals = res.meals;
        },
        error: (err) => {
          console.error('Error fetching categories', err),
            (this.isLoading = false);
        },
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

  getFirstTwoWords(name: string): string {
    return name.split(' ').slice(0, 2).join(' ');
  }
}
