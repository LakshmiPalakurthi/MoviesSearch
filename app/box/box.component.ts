import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  constructor() { }
  @Output()
  eventToApp = new EventEmitter();
  ngOnInit() {
  }

  respondx(data) {
    this.eventToApp.emit(data);
  }

}
