import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoes() {
        return fetch("http://localhost:8080/dados")
            .then((res) => res.json())
            .then((dados) => dados.map((dadoDeHoje) => new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante)));
    }
}
//# sourceMappingURL=negociacoes-service.js.map