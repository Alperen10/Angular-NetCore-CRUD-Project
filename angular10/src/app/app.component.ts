import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignmentProject';

  onLogout()
  {
    localStorage.removeItem("userInfo");
  }

  get isUserlogin()
  {
    const user = localStorage.getItem("userInfo");
    return user && user.length > 0;
  }
}
