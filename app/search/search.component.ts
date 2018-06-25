import { Component, OnInit, EventEmitter, Output, ElementRef } from '@angular/core';
import { GetService } from '../get.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  resultsArray: any = [];
  keyword;
  fav = false;
  favSearches;
  recentSearches;
  @Output()
  localStorageEvent = new EventEmitter();
  pages = [];
  tempPages = [];
  pageActive = 1;
  constructor(private get: GetService, private el: ElementRef) { }

  ngOnInit() {
    this.resultsArray = this.get.moviesArr;
    this.pages = this.get.pages;
    this.tempPages = this.get.pages;
    this.keyword = this.get.keyword;
    this.favSearches = this.get.getFavKeys();
    this.recentSearches = this.get.getSearchKeys();
  }

  search(x) {
    this.keyword = x;
    this.get.keyword = x;
    this.pageActive = 1;
    this.pages = [];
    console.log(this.keyword);
    this.get.search(x).subscribe(
        (res: any) => {
          console.log('Lol', res);
          this.get.moviesArr = res.results;
          this.resultsArray = this.get.moviesArr;
          if (res.total_pages > 0) {

            for (let i = 1; i <= res.total_pages; i++) {
                this.pages.push(i);
                this.tempPages.push(i);
            }
            this.get.pages = this.pages;
          }
          console.log(this.pages);
          if (this.resultsArray.length > 0) {

              this.get.putSearchKeys(this.keyword);
              this.recentSearches = this.get.getSearchKeys();

            if (this.fav) {
              this.get.putFavKeys(this.keyword);
              this.favSearches = this.get.getFavKeys();

            }
          }
        }
    );
  }

  setFav() {
    console.log(this.fav);
  }
  paginate(x) {
    if (x > this.pageActive) {
      const elx = this.el.nativeElement.querySelectorAll('ul.pages')[0];
      // elx.scrollLeft = elx.scrollLeft + 40;
      elx.scrollBy(40, 0);
      const elx_ = this.el.nativeElement.querySelectorAll('ul.pages')[1];
      // elx.scrollLeft = elx.scrollLeft + 40;
      elx_.scrollBy(40, 0);
    }
    else
      {
      const elx = this.el.nativeElement.querySelectorAll('ul.pages')[0];
      // elx.scrollLeft = elx.scrollLeft + 40;
      elx.scrollBy(-40, 0);
      const elx_ = this.el.nativeElement.querySelectorAll('ul.pages')[1];
      // elx.scrollLeft = elx.scrollLeft + 40;
      elx_.scrollBy(-40, 0);
    }
    this.pageActive = x;
    this.get.paginate(x, this.keyword).subscribe(
        (res: any) => {
          this.resultsArray = res.results;
        }
    );
  }

  setFavKeys() {
    this.favSearches = this.get.getFavKeys();
    console.log(this.favSearches);
  }

  setSearchKeys() {
    this.recentSearches = this.get.getSearchKeys();
   /*let x = this.getS.getSearchKeys();
   x.subscribe((res) => {
      console.log('Response', res);
    });
    console.log(this.recentSearches);*/
  }

}
