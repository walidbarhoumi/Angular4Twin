import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private categories: Categorie[] = [
    { id: 1, title: "Grand électroménager", image: "assets/images/walid.jpg", description: "Appareils électroménagers de grande taille.", available: true },
    { id: 2, title: "Petit électroménager", image: "assets/images/walid.jpg", description: "Appareils électroménagers de petite taille.", available: true },
    { id: 3, title: "Produits informatiques", image: "assets/images/walid.jpg", description: "Ordinateurs, accessoires et logiciels.", available: true },
    { id: 4, title: "Smart Phones", image: "assets/images/walid.jpg", description: "Téléphones intelligents de dernière génération.", available: true },
    { id: 5, title: "TV, images et son", image: "assets/images/walid.jpg", description: "Télévisions et équipements audio.", available: true },
    { id: 6, title: "Produits voiture", image: "assets/images/walid.jpg", description: "Produits d'entretien pour voiture.", available: false },
  ];

  getCategories(): Categorie[] {
    return this.categories; 
  }
}
