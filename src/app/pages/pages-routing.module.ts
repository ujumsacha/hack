import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { pagesComponent } from './pages.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { RankingComponent } from './ranking/ranking.component';



const routes: Routes = [
    {
        path: '',
        component: pagesComponent,
        data:{
            title:'',
            headerDisplay:true
        },
        children:[
            {
                path: '',
                pathMatch: 'full' ,redirectTo:'dashboard'
              },
              {
                path: 'dashboard',
                component: DashboardComponent, pathMatch: 'full',title:'Tableau de bord'
              },
              {
                path: 'programmes',
                component: ProgrammesComponent, pathMatch: 'full'
              },
              {
                path: 'rang',
                component: RankingComponent, pathMatch: 'full'
              },
              {
                path: 'customers',
                component: CustomersComponent, pathMatch: 'full'
              },
        ]
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class pagesRoutingModule { }