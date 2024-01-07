import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../shared-services/products/products.service';
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms';

import { ShoesService } from '../shared-services/products/shoes/shoes.service';
@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  product: any[] = [];


  constructor(private Products: ShoesService) {
    this.Products.get().subscribe((data: any[]) => {
      this.product = data;
      console.log(this.product, 'Product')

    })
  }



  ngOnInit() {


  }


}
