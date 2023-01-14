import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService: Title,
    public translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.get('Title')
      .subscribe((title: string) => this.titleService.setTitle(title));
  }

}
