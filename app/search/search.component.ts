import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GetService } from '../get.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  resultsArray: any = [];
  keyword;
  @Output()
  localStorageEvent = new EventEmitter();
  pages = [];
  pageActive = 1;
  constructor(private get: GetService) { }

  ngOnInit() {
    this.resultsArray = this.get.moviesArr;
    this.pages = this.get.pages;
    this.keyword = this.get.keyword;
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
            }
            this.get.pages = this.pages;
          }
          console.log(this.pages);
          if (this.resultsArray.length > 0) {
            const arr = JSON.parse(localStorage.getItem('searchKeys'));
            if (!arr.includes(x)) {
              arr.push(x);
              this.localStorageEvent.emit(arr);
            }
            console.log(arr);
            localStorage.setItem('searchKeys', JSON.stringify(arr));
          }
        }
    );
  }
  paginate(x) {
    this.pageActive = x;
    this.get.paginate(x, this.keyword).subscribe(
        (res: any) => {
          console.log('Lolagain', res);
          this.resultsArray = res.results;
        }
    );
  }

}
