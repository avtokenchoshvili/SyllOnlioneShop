import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-account-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-account-details.component.html',
  styleUrl: './user-account-details.component.css'
})
export class UserAccountDetailsComponent {
  userForm!: FormGroup;

  ngOnInit() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      displayName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      oldPassword: new FormControl(''),
      newPassword: new FormControl(''),
      repeatNewPassword: new FormControl('')
    });
  }



  onSubmit() {
    console.log(this.userForm.value);
  }


  passwordsMatch() {
    const changeGroup = this.userForm.get('passwordChange') as FormGroup;
    return changeGroup.get('newPassword')?.value === changeGroup.get('repeatNewPassword')?.value;
  }
}
