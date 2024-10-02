import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    this.products = [
      { id: 1, title: "Produit A", description: "Description A", price: 100, image: "assets/images/walid.jpg", available: true, nb_Likes: 10 },
      { id: 2, title: "Produit B", description: "Description B", price: 150, image: "assets/images/walid.jpg", available: true, nb_Likes: 5 },
      { id: 3, title: "Produit C", description: "Description C", price: 200, image: "assets/images/productC.jpg", available: false, nb_Likes: 2 },
    ];
  }

  likeProduct(product: Product): void {
    if (product.nb_Likes === undefined) {
      product.nb_Likes = 0; 
    }
    product.nb_Likes++;
  
   
    product.isPopular = product.nb_Likes >= 10;
  }
  
  
}
