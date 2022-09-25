import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from './animation/loading/loading.component';
import { HomeComponent } from './home/home.component';
import { Level1Component } from './pages/level1/level1.component';
import { Level2Component } from './pages/level2/level2.component';
import { Level3Component } from './pages/level3/level3.component';

const routes: Routes = [


  { path: '', component: LoadingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'part-I', component: Level1Component },
  { path: 'part-II', component: Level2Component },
  { path: 'part-III', component: Level3Component },
  // { path: 'part-IV', component: Level4Component },
  // { path: 'part-V', component: Level5Component },
  // { path: 'part-VI', component: Level6Component },
  // { path: 'part-VII', component: Level7Component },
  // { path: 'part-VIII', component: Level8Component },
  // { path: 'part-IX', component: Level9Component },
  // { path: 'part-X', component: Level10Component },
  // { path: 'part-XI', component: Level11Component },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
