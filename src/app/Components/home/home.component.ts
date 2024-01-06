
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from '../shared/slide/slide.component';
import { NewProductComponent } from '../shared/new-product/new-product.component';
import { RumSmartComponent } from '../shared/rum-smart/rum-smart.component';
import { BestSellersComponent } from '../shared/best-sellers/best-sellers.component';
import { VideobannerComponent } from '../shared/videobanner/videobanner.component';
import { SignupComponent } from '../shared/signup/signup.component';
import { ContactComponent } from '../shared/contact/contact.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, SlideComponent, NewProductComponent, RumSmartComponent, BestSellersComponent, VideobannerComponent,
        SignupComponent, ContactComponent, FooterComponent]
})
export class HomeComponent {

}
