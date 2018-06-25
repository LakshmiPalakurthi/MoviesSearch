import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BoxComponent } from './box/box.component';
import { SearchComponent } from './search/search.component';
import { GetService } from './get.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import {RouterModule} from '@angular/router';
import { MovieBigComponent } from './movie-big/movie-big.component';
import { MovieDetailsServiceService } from './movie-details-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoxComponent,
    SearchComponent,
    MovieComponent,
    MovieBigComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: BoxComponent
      },
      {
        path: 'movie/:id',
        component: MovieBigComponent
      }
    ])
  ],
  providers: [GetService, MovieDetailsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    if (!localStorage.getItem('searchKeys')) {
      localStorage.setItem('searchKeys', JSON.stringify([]));
    }
  }
}
