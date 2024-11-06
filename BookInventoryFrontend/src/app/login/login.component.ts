import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private userService: UserService) {}

  login(): void {
    this.userService.login(this.username, this.password).subscribe(
      (response: any) => {
        alert('Login successful!');
        // Save token or perform other actions
      },
      (error: any) => {
        alert('Login failed: ' + error.error);
      }
    );
  }
}
