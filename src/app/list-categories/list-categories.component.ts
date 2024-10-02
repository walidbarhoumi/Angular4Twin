import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {
  categories: Categorie[] = [];
  title: string = '';

  constructor(private categorieService: CategorieService) {}

  ngOnInit(): void {
    this.categories = this.categorieService.getCategories();
  }

  showDescription(description: string): void {
    alert(description); 
  }
}
