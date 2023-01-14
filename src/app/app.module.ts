import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './core/components/footer/footer.component';
import {NavbarComponent} from './core/components/navbar/navbar.component';
import {HomeComponent} from './core/components/home/home.component';
import {AboutComponent} from './core/components/about/about.component';
import {ContactComponent} from './core/components/contact/contact.component';
import {ProductsComponent} from './core/components/products/products.component';
import {CommonModule} from '@angular/common';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AlertModule} from 'ngx-bootstrap/alert';
import {GalleryComponent} from './core/components/gallery/gallery.component';
import {CustomLightboxAdapter} from './core/services/CustomLightBoxAdapter.service';
import {LightboxAdapter, NgxPhotoswipeModule} from '@fnxone/ngx-photoswipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    AlertModule.forRoot(),
    NgxPhotoswipeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [
    {provide: LightboxAdapter, useClass: CustomLightboxAdapter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// tslint:disable-next-line:typedef
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
