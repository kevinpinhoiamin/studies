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

    listar(
        pagina: number,
        filtro: string,
        favoritos: boolean
    ): Observable<Pensamento[]> {
        const itensPorPagina = 6;
        let params = new HttpParams()
            .set('_page', pagina)
            .set('_limit', itensPorPagina);

        if (filtro.trim().length > 2) {
            params = params.set('q', filtro);
        }

        if (favoritos) {
            params = params.set('favorito', true);
        }

        return this.http.get<Pensamento[]>(this.API, { params });
    }

    editar(pensamento: Pensamento): Observable<Pensamento> {
        return this.http.put<Pensamento>(
            `${this.API}/${pensamento.id}`,
            pensamento
        );
    }

    mudarFavorito(pensamento: Pensamento): Observable<Pensamento> {
        pensamento.favorito = !pensamento.favorito;
        return this.editar(pensamento);
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
