import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { GetService } from './get.service';
import { BoxComponent } from './box/box.component';
import { MovieBigComponent } from './movie-big/movie-big.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  recentSearches;
  favSearches;

  constructor(private getS: GetService) {

  }
  ngOnInit() {
    this.setSearchKeys();
    this.setFavKeys();
  }
  setSearchKeys() {
    this.recentSearches = this.getS.getSearchKeys();
  }
  setFavKeys() {
    this.favSearches = this.getS.getFavKeys();
  }
  setSearchKeysLocal(x) {
    this.recentSearches = x.reverse();
  }

 
}
