import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_URL = "https://dummyjson.com/products";

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(this.API_URL);
  }

  getProduct(id: number) {
    return this.http.get<Product>(this.API_URL + "/" + id)
  }
}
