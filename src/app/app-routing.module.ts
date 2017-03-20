import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';


const routes: Routes = [
  {
    path: '',
    component: PhoneListComponent
  },

  {
    path: 'phone/:id',
    component: PhoneDetailsComponent
  },

  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
