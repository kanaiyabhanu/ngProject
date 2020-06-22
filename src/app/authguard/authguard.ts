import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    let token = localStorage.getItem('currentuser');
    if (!token) {
      this.router.navigateByUrl('/login');
    }
    return true;
  }
}
