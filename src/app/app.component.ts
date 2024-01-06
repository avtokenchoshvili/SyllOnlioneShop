import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { UserMainComponent } from './Components/userComponents/user-main/user-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HomeComponent, UserMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SyllOnlioneShop';
}
