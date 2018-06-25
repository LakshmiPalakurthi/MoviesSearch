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
  @ViewChild(BoxComponent)
  boxC: BoxComponent;
  constructor(private getS: GetService, private searchX:BoxComponent) {

  }
  ngOnInit() {
    this.setSearchKeys();
    this.setFavKeys();
    console.log(this.searchX.child);
  }
  setSearchKeys() {
    this.recentSearches = this.getS.getSearchKeys();
    console.log(this.recentSearches);
  }
  setFavKeys() {
    this.favSearches = this.getS.getFavKeys();
    console.log(this.favSearches);
  }
  setSearchKeysLocal(x) {
    this.recentSearches = x.reverse();
    console.log(this.recentSearches);
  }

  search(x) {
    console.log(x);
  }
}
