import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiaDaSemana } from "../enums/dia-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
	@domInjector("#data")
	private inputData: HTMLInputElement;
	@domInjector("#quantidade")
	private inputQuantidade: HTMLInputElement;
	@domInjector("#valor")
	private inputValor: HTMLInputElement;
	private negociacoes = new Negociacoes();
	private negociacoesView = new NegociacoesView("#negociacoes-view");
	private mensagemView = new MensagemView("#mensagem-view");
	private negociacoesService = new NegociacoesService();

	constructor() {
		this.negociacoesView.update(this.negociacoes);
	}

	@inspect
	@logarTempoDeExecucao()
	public adiciona(): void {
		const negociacao = Negociacao.criaDe(
			this.inputData.value,
			this.inputQuantidade.value,
			this.inputValor.value
		);
		if (!this.ehDiaUtil(negociacao.data)) {
			this.mensagemView.update(
				"Apenas negociações em dias úteis são aceitas."
			);
			return;
		}

		this.negociacoes.adiciona(negociacao);
		imprimir(negociacao, this.negociacoes);
		this.limparFormulario();
		this.atualizaView();
	}

	public importarDados(): void {
		this.negociacoesService
			.obterNegociacoes()
			.then((negociacoesDeHoje) => {
				return negociacoesDeHoje.filter(negociacoesDeHoje => {
					return !this.negociacoes
						.lista()
						.some(negociacao => negociacao.ehIgual(negociacoesDeHoje))
				})
			})
			.then((negociacoesDeHoje) => {
				for (let negociacaoDeHoje of negociacoesDeHoje) {
					this.negociacoes.adiciona(negociacaoDeHoje);
				}
				this.negociacoesView.update(this.negociacoes);
			}
		);
	}

	private ehDiaUtil(data: Date) {
		return (
			data.getDay() > DiaDaSemana.DOMINGO &&
			data.getDay() < DiaDaSemana.SABADO
		);
	}

	private limparFormulario(): void {
		this.inputData.value = "";
		this.inputQuantidade.value = "";
		this.inputValor.value = "";
		this.inputData.focus();
	}

	private atualizaView(): void {
		this.negociacoesView.update(this.negociacoes);
		this.mensagemView.update("Negociação adicionada com sucesso.");
	}
}
