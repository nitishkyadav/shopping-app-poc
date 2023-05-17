import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import userData from '../data/users.json';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { loginAction } from '../store/actions/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  loginForm: FormGroup;
  loggedIn = false;
  buttonClicked = false;
  bannedProjectNames = ['test'];

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  submitHandler() {
    this.buttonClicked = true;
    console.log(this.loginForm);
    console.log('Submit');
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    const findData = userData.find(
      (user) => user.email === email && user.password === password
    );
    if (findData) {
      const loggedInUser = {
        email: findData.email,
        isAdmin: findData.isAdmin,
        name: findData.name,
      };

      this.store.dispatch(loginAction({ user: loggedInUser }));
      this.loggedIn = true;
      if (findData.isAdmin) {
        this.router.navigateByUrl('/admin/products');
      } else {
        this.router.navigateByUrl('/products');
      }
    } else {
    }
  }
}
