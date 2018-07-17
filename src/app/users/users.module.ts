import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { UsersSaveComponent } from './users-save/users-save.component';
import { UsersViewComponent } from './users-view/users-view.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations : [
    UsersComponent,
    UsersSaveComponent,
    UsersViewComponent
  ]
})
export class UsersModule { }
