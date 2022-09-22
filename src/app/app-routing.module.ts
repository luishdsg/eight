import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './animation/loading/loading.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [


  { path: '', component: LoadingComponent },
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
