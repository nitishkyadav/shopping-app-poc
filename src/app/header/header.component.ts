import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { StoreModal } from '../store/modals/store.modal';
import { getUserState } from '../store/selectors/auth-selector';
import { AuthModal } from '../store/modals/auth.modal';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  isAdmin: boolean | undefined;

  constructor(
    private store: Store<StoreModal>,
    private headerService: HeaderService
  ) {}

  ngOnInit(): void {
    this.store.select(getUserState).subscribe((user: AuthModal | {}) => {
      if (Object.keys(user).length > 0 && 'isAdmin' in user) {
        this.isLoggedIn = true;
        this.isAdmin = user.isAdmin;
      } else {
        this.isLoggedIn = false;
        this.isAdmin=undefined
      }
    });
  }

  logoutHandler() {
    // this.loginService.logout();
    this.headerService.logoutHandler();
  }
}
