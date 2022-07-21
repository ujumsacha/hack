import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path :'',component:AccueilComponent},
  {path:'accueil',component:AccueilComponent},
  {path:'Authentification',component:LoginComponent},
  {path:'Inscription',component:RegisterComponent},
  {path:'App',component:LayoutPageComponent},
  { path: '**', component:AccueilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
