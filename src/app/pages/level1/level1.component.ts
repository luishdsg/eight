import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.scss'],
})
export class Level1Component implements OnInit {
  pass: string;
  id: any;
  load = true;
  content = false;
  layerClass: any;
  layers: any;
  isModalOpen = false;

  constructor(private router: Router) {
    setTimeout(() => {
      this.load = false;
      this.content = true;
    }, 2000);
  }
  ngOnInit() {
  }

  next(id: any) {
    if (this.pass === 'followyourinstincts') {
      this.router.navigate(['/part-II']);
    } else {
      this.id = id;
    }
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
