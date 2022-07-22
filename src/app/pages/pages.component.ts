import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'App-pages',
  templateUrl: './pages.component.html'
//   styleUrls: ['./pages.component.css']
})
export class pagesComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
    document.getElementsByTagName('body')[0].classList.remove('login');
    document.getElementsByTagName('body')[0].classList.add('py-5'); 
    
  }
}