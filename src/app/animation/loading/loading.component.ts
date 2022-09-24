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
    translate.addLangs(['pt', 'en', 'fr', 'ru', 'de', 'jp']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    this.datasave = this.save.language;
    // eslint-disable-next-line prefer-const
    let translate = localStorage.getItem('translate');
    if (!translate) {
      localStorage.setItem('translate', 'en');
      this.changeLanguage('en');
    } else {
      if (translate === 'en') {
        localStorage.setItem('translate', 'en');
        this.changeLanguage('en');
      } else if (translate === 'pt') {
        localStorage.setItem('translate', 'pt');
        this.changeLanguage('pt');
      } else if (translate === 'jp') {
        localStorage.setItem('translate', 'jp');
        this.changeLanguage('jp');
      } else if (translate === 'ru') {
        localStorage.setItem('translate', 'ru');
        this.changeLanguage('ru');
      } else if (translate === 'de') {
        localStorage.setItem('translate', 'de');
        this.changeLanguage('de');
      } else if (translate === 'fr') {
        localStorage.setItem('translate', 'fr');
        this.changeLanguage('fr');
      }
    }
  }
  changeLanguage(lang: string): void {
    this.translate.use(lang);
    if (lang === 'en') {
      localStorage.setItem('translate', 'en');
    } else if (lang === 'pt') {
      localStorage.setItem('translate', 'pt');
    } else if (lang === 'fr') {
      localStorage.setItem('translate', 'fr');
    }
  }
  btn() {
    this.collapsed = true;
    this.press = false;
  }

  home() {
    this.router.navigate(['/home']);
  }

}
