import { Component, OnInit } from '@angular/core';
import { StoreService } from './store/services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'shopping-app-poc';
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.setAuthState();
    this.storeService.setCartState();
  }
}
