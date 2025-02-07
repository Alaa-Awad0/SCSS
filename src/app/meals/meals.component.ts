import { Component, OnInit, inject } from '@angular/core';
import { MealsService } from '../meals.service';
import { IMeal } from '../imeal';
import { NavbarComponent } from '../navbar/navbar.component';

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
  isLoading: boolean = true; // تحديد اللودر عند تحميل البيانات لأول مرة
  idMeal: any;


  constructor(private mealsService: MealsService) {}

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
        this.isLoading = false;
      }
    });

    this.fetchAllMeals();
  }

  fetchAllMeals(): void {
    this.mealsService.getAllMeals().subscribe({
      next: (res) => {
        setTimeout(() => {
          this.meals = res.meals; // تصحيح الخطأ هنا
          this.isLoading = false;
        }, 1500);
      },
      error: (err) => {
        console.error('Error fetching categories', err),
        this.isLoading = false;
      }
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
          this.isLoading = false;
        }
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
