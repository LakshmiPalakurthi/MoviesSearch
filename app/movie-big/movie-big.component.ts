import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import { MovieDetailsServiceService } from '../movie-details-service.service';
@Component({
  selector: 'app-movie-big',
  templateUrl: './movie-big.component.html',
  styleUrls: ['./movie-big.component.css']
})
export class MovieBigComponent implements OnInit {
  id;
  details = {};
  constructor(private act: ActivatedRoute, private mdService: MovieDetailsServiceService, private loc: Location) { }

  ngOnInit() {
    this.act.params.subscribe((res)=>{
      this.id = res.id;
      this.mdService.getDetails(this.id).subscribe(
        ( res ) => {
          console.log(res);
          this.details = res;
        }
      );
    });
    
  }

}
