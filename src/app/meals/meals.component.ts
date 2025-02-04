import { Component, OnInit, inject } from '@angular/core';
import { MealsService } from '../meals.service';
import { IMeal } from '../imeal';
import { NgFor} from '@angular/common';

@Component({
  selector: 'app-meals',
  imports: [NgFor],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss',
})
export class MealsComponent implements OnInit {
  categories: any[] = [];
  meals: IMeal[] = [];
  selectedCategory: string = 'All';
  isVisible: boolean = false;

  constructor(private mealsService: MealsService) {}

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
      error: (err) => console.error('Error fetching all meals', err),
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
  
  open(){
    this.isVisible = true;
  }

  closeModal(e:MouseEvent, img:HTMLImageElement): void {
      if (e.target !== img) {
     this.isVisible = false;
    }
    }

  
}
