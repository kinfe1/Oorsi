import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PhoneNumberConfirmation } from '../model/phoneNumberConfirmation';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService {

  constructor(private http: HttpClient) { }

  savePhoneNumber(phoneNumber: { phoneNumber: string }): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'user/phoneNumber/save', phoneNumber);
  }

  confirmPhoneNumber(phoneNumberConfirmation: PhoneNumberConfirmation): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'user/phoneNumber/confirm', phoneNumberConfirmation);
  }
}
