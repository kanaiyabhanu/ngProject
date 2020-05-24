import { Component, OnInit, Input } from '@angular/core';
import { PostServices } from '../services/post.services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products;
  public imageButtonText = 'Hide';
  public imageButton: boolean = true;
  @Input() public value;
  constructor(private PostServices: PostServices) {}

  ngOnInit(): void {
    this.PostServices.fetchProduct().subscribe((data) => {
      this.products = data;
    });
  }
  onImageButtonClick() {
    this.imageButton = !this.imageButton;
    this.imageButton
      ? (this.imageButtonText = 'Hide')
      : (this.imageButtonText = 'Show');
  }
}
