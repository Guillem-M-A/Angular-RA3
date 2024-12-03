import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DomPt2Component} from './dom-pt2/dom-pt2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  DomPt2Component],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RA3Angular-correu';
 constructor(){
   console.log(this.title.length);
             }
}
