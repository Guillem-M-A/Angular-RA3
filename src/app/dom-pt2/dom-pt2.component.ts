import { Component } from '@angular/core';
import {OnInit} from '@angular/core';

// @ts-ignore
import {yellowsubmarine, changeSize, countWord,imagen} from './funcions';


@Component({
  selector: 'app-dom-pt2',
  imports: [],
  templateUrl: './dom-pt2.component.html',
  standalone: true,
  styleUrl: './dom-pt2.component.css'
})
export class DomPt2Component implements OnInit {
constructor(){

}
ngOnInit():void{

  let x1 = document.getElementById("title")!;
   x1.innerHTML = x1.innerHTML.toUpperCase();

   // @ts-ignore
  document.getElementById("url").textContent = document.URL;
  yellowsubmarine();
  changeSize();
  countWord();
  imagen();
}

}
