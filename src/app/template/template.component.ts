import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  public location: string[] = ['India', 'USA', 'UK'];
  public model = new User();
  constructor() {}

  ngOnInit() {}
  get formData() {
    return JSON.stringify(this.model);
  }
  Save(data) {
    console.log(data.value);
  }
}
