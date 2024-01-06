import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css'
})
export class UserMenuComponent {
  userImagePath = 'https://imageio.forbes.com/specials-images/imageserve/6031e310d4a4c4b5ccb17871/Natural-beauty-portrait-of-young-woman/960x0.jpg?format=jpg&width=960'; // Replace with your default image path

  onImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;

    // Check if 'files' exists and has at least one file
    if (input.files && input.files.length) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        // Make sure to add a check if reader.result is not null
        this.userImagePath = reader.result ? reader.result as string : '';
      };
      reader.readAsDataURL(file);
    }
  }

}
