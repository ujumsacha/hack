import { NgModule, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pagesRoutingModule } from './pages-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { pagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { RankingComponent } from './ranking/ranking.component';



@NgModule({
  declarations: [
    CustomersComponent,
    pagesComponent,
    DashboardComponent,
    ProgrammesComponent,
    RankingComponent
  ],
  imports: [
    CommonModule,
    pagesRoutingModule
  ]
})
export class PagesModule implements OnInit,OnChanges {
ngOnChanges(changes: SimpleChanges): void {
  console.log('test');
} 

ngOnInit(): void {
  console.log('test');
}
}
