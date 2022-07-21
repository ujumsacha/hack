import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {

    var link = document.createElement('link');
    link.href = 'assets/dist/css/app.css';
    link.rel = 'stylesheet';
   
    document.head.appendChild(link);

    document.head.removeAttribute('link');
    //**************************************************** */ ajout du font dasn la base de l'application ******************************************************************
      
    document.getElementsByTagName('body')[0].classList.add('login');  

  }

  AuthNavigate()
  {
    this._router.navigate(['Authentification']);
  }
}
