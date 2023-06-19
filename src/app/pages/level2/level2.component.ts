import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss'],
})
export class Level2Component implements OnInit {
  pass: string;
  id: any;
  layerClass: any;
  layers: any;
  isModalOpen = false;
  constructor(private router: Router) {
  }
  ngOnInit() {
  }

  next(id: any) {
    if (this.pass === '4') {
      this.router.navigate(['/part-III']);
    } else {
      this.id = id;
    }
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
