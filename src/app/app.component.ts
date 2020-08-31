import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics-assignment-three-start';
  password = 'P1234';
  showPassword = false;

  displaysTimes = [];

  togglePassword() {
    this.showPassword = !this.showPassword;

    if (this.showPassword) {
      this.displaysTimes.push(new Date());
    }
  }

  getBackgroundColor(index) {
    if (index >= 4) {
      return 'blue';
    }
  }
}
