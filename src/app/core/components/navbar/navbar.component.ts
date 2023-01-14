import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LanguageModel} from '../../../models/language.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(['ka', 'en', 'ru']);
    this.setLanguage();
  }
  currentLang: LanguageModel = {flag: 'ge', language: 'ქართული', code: 'ka'};
  languages: Array<LanguageModel> = [
    {flag: 'gb', language: 'English', code: 'en'},
    // {flag: 'ru', language: 'Русский', code: 'ru'},
    {flag: 'ge', language: 'ქართული', code: 'ka'},
  ];

  ngOnInit(): void {}

  get languagesDrop(): Array<LanguageModel> {
    return this.languages.filter(lang => lang.code !== this.translate.currentLang);
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
    this.currentLang = this.languages.filter(l => l.code === lang)[0];
    localStorage.setItem('lang', this.currentLang.code);
  }
  setLanguage(): void {
    let lang = localStorage.getItem('lang');
    lang = lang ? lang : this.currentLang.code;
    this.translate.setDefaultLang(lang);
    this.translate.currentLang = lang;
    this.currentLang = this.languages.filter(l => l.code === lang)[0];
  }
}
