import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing-module';
import { AdminLayout } from './admin-layout/admin-layout';
import { CourseList } from './course-list/course-list';
import { AdminNav } from './admin-nav/admin-nav';


@NgModule({
  declarations: [
    AdminLayout,
    CourseList,
    AdminNav
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
