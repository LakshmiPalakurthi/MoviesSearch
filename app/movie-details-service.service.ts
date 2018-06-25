import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsServiceService {

  constructor(private http: HttpClient) { }

  getDetails(id) {
    console.log(`https://api.themoviedb.org/3/movie/${id}/images?api_key=2ebe0069d1b5c50c03534a0b2c6ade7f&language=en-US`);
    return this.http.
      get(`https://api.themoviedb.org/3/movie/${id}?api_key=2ebe0069d1b5c50c03534a0b2c6ade7f&language=en-US`);
  }

}
