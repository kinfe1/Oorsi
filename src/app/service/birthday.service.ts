import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BirthdayService {

  constructor(private http: HttpClient) { }

  addBirthday(birthday): Observable<void> {
    return this.http.post<void>(environment.apiEndpoint + 'user/birthday/save', birthday);
  }
}
