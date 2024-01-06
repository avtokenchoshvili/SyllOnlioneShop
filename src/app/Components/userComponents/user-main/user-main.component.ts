import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';
import { RouterOutlet } from '@angular/router';
import { UserOrdersComponent } from '../user-orders/user-orders.component';
import { UserAddressesComponent } from '../user-addresses/user-addresses.component';
import { UserAccountDetailsComponent } from '../user-account-details/user-account-details.component';
import { FooterComponent } from '../../shared/footer/footer.component';
@Component({
  selector: 'app-user-main',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, UserMenuComponent, RouterOutlet, UserOrdersComponent, UserAddressesComponent, UserAccountDetailsComponent],
  templateUrl: './user-main.component.html',
  styleUrl: './user-main.component.css'
})
export class UserMainComponent {

}
