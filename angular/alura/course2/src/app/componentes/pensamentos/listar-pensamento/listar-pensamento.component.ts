import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-listar-pensamento',
    templateUrl: './listar-pensamento.component.html',
    styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
    listaPensamentos: Pensamento[] = [];
    paginaAtual: number = 1;
    haMaisPensamentos: boolean = true;
    filtro: string = '';
    favoritos: boolean = false;
    listaFavoritos: Pensamento[] = [];
    titulo: string = 'Meu Mural';

    constructor(private service: PensamentoService, private router: Router) {}

    ngOnInit(): void {
        this.service
            .listar(this.paginaAtual, this.filtro, this.favoritos)
            .subscribe((pensamentos) => (this.listaPensamentos = pensamentos));
    }

    carregarMaisPensamentos(): void {
        this.service
            .listar(++this.paginaAtual, this.filtro, this.favoritos)
            .subscribe((pensamentos) => {
                this.listaPensamentos.push(...pensamentos);
                if (!pensamentos.length) {
                    this.haMaisPensamentos = false;
                }
            });
    }

    pesquisarPensamentos(): void {
        this.haMaisPensamentos = true;
        this.paginaAtual = 1;
        this.service
            .listar(this.paginaAtual, this.filtro, this.favoritos)
            .subscribe((pensamentos) => {
                this.listaPensamentos = pensamentos;
            });
    }

    recarregarComponente(): void {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([this.router.url]);
    }

    listarFavoritos(): void {
        this.titulo = 'Meus Favoritos';
        this.favoritos = true;
        this.haMaisPensamentos = true;
        this.paginaAtual = 1;
        this.service
            .listar(this.paginaAtual, this.filtro, this.favoritos)
            .subscribe((pensamentos) => {
                this.listaPensamentos = pensamentos;
                this.listaFavoritos = pensamentos;
            });
    }
}
