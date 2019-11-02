import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private ht:HttpClient) { }
  Data(d) {
    return this.ht.post(" http://localhost:3000/posts",d)
  }
  getImage() {
    return this.ht.get(" http://localhost:3000/comments")
  }
}
