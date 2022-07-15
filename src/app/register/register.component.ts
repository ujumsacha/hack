import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var link = document.createElement('link');
    link.href = 'assets/dist/css/app.css';
    link.rel = 'stylesheet';
   
    document.head.appendChild(link);

    //document.head.removeAttribute('link');
    //**************************************************** */ ajout du font dasn la base de l'application ******************************************************************
      
    document.getElementsByTagName('body')[0].classList.add('login');  

  }

}
