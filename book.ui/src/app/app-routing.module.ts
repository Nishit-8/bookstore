import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'featured', loadChildren: () => import('./features/featured/featured.module').then(m => m.FeaturedModule)
  },
  {
    path: 'best-selling', loadChildren: () => import('./features/best-selling/best-selling.module').then(m => m.BestSellingModule)
  },
  {
    path: 'popular', loadChildren: () => import('./features/popular/popular.module').then(m => m.PopularModule)
  },
  {
    path: 'offer', loadChildren: () => import('./features/offer/offer.module').then(m => m.OfferModule)
  },
  {
    path: 'about-us', loadChildren: () => import('./features/about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
