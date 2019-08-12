import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard }            from './auth/auth.guard';
import { IndexComponent }       from './pages/index/index.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { NewAdComponent }       from './pages/new-ad/new-ad.component';
import { ManageAdComponent }    from './pages/manage-ad/manage-ad.component';
import { CarSearchComponent }   from './pages/car-search/car-search.component';
import { CarDetailComponent }   from './pages/car-detail/car-detail.component';
import { MonitorPageComponent } from './pages/monitor-page/monitor-page.component';

const routes: Routes = [
  { path: '',              component: IndexComponent},
  { path: 'user-profile/:user_id',  component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'new-ad/:user_id',    component: NewAdComponent },
  { path: 'manage-ad/:ad_id', component: ManageAdComponent },
  { path: 'monitor-page',  component: MonitorPageComponent , canActivate: [AuthGuard]},
  { path: 'car-search',    component: CarSearchComponent},
  { path: 'car-detail',    component: CarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
