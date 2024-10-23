import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-form-user-component',
  templateUrl: './form-user-component.component.html',
  styleUrls: ['./form-user-component.component.css']
})
export class FormUserComponentComponent {
  user: User = new User();
  users: User[] = [];

  onSubmit() {
    if (this.user.firstName && this.user.lastName && this.user.email && this.user.password) {
      this.users.push({ ...this.user });
      console.log('User added:', this.user);
      this.user = new User(); 
    }
  }
}
