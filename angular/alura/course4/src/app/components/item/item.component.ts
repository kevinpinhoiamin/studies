import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter<Item>();
  @Output() emitindoIdParaDeletar = new EventEmitter<number>();

  faPen = faPen;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  }

  editarItem(): void {
    this.emitindoItemParaEditar.next(this.item);
  }

  deletarItem(): void {
    console.log('Estão tentando me calar.');
    this.emitindoIdParaDeletar.next(this.item.id);
  }

  checarItem(): void {
    this.item.comprado = !this.item.comprado;
  }

  ngOnDestroy(): void {
    console.log('Conseguiram me calar.');
  }
}
