import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Subscription } from 'rxjs';
import { ProductUser } from '../authentication/user-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  private productUserSubscription: Subscription;
  private isProductUserAuthenticated: boolean = false;
  private authUser: ProductUser;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    
    this.productUserSubscription = this.authService.productUserSubject.subscribe(productUser => {
      this.isProductUserAuthenticated = !productUser ? false : true;
      this.authUser = productUser;
    });
  }
  ngOnDestroy(): void {
    //this.productUserSubscription = 
    this.authService.productUserSubject.unsubscribe();
  }

}
