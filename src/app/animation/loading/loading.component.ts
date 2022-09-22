import { SaveService } from './../../service/save.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {


  collapsed = false;
  press = true;
  datasave: any = [];
  constructor(
    private save: SaveService,
    private router: Router,
    public translate: TranslateService,

  ) {
    translate.addLangs(['pt', 'en']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void{
    this.datasave = this.save.language;
    // eslint-disable-next-line prefer-const
    let translate = localStorage.getItem('translate');
    if(!translate) {
      localStorage.setItem('translate', 'en');
      this.changeLanguage('en');
    } else {
      if(translate === 'en') {
      localStorage.setItem('translate', 'en');
      this.changeLanguage('en');
      } else {
        localStorage.setItem('translate', 'pt');
        this.changeLanguage('pt');
      }
    }
  }
  changeLanguage(lang: string): void{
    this.translate.use(lang);
    if(lang === 'en'){
      localStorage.setItem('translate', 'en');
    }else{
      localStorage.setItem('translate', 'pt');
    }
  }
  btn(){
    this.collapsed = true;
    this.press = false;
  }

  pt(){
    this.router.navigate(['/home']);
  }

}
