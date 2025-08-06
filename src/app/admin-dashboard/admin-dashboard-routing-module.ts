import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayout } from './admin-layout/admin-layout';
import { CourseList } from './course-list/course-list';

const routes: Routes = [
  { path: '' , component: AdminLayout, children: [
    { path: '', component: CourseList}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
