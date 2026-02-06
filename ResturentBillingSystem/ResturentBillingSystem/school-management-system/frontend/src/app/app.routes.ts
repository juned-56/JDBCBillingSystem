import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/components/admin-dashboard.component';
import { TeacherDashboardComponent } from './teacher/components/teacher-dashboard.component';
import { StudentDashboardComponent } from './student/components/student-dashboard.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'admin' },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'teachers', component: TeacherDashboardComponent },
  { path: 'students', component: StudentDashboardComponent },
  { path: '**', redirectTo: 'admin' },
];
