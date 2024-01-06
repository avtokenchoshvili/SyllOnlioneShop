import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoesService } from '../shared-services/products/shoes/shoes.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../shared-services/products/products.service';

import { FooterComponent } from '../footer/footer.component';
import { ShopSliderComponent } from '../shop-slider/shop-slider.component';

@Component({
  selector: 'app-shop-inner-pg',
  standalone: true,
  imports: [CommonModule, FooterComponent, ShopSliderComponent],
  templateUrl: './shop-inner-pg.component.html',
  styleUrl: './shop-inner-pg.component.css'
})
export class ShopInnerPgComponent {

  shopProduct!: any;



  constructor(private ProductsServices: ProductsService,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      var productId = params["shopId"]
      this.ProductsServices.getShopById(productId).subscribe((response: any[]) => {
        this.shopProduct = response;
        console.log("shops", this.shopProduct)

      })
    })

  }


}
