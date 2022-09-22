import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  language = [
    {
      pt: 'português',
      en: 'English',
      fr: 'Français',
      de: 'Deutsch',
      jp: '日本',
      ru: 'русский'
    }
  ];

  constructor() { }
}
