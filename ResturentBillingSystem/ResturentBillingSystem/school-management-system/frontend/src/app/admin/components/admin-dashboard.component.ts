import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent {
  metrics = [
    { label: 'Active Teachers', value: 32 },
    { label: 'Enrolled Students', value: 845 },
    { label: 'Pending Approvals', value: 6 },
  ];

  responsibilities = [
    'Manage user accounts and permissions',
    'Oversee academic calendar and policies',
    'Review financial and attendance reports',
  ];
}
