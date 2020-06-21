import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Iuser, Iregister } from '../model/reactive.user';
import { UserRegx } from './userregx';
import { PostServices } from '../services/post.services';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent implements OnInit {
  public userForm: FormGroup;
  public submitted: boolean = false;
  constructor(private fb: FormBuilder, private postService: PostServices) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      EmailId: ['', [Validators.required]],
      MobileNo: ['', [Validators.required]],
      UserLogin: this.fb.group({
        UserName: ['', [Validators.required]],
        Password: ['', [Validators.required]],
      }),
    });

    // this.userForm = this.fb.group({
    //   firstname: [
    //     '',
    //     [Validators.required, Validators.minLength(5), UserRegx.UserFirstName],
    //   ],
    //   lastname: ['', [Validators.required, UserRegx.UserLastname]],
    //   Address: ['', [Validators.required, UserRegx.Address]],
    //   UserLogin: this.fb.group({
    //     EmailId: ['', [Validators.required, UserRegx.Email]],
    //     Password: ['', [Validators.required, UserRegx.Password]],
    //   }),
    // });
  }

  // Save(data: Iuser) {
  //   this.submitted = true;
  //   if (!this.userForm.valid) {
  //     return;
  //   }
  //   console.log(data);
  // }

  Save(data: Iregister) {
    this.submitted = true;
    if (!this.userForm.valid) {
      return;
    }
    console.log(data);
    this.postService.createUser(data).subscribe((item) => {
      alert('Registration Done');
      console.log(item);
    });
  }
}
