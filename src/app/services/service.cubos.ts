import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cubo } from "../models/cubo";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServiceCubos {
    constructor(private _http: HttpClient) {}
    url = environment.urlApi;

    async getCubos(): Promise<Cubo[]>{
        const request = "api/cubos"
        return firstValueFrom(this._http.get<Cubo[]>(this.url + request));
    }

    async getMarcasCubo(marca: string): Promise<Cubo[]>{
        const request = "api/cubos/cubosmarca/" + marca;
        return firstValueFrom(this._http.get<Cubo[]>(this.url + request));
    }

    async getMarcas(): Promise<string[]>{
        const request = "api/cubos/marcas";
        return firstValueFrom(this._http.get<string[]>(this.url + request));
    }
}