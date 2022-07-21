import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/dist/css/app.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router :Router) { }

  ngOnInit(): void {
    
    
    // var list= document.getElementsByTagName('link')
    // var num= list.length;
    // for ( var i =0; i<num; i = i++){
    //   // document.head.removeChild(list[i].node);

    // }

    // document.head.removeAttribute('link');

    var link = document.createElement('link');
    link.href = 'assets/dist/css/app.css';
    link.rel = 'stylesheet';
   
    document.head.appendChild(link);

    document.head.removeAttribute('link');
    //**************************************************** */ ajout du font dasn la base de l'application ******************************************************************
      
    document.getElementsByTagName('body')[0].classList.add('login');  
    //**************************************************** */ ajout du font dasn la base de l'application ******************************************************************
  }

  AcceuilNavigate()
  {
    this._router.navigate(['App']);
  }
  RegisterNavigate()
  {
    this._router.navigate(['Inscription']);
  }
}
