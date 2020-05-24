import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostServices {
  private PRODUCTS_ENDPOINT = '../../assets/productApi.json';
  public consumeData;
  public fetchData;
  constructor(private http: HttpClient) {}
  fetchProduct() {
    return this.http.get(this.PRODUCTS_ENDPOINT);
  }
  consumeApi(item) {
    this.fetchProduct().subscribe((data) => {
      this.consumeData = data;
    });

    // console.log(this.consumeData.length);
    this.fetchData = this.consumeData.find(
      (value) => value.productId === parseInt(item)
    );
    // console.log(this.fetchData);
    return this.fetchData;
  }
}
//new method in svs
//consume same api
//pass parameter from component to svs
//if param.id === product.id then return object value
