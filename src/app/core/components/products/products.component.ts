import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private titleService: Title,
    public translate: TranslateService) {
  }

  products = [
    {
      name: 'Petnat',
      img: 'https://secure.img1-fg.wfcdn.com/im/97536966/compr-r85/4210/42108193/worthy-wine-bottle-pepper-mill.jpg',
      id: '1'
    },
    {
      name: 'Petnat',
      img: 'https://secure.img1-fg.wfcdn.com/im/97536966/compr-r85/4210/42108193/worthy-wine-bottle-pepper-mill.jpg',
      id: '2'
    },
    {
      name: 'Petnat',
      img: 'https://secure.img1-fg.wfcdn.com/im/97536966/compr-r85/4210/42108193/worthy-wine-bottle-pepper-mill.jpg',
      id: '3'
    }
  ];

  ngOnInit(): void {

    this.translate.get('Products')
      .subscribe((title: string) => this.titleService.setTitle(title));
  }

}
