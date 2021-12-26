import { Component } from '@angular/core';

//Decorator - to decorate below class with its meta data
@Component({
  selector: 'app-root', // mandatory
  templateUrl: './app.component.html', // mandatory ; only single file reference
  styleUrls: ['./app.component.css'] // optional can have multiple
})
export class AppComponent {
  title = 'contact-manager-ng12-dec2021';
}
