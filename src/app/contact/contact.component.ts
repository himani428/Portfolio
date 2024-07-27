import { Component } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private contactService: ContactService) {}

  onSubmit() {
    this.contactService.sendMessage(this.contact).subscribe(
      response => {
        if (response.message) {
          alert(response.message);
        } else if (response.error) {
          alert(response.error);
        }
        this.contact = { name: '', email: '', message: '' };
      },
      error => {
        console.error('Error:', error);
        alert('There was an error sending your message.');
      }
    );
  }
}
