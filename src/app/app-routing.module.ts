import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Reactiveform1Component } from './reactiveform1/reactiveform1.component';
import { Templatedrivenform1Component } from './templatedrivenform1/templatedrivenform1.component';

const routes: Routes = 
[
 // {path:' ',component:AppComponent},
 // { path:'reactiveform1', component: Reactiveform1Component},
 // { path:'templatedrivenform1', component: Templatedrivenform1Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
