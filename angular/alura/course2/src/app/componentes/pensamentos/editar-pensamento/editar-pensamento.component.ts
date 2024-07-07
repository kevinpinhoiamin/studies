import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from '../criar-pensamento/minusculoValidator';

@Component({
    selector: 'app-editar-pensamento',
    templateUrl: './editar-pensamento.component.html',
    styleUrls: ['./editar-pensamento.component.css'],
})
export class EditarPensamentoComponent implements OnInit {
    formulario: FormGroup;

    constructor(
        private service: PensamentoService,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.service.buscar(+id).subscribe((pensamento) => {
            this.formulario = this.fb.group({
                id: [pensamento.id],
                conteudo: [
                    pensamento.conteudo,
                    Validators.compose([
                        Validators.required,
                        Validators.pattern(/(.|\s)*\S(.|\s)*/),
                    ]),
                ],
                autoria: [
                    pensamento.autoria,
                    Validators.compose([
                        Validators.required,
                        Validators.minLength(3),
                        minusculoValidator,
                    ]),
                ],
                modelo: [pensamento.modelo],
                favorito: [pensamento.favorito],
            });
        });
    }

    editarPensamento(): void {
        if (this.formulario.valid) {
            this.service
                .editar(this.formulario.value)
                .subscribe(() => this.router.navigate(['/listarPensamento']));
        }
    }

    cancelar(): void {
        this.router.navigate(['/listarPensamento']);
    }

    habilitarBotao(): string {
        if (this.formulario.valid) {
            return 'botao';
        }

        return 'botao__desabilitado';
    }
}
