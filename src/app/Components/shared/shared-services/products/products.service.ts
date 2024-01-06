import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private serverApiUrl:string = 'http://localhost:3000/products'
private getShopByIdApi:string = 'http://localhost:3000/products/'



  constructor(private httpClient:HttpClient) { }

  get():Observable<any>{
   return this.httpClient.get(this.serverApiUrl)
    
  }

  getShopById(shopId:number):any{
    var apiUrs:string = `${this.getShopByIdApi}/${shopId}`;
    return this.httpClient.get(apiUrs)
  }
  

}
