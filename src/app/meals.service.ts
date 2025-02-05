import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/categories.php`);
  }

  getMealsByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/filter.php?c=${category}`);
  }

  getAllMeals(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search.php?s=`);
  }

}
