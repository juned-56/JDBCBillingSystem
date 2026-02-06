import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-dashboard.component.html',
})
export class StudentDashboardComponent {
  highlights = [
    { label: 'Upcoming Assignments', value: 4 },
    { label: 'Attendance Rate', value: '96%' },
    { label: 'Current GPA', value: '3.7' },
  ];

  quickLinks = [
    'View class timetable',
    'Submit assignments',
    'Chat with teachers',
  ];
}
