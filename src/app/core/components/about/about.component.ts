import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private titleService: Title,
    public translate: TranslateService) { }

  ngOnInit(): void {

    this.translate.get('About')
      .subscribe((title: string) => this.titleService.setTitle(title));
  }

}
