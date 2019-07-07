import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL: string = 'http://localhost:3000/v1';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private http: HttpClient) { }

  public generatePhoneNumber(): Observable<any> {
    return this.http.post<any>(`${BASE_URL}/phone/generate`, {});
  }
}
