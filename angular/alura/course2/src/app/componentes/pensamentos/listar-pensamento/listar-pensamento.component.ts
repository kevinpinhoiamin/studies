import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

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

    constructor(private service: PensamentoService) {}

    ngOnInit(): void {
        this.service
            .listar(this.paginaAtual, this.filtro)
            .subscribe((pensamentos) => (this.listaPensamentos = pensamentos));
    }

    carregarMaisPensamentos(): void {
        this.service
            .listar(++this.paginaAtual, this.filtro)
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
            .listar(this.paginaAtual, this.filtro)
            .subscribe((pensamentos) => {
                this.listaPensamentos = pensamentos;
            });
    }
}
