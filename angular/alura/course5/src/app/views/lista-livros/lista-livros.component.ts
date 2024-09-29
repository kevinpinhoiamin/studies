import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item, Livro } from 'src/app/models/interfaces';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent implements OnDestroy {
  listaLivros: Livro[];
  campoBusca = '';
  subscription: Subscription;

  constructor(private livroService: LivroService) {}

  buscarLivros(): void {
    this.subscription = this.livroService.buscar(this.campoBusca).subscribe({
      next: (items) =>
        (this.listaLivros = this.livrosResultadoParaLivros(items)),
      error: (error) => console.log(error),
      complete: () => console.log('Observable completado'),
    });
  }

  livrosResultadoParaLivros(items: Item[]): Livro[] {
    const livros: Livro[] = [];

    items.forEach((item) => {
      livros.push({
        title: item.volumeInfo?.title,
        authors: item.volumeInfo?.authors,
        publisher: item.volumeInfo?.publisher,
        publishedDate: item.volumeInfo?.publishedDate,
        description: item.volumeInfo?.description,
        previewLink: item.volumeInfo?.infoLink,
        thumbnail: item.volumeInfo?.imageLinks?.thumbnail,
      });
    });

    return livros;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
