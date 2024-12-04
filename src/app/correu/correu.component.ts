import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {NgFor} from '@angular/common';
@Component({
  selector: 'app-correu',
  imports: [
    NgIf,NgFor
  ],
  templateUrl: './correu.component.html',
  standalone: true,
  styleUrl: './correu.component.css'
})
export class CorreuComponent {
  title = 'RA3Angular-correu';
  correus: any;
  correuLlegit: number;
  correuNoLlegit: number;
    constructor() {
      this.correuLlegit = 0;
      this.correuNoLlegit = 0;
    const correu1 = {
      titol: "questio de la lletra",
      cos: "lorem ipsum",
      emissor: "guillem@gmail.com",
      destinatari: "paco@gmail.com",
      data: 18 / 11 / 2021,
      llegit: false,
    }
    const correu2 = {
      titol: "entrega de la lletra",
      cos: "lorem ipsum ",
      emissor: "manel@gmail.com",
      destinatari: "rita@gmail.com",
      data: 22 / 11 / 2021,
      llegit: true,
    }
    for (let i = 0; i < this.correus.length; i++) {
      if (this.correus[i].llegit == true){
        this.correuLlegit++
      }else{
        this.correuNoLlegit++
      }
    }

    this.correus = [];
    this.correus.push(correu1);
    this.correus.push(correu2);



  }
}
