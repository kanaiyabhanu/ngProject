import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostServices } from '../services/post.services';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public linkId;
  public productData;
  public fetchData;

  constructor(
    private ar: ActivatedRoute,
    private router: Router,
    private postServices: PostServices
  ) {}

  ngOnInit(): void {
    this.ar.params.subscribe((data) => {
      let id: number = data['id'];
      this.linkId = id;
    });
    console.log(this.linkId);
    this.postServices.fetchProduct().subscribe((data: any[]) => {
      let item: any[] = data;
      this.productData = item;

      // data.map((value) => {
      //   if (value.productId == parseInt(this.linkId)) this.fetchData = value;
      // });
    });
    console.log(this.productData);
    // this.productData = this.postServices.consumeApi(id);
    // console.log(this.linkId)
    // console.log(this.postServices.consumeApi());
    // this.postServiceData.fetchProduct().subscribe((data) => {
    //   this.data = data;
    //   console.log(this.data);
    // });
    // this.fetchData = this.data.find((item) => item.productId === this.linkId);
    // console.log(this.fetchData);
  }
}
