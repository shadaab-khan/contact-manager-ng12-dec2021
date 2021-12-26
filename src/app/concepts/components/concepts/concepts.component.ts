import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  //Interpolation related
  appName = "Contact Manager";
  teamSize = 7;

  // property binding related
  companyName = "VFISLK";
  websiteURL = "https://www.vfislk.com";

  // two-way binding related
  courseName = "Angular";

  //directives related
  isLoggedIn = true;

  skillList: string[] = ['html','css','js','ts','ng']

  constructor() { }

  ngOnInit(): void {
  }

  // event binding related
  handleClickMe(event: Event): void {
    alert("Clicked");
    console.log(event);
    // TODO: Chane btn label to Clicked & learn abt disabling button
  }

}
