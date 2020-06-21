import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ilogin } from '../model/reactive.user';
import { PostServices } from '../services/post.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public userLoginForm: FormGroup;
  public submitted: boolean = false;
  public errormessage: string;
  public loginmessage: boolean = false;
  public errorlogin: boolean = false;
  constructor(private fb: FormBuilder, private postService: PostServices) {}

  ngOnInit() {
    this.userLoginForm = this.fb.group({
      UserLogin: this.fb.group({
        UserName: ['', [Validators.required]],
        Password: ['', [Validators.required]],
      }),
    });
  }
  Save(data: Ilogin) {
    this.submitted = true;
    if (!this.userLoginForm.valid) {
      return;
    }
    console.log(data);

    this.postService.userLogin(data).subscribe((item: any) => {
      if (item.UserIdentity) {
        this.loginmessage = true;
        this.errorlogin = false;
        console.log(item);
      } else {
        this.loginmessage = false;
        this.errorlogin = true;

        this.errormessage = item.Error;
        console.log(this.errormessage);
      }
    });
  }
}
