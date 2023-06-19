import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level4',
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.scss'],
})
export class Level4Component implements OnInit {

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
    if(this.pass === '4'){
      this.router.navigate(['/part-V']);
    }else{
      this.id = id;
    }
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
