import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
  // styleUrls: ['assets/css/bootstrap.min.css',
  //             'assets/css/themify-icons.css',
  //             'assets/css/magnific-popup.css',
  //           'assets/css/owl.theme.default.min.css',
  //           'assets/css/animate.css',
  //           'assets/css/bootsnav.css',
  //           'assets/css/responsive.css',
  //           'assets/css/flaticon-set.css',
  //           'assets/css/font-awesome.min.css',
  //           'assets/css/owl.carousel.min.css'
  //           ]
})


export class AccueilComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
    document.head.removeAttribute('link');

    var link = document.createElement('link');
    link.href = 'assets/css/style.css';
    link.rel = 'stylesheet';
   
    document.head.appendChild(link);

    var link1 = document.createElement('link');
    link1.href = 'assets/css/bootstrap.min.css';
    link1.rel = 'stylesheet';
   
    document.head.prepend(link1);



    // const list = document.getElementsByTagName("head");
//     document.head.removeAttribute('link');
//           var tab=[
//             'assets/css/bootstrap.min.css',
//             'assets/css/animate.css',
//             'assets/css/themify-icons.css',
//             'assets/css/flaticon-set.css',
//             'assets/css/owl.carousel.min.css',
//             'assets/css/magnific-popup.css',
//             'assets/css/owl.theme.default.min.css',
//             'assets/css/bootsnav.css',
//             'assets/css/responsive.css',
//             'assets/css/font-awesome.min.css',
//           ]
          
// tab.forEach(element => {
//       var link = document.createElement('link');
//       link.href = element;
//       link.rel = 'stylesheet';

//       document.head.appendChild(link);
// });

    // var link = document.createElement('link');
    //   link.href = 'assets/dist/css/app.css';
    //   link.rel = 'stylesheet';

    //   document.head.appendChild(link);
    //   document.getElementsByTagName('body')[0].classList.add('login');  
  }

  AuthentificationNavigate()
  {
    this._router.navigate(['Authentification']);
    // window.location.reload();
  }
}
