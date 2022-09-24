import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.scss'],
})
export class Level1Component implements OnInit {
  form: FormGroup;
  pass: string;
  id: any;
  layerClass: any;
  layers: any;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      partI: ['', [Validators.required]],
    });
  }
  ngOnInit() {
  }

  next(id: any){
    if(this.pass === 'ok'){
      this.router.navigate(['/part-II']);
    }else{
      this.id = id;
    }
  }



}
