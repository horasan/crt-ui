export class ProductUser {

    constructor(public email: String, public password: String, private _token: String,  expirationDate: Date) {}
    
    get token() {
        // control logic
        return this._token;
    }
}