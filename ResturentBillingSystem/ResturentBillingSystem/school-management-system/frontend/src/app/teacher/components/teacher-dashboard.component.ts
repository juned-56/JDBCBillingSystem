import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher-dashboard.component.html',
})
export class TeacherDashboardComponent {
  schedule = [
    { period: '08:30', subject: 'Mathematics - Grade 8' },
    { period: '10:15', subject: 'Science Lab - Grade 7' },
    { period: '13:00', subject: 'Homeroom Advising' },
  ];

  priorities = [
    'Record attendance and classroom notes',
    'Publish assignments and grading updates',
    'Coordinate with guardians for student support',
  ];
}
