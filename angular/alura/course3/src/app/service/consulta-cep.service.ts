import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ConsultaCepService {
  API_URL = "https://viacep.com.br/ws";
  constructor(private http: HttpClient) {}

  getConsultaCEP(cep: string): Observable<any> {
    return this.http.get(`${this.API_URL}/${cep}/json`);
  }
}
