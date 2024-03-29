import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.scss'],
})
export class Level3Component implements OnInit {

  pass: string;
  id: any;
  layerClass: any;
  layers: any;
  isModalOpen = false;

  constructor(private router: Router) {

  }
  ngOnInit() {
  }

  next(id: any){
    if(this.pass === 'ursamajor'){
      this.router.navigate(['/part-IV']);
    }else{
      this.id = id;
    }
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
