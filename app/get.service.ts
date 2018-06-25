import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetService {

  moviesArr = [];
  pages = [];
  keyword = '';
  constructor(private http: HttpClient) { }

  search = (keyword) => this.http.
            get(`https://api.themoviedb.org/3/search/movie?api_key=2ebe0069d1b5c50c03534a0b2c6ade7f&page=1&query=${keyword}`);
  paginate = (pagex, keyword) => {
    console.log(pagex, `https://api.themoviedb.org/3/search/movie?api_key=2ebe0069d1b5c50c03534a0b2c6ade7f&page=${pagex}&query=${keyword}`);
    return this.http.
            get(`https://api.themoviedb.org/3/search/movie?api_key=2ebe0069d1b5c50c03534a0b2c6ade7f&page=${pagex}&query=${keyword}`)};


  putSearchKeys(x) {
      const arr = JSON.parse(localStorage.getItem('searchKeys'));
          if (!arr.includes(x)) {
               arr.push(x);
             }
             console.log(arr);
             localStorage.setItem('searchKeys', JSON.stringify(arr));
          }
  putFavKeys(x) {
    const favArr = JSON.parse(localStorage.getItem('favKeys'));
    if (!favArr.includes(x)) {
      favArr.push(x);
    }
    console.log(favArr);
    localStorage.setItem('favKeys', JSON.stringify(favArr));
  }

  getSearchKeys = () => JSON.parse(localStorage.getItem('searchKeys')).reverse();

  getFavKeys = () => JSON.parse(localStorage.getItem('favKeys')).reverse();
}
