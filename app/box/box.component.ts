import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  @ViewChild(SearchComponent)
  child:SearchComponent;
  constructor() { }
  @Output()
  eventToApp = new EventEmitter();
  ngOnInit() {
    
  }

  respondx(data) {
    this.eventToApp.emit(data);
  }

}
