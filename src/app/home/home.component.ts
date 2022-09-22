import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     const font = document.querySelector(
      '.font'
    ) as HTMLElement;
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
   font.style.fontSize = '10px';
  } else {
    font.style.fontSize = '20px';
  }}

}
