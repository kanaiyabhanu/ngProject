import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iregister, Ilogin } from '../model/reactive.user';
import { map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class PostServices {
  private PRODUCTS_ENDPOINT = '../../assets/productApi.json';
  private REGISTER_ENDPOINT =
    'http://mobile.test.acorsociety.com/ideators/api/users/userregistrationasync';
  private LOGIN_ENDPOINT =
    'http://mobile.test.acorsociety.com/ideators/api/users/userloginasync';
  public consumeData;
  public fetchData;
  public headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }
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

  createUser(data: Iregister) {
    return this.http.post(this.REGISTER_ENDPOINT, JSON.stringify(data), {
      headers: this.headers,
    });
  }

  userLogin(data: Ilogin) {
    return (
      this.http
        .post(this.LOGIN_ENDPOINT, JSON.stringify(data), {
          headers: this.headers,
        })
        //performing pipes operation on the data that will return from the above
        .pipe(
          map((data: any) => {
            if (data && data.UserLogin) {
              localStorage.setItem('currentuser', JSON.stringify(data));
            }
            return data;
          })
        )
    );
  }
}

// Address: "thane"
// EmailId: "kbhanu@gmail.com"
// FirstName: "kan"
// LastName: "bhanu"
// MobileNo: 1234
// UserLogin:
// Password: "k123"
// UserName: "kb123"

//new method in svs
//consume same api
//pass parameter from component to svs
//if param.id === product.id then return object value
