import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './animation/loading/loading.component';
import { HomeComponent } from './home/home.component';
import { Level1Component } from './pages/level1/level1.component';
import { Level2Component } from './pages/level2/level2.component';

const routes: Routes = [


  { path: '', component: LoadingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'part-I', component: Level1Component },
  { path: 'part-II', component: Level2Component },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
