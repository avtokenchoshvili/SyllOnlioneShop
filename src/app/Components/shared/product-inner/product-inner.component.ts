import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoesService } from '../shared-services/products/shoes/shoes.service';
import { ActivatedRoute } from '@angular/router';

import { NewProductComponent } from '../new-product/new-product.component';

import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-inner',
  standalone: true,
  imports: [CommonModule, NewProductComponent, FooterComponent, RouterLink],
  templateUrl: './product-inner.component.html',
  styleUrl: './product-inner.component.css'
})
export class ProductInnerComponent {
  curentProduct!: any;



  constructor(private ShoesServices: ShoesService,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      var productId = params["productId"]
      this.ShoesServices.getProductById(productId).subscribe((response: any[]) => {
        this.curentProduct = response;

      })
    })

  }

}


