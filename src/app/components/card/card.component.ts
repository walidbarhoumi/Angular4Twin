import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { shortList } from 'src/app/models/shortList';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnChanges {
  @Input({ required: true }) id!: number;
  @Input() title!: string;
  @Input() image!: string;
  @Input() price!: number;
  @Input() nb_likes!: number;
  @Input() available!: boolean;

  @Output() d = new EventEmitter<number>();
  @Output() l = new EventEmitter<number>();
  @Output() shortedList = new EventEmitter<shortList>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  deleteChild() {
    this.d.emit(this.id);
  }

  likeChild() {
    this.l.emit(this.id);
  }

  addToShortList() {
    const shortListProduct: shortList = {
      id: 0,
      idElement: this.id,
      idUser: 5,
      typeElement: 'product',
    };

    this.shortedList.emit(shortListProduct);
    console.log('Produit émis pour ajout à la shortlist :', shortListProduct);
  }

}
