import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  recentSearches;
  ngOnInit() {
    this.setSearchKeys();
  }
  setSearchKeys() {
    this.recentSearches = JSON.parse(localStorage.getItem('searchKeys')).reverse();
    console.log(this.recentSearches);
  }
  setSearchKeysLocal(x) {
    this.recentSearches = x.reverse();
    console.log(this.recentSearches);
  }
}
