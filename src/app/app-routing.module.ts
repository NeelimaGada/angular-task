import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MainModule } from './main/main.module';



const routes: Routes = [
 {path:'',component:LandingComponent},
 {path:'',  loadChildren: () => import('./main/main.module').then(m => m.MainModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,MainModule]
})
export class AppRoutingModule { }
