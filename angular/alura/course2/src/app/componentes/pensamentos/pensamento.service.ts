import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pensamento } from './pensamento';

@Injectable({
    providedIn: 'root',
})
export class PensamentoService {
    private readonly API = 'http://localhost:3000/pensamentos';

    constructor(private http: HttpClient) {}

    listar(pagina: number, filtro: string): Observable<Pensamento[]> {
        const itensPorPagina = 6;
        const params = new HttpParams()
            .set('_page', pagina)
            .set('_limit', itensPorPagina)
            .set('q', filtro.trim().length > 2 ? filtro : '');

        return this.http.get<Pensamento[]>(this.API, { params });
    }

    editar(pensamento: Pensamento): Observable<Pensamento> {
        return this.http.put<Pensamento>(
            `${this.API}/${pensamento.id}`,
            pensamento
        );
    }

    criar(pensamento: Pensamento): Observable<Pensamento> {
        return this.http.post<Pensamento>(this.API, pensamento);
    }

    excluir(id: number): Observable<Pensamento> {
        return this.http.delete<Pensamento>(`${this.API}/${id}`);
    }

    buscar(id: number): Observable<Pensamento> {
        return this.http.get<Pensamento>(`${this.API}/${id}`);
    }
}
