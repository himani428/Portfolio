import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { title: 'Project 1', description: 'Description of project 1...' },
    { title: 'Project 2', description: 'Description of project 2...' },
    // Add more projects as needed
  ];
}
