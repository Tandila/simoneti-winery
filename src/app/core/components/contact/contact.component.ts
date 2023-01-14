import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private titleService: Title,
    public translate: TranslateService) { }
  contacts = [
    // {icon: 'fab fa-facebook-square', text: 'Simoneti wine cellar • სიმონეთის ღვინის მარანი', url: 'https://www.facebook.com/simoneti_winecellar'},
    {icon: 'fab fa-instagram', text: 'Simoneti wine cellar • სიმონეთის ღვინის მარანი', url: 'https://www.instagram.com/simoneti_winecellar'},
    // {icon: 'fas fa-phone-square-alt', text: '+995 591 05 79 25', url: 'tel:+995591057925'}
    // {icon: 'fas fa-map-marker-alt', text: 'location'},
    // {icon: 'fas fa-envelope', text: 'email'},
    ];
  ngOnInit(): void {
    this.translate.get('Contact')
      .subscribe((title: string) => this.titleService.setTitle(title));
  }

}
