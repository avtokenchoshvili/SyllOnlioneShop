import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
import {MatTabsModule} from '@angular/material/tabs';
import { FooterComponent } from '../footer/footer.component';
import { ProductsService } from '../shared-services/products/products.service';
import { response } from 'express';
import { RouterLink } from '@angular/router';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatTabsModule,FooterComponent,RouterLink,MatSliderModule,MatMenuModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  
  products:any;

  constructor(private ProductsServices:ProductsService ){
    this.ProductsServices.get().subscribe(response => {
      this.products = response
      console.log("giori", this.products)
    })

  }
}
