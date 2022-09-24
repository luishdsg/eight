import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Next = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      checkage: ['', [Validators.required]],
    });
  }
  ngOnInit() {}

  submit(){
    this.router.navigate(['/part-I']);
  }

  next(){
    this.Next = true;
  }

}
