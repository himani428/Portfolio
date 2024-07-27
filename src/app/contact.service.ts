import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/api/contact';

  constructor(private http: HttpClient) {}

  sendMessage(contact: { name: string; email: string; message: string }): Observable<any> {
    return this.http.post(this.apiUrl, contact, { responseType: 'text' }).pipe(
      map(response => {
        // Try to parse JSON response
        try {
          return JSON.parse(response);
        } catch (e) {
          return { message: response };
        }
      }),
      catchError(error => {
        console.error('Error:', error);
        return of({ error: 'There was an error sending your message.' });
      })
    );
  }
}
