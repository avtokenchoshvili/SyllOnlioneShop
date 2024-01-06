import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}



// this.getDetailProductsById()

// getDetailProductsById(){
//   this.ShoesServices.getProductById(this.productId).subscribe((res:any) =>{
//     console.log(res , ' data')
//     this.curentProduct  = res.CoverImages
//   })
// }