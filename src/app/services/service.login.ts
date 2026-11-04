import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { User } from '../models/user';
import { firstValueFrom } from 'rxjs';
import { FullUser } from '../models/fulluser';
import { Compras } from '../models/compras';
import { SKIP_TOKEN } from '../utils/token.context';

@Injectable()
export class ServiceLogin {
  constructor(private _http: HttpClient) {}
  url = environment.urlApi;

  async loginAsync(login: User): Promise<any> {
    let request = '/api/manage/login';
    let json = JSON.stringify(login);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return firstValueFrom(
      this._http.post(this.url + request, json, {
        headers: headers,
        context: new HttpContext().set(SKIP_TOKEN, true),
      }),
    );
  }

  async registroAsync(register: FullUser): Promise<any> {
    let request = '/api/manage/registrousuario';
    let json = JSON.stringify(register);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return firstValueFrom(this._http.post(this.url + request, json, { headers: headers,
        context: new HttpContext().set(SKIP_TOKEN, true),
     }));
  }

  async getPerfilAsync(): Promise<FullUser> {
    let request = '/api/manage/perfilusuario/';
    return firstValueFrom(this._http.get<FullUser>(this.url + request));
  }

  async getComprasAsync(): Promise<Compras[]> {
    let request = '/api/compra/comprasusuario';
    return firstValueFrom(this._http.get<Compras[]>(this.url + request));
  }

  async insterCompraAsync(id: number): Promise<any> {
    let request = '/api/compra/insertarpedido/' + id;
    return firstValueFrom(this._http.post(this.url + request, null));
  }
}
