import {Component, OnInit} from '@angular/core';
import {Image} from '@fnxone/ngx-photoswipe';
import {Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(
    private titleService: Title,
    public translate: TranslateService) {
  }

  images: Array<Image> = [];

  ngOnInit(): void {
    this.translate.get('Gallery')
      .subscribe((title: string) => this.titleService.setTitle(title));
    this.addImages();

  }

  addImages(): any {
    for (let i = 0; i < 6; i++) {
      this.images.push({
        img: `../../assets/images/gallery/${i}.jpeg`,
        thumb: `../../assets/images/gallery/${i}-min.jpeg`,
        description: '',
        id: i,
        width: 3024
      });
    }

  }
}
