import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoading: Observable<boolean> | undefined;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.isLoading = of(false);
  }

}
