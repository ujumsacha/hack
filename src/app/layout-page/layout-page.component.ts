import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    document.head.removeAttribute('link');

    var link = document.createElement('link');
    link.href = 'assets/dist/css/app.css';
    link.rel = 'stylesheet';
   
    document.head.appendChild(link);
    // //**************************************************** */ ajout du font dasn la base de l'application ******************************************************************
    //   setTimeout(() => {
         document.getElementsByTagName('body')[0].classList.add('py-5'); 
    //   }, 1000);
     
    //**************************************************** */ ajout du font dasn la base de l'application ******************************************************************
  
  }

}
