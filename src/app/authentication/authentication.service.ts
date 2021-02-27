import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import {tap} from 'rxjs/operators';
import { ProductUser } from './user-model';

interface AuthenticationUserResponse {
    email: String;
    password: String;
    token: String;
    expirationDate: Date;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    productUserSubject = new Subject<ProductUser>();

    constructor(private httpClient: HttpClient) { }

    signUp(email: String, password: String) {



    }

    login(userEmail: string, userPassword: string): Observable<AuthenticationUserResponse> {
        const userParams = {
            params: new HttpParams()
                .set('email', userEmail)
                .set('password', userPassword)
        }
        return this.httpClient.get<AuthenticationUserResponse>(
            environment.authenticationApiEndPoint + '/user', userParams)
            .pipe(tap( resData => {
                const productUser = new ProductUser(
                    resData.email,
                    resData.password,
                    resData.token,
                    resData.expirationDate
                );
                this.productUserSubject.next(productUser);
            }));

    }
}

