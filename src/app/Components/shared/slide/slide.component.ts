import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [CommonModule, MatIconModule,],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css'
})
export class SlideComponent {

}
