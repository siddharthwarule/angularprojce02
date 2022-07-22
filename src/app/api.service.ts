import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

    //method for get product from api these online  api use to get product

     getProduct(){

      return this.http.get<any>("https://fakestoreapi.com/products/")

      .pipe(map((res:any)=>{

            return res;

      }))

    }

   }

