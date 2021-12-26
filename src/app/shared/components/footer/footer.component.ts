import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="text-center">
    <hr>
    <app-menu></app-menu>
    <p class="redText">
      Copyright 2021 | Shads
    </p>
    <p class="devUpdate">
      Happily built in the last dec 2021
    </p>
  </footer>
  `,
  styles: [
    `
    .devUpdate {
      background:#cccccc;
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
