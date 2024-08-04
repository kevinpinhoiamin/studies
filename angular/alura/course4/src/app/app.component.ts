import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listDeCompra!: Array<Item>;
  itemParaSerEditado!: Item;

  constructor(private listaService: ListaDeCompraService) {}

  ngOnInit(): void {
    this.listDeCompra = this.listaService.getListaDeCompra();
    console.log(this.listDeCompra);
  }

  ngDoCheck(): void {
    this.listaService.atualizarLocalStorage();
  }

  editarItem(item: Item): void {
    this.itemParaSerEditado = item;
  }

  deletarItem(id: number): void {
    const index = this.listDeCompra.findIndex((item) => item.id === id);
    this.listDeCompra.splice(index, 1);
  }

  limparLista(): void {
    this.listaService.limparLista();
    this.listDeCompra = [];
  }
}
