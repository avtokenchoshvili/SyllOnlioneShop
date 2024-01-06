import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from '../shared-services/products/products.service';
@Component({
  selector: 'app-shop-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-slider.component.html',
  styleUrl: './shop-slider.component.css'
})
export class ShopSliderComponent {


  shop: any[] = [];

  constructor(private Products: ProductsService) {
    this.Products.get().subscribe((data: any[]) => {
      this.shop = data;

    })
  }
}
