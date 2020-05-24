import { Component } from '@angular/core';
@Component({
  selector: 'product-search',
  template: `
    &nbsp;
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search Here"
              [(ngModel)]="searchProduct"
            />
            Filter By : {{ searchProduct }}
          </div>
        </div>
      </div>
    </div>
    <app-product-list [value]="searchProduct"></app-product-list>
  `,
})
export class ProductSearch {
  public searchProduct: string;
}
