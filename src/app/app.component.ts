import {Component, OnInit} from '@angular/core';
import {IsLoadingService} from '@service-work/is-loading';
import {Observable} from 'rxjs';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private isLoadingService: IsLoadingService,
              private router: Router
  ) {
  }

  isLoading: Observable<boolean> | undefined;

  ngOnInit(): void {

    this.isLoading = this.isLoadingService.isLoading$();

    this.router.events
      .pipe(
        filter(
          event =>
            event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError,
        ),
      ).subscribe(event => {
      // if it's the start of navigation, `add()` a loading indicator
      if (event instanceof NavigationStart) {
        this.isLoadingService.add();
        return;
      }

      // else navigation has ended, so `remove()` a loading indicator
      this.isLoadingService.remove();
    });
  }

}
