import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
   styleUrls: ['./accueil.component.css'],
  //styleUrls: ['../assets/dist/css/app.css'],
  encapsulation: ViewEncapsulation.None, 
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
