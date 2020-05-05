import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BirthdayService {

  constructor(private http: HttpClient) { }

  save(birthday: any): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'birthdate/save', birthday);
  }
}
