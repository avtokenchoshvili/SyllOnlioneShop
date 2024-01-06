import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoesService } from '../shared-services/products/shoes/shoes.service';
import { ActivatedRoute } from '@angular/router';
import {MatIconModule} from '@angular/material/icon'
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-cartsummary',
  standalone: true,
  imports: [CommonModule,MatIconModule,FooterComponent],
  templateUrl: './cartsummary.component.html',
  styleUrl: './cartsummary.component.css'
})
export class CartsummaryComponent {

  Shoeshop:any[] = [];

  constructor(private ShoesServices:ShoesService,
    private activatedRoute:ActivatedRoute){

  }

  ngOnInit(): void{
    this.ShoesServices.get().subscribe((data: any[]) => {
      this.Shoeshop = data;
    
    })
    // this.activatedRoute.params.subscribe(params =>{
    //   var productId = params["productId"]
    //   this.ShoesServices.getProductById(productId).subscribe((response:any[]) =>{
    //     this.Shoeshop = response;
    //     console.log("Shoeshop",this.Shoeshop)
    //   })
    // })
    
  }
}
