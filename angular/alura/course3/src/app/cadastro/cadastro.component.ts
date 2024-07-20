import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ConsultaCepService } from "../service/consulta-cep.service";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  constructor(
    private router: Router,
    private consultaCepService: ConsultaCepService
  ) {}

  ngOnInit(): void {}

  cadastrar(form: NgForm): void {
    if (form.valid) {
      this.router.navigate(["/", "sucesso"]);
    } else {
      alert("Formulário inválido");
    }
    console.log(form.controls);
  }

  consultaCEP(event: any, f: NgForm): void {
    const cep = event.target.value;
    if (cep !== "") {
      this.consultaCepService.getConsultaCEP(cep).subscribe((resultado) => {
        console.log(resultado);
        this.populandoEndereco(resultado, f);
      });
    }
  }

  private populandoEndereco(dados: any, f: NgForm): void {
    f.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf,
    });
  }
}
