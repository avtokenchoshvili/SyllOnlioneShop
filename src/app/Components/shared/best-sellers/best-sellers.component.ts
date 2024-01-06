import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
import {MatTabsModule} from '@angular/material/tabs';
import { ShoesService } from '../shared-services/products/shoes/shoes.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-best-sellers',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatTabsModule,RouterLink],
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.css'
})
export class BestSellersComponent {


  Shoes: any[] = [];

  constructor(private ShoesServices:ShoesService){
    this.ShoesServices.get().subscribe((data: any[]) => {
      this.Shoes = data;
     
    })
  }
}
