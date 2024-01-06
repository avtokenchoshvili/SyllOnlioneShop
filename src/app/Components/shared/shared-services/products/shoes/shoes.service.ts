import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {
  private serverUrl: string = "http://localhost:3000/posts"
  private getProductByIdApi: string = 'http://localhost:3000/posts/'

  constructor(private httpClient: HttpClient) { }


  get(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/posts')
  }

  getProductById(productId: number): any {
    var apiUr: string = `${this.getProductByIdApi}/${productId}`;
    return this.httpClient.get(apiUr);

  }


}
