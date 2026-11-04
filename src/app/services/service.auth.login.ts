import { Injectable, signal } from "@angular/core";
import { ServiceLogin } from "./service.login";
import { FullUser } from "../models/fulluser";

@Injectable({providedIn: 'root'})
export class ServiceAuthLogin {
    constructor(
        private _serviceLogin: ServiceLogin
    ) {}

    public user = signal<FullUser | null>(null);

    async loginAuthAsync(token: string): Promise<any> {
        sessionStorage.setItem('token', token);
        let comprador = await this._serviceLogin.getPerfilAsync();
        this.user.set(comprador);
    }

    async logoutAuthAsync(): Promise<any> {
        sessionStorage.removeItem('token');
        this.user.set(null);
    }
}