import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  downloadResume() {
    const link = document.createElement('a');
    link.href = 'https://app.enhancv.com/share/e2252ba4/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic'; // Path to your resume file
    link.download = 'Resume.pdf';
    link.click();
  }
}
