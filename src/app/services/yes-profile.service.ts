import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { YesProfile } from '../model/yes-profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YesProfileService {

  constructor(private httpClient: HttpClient) { }

  list(): Observable<YesProfile[]> {
    return this.httpClient.get<YesProfile[]>('http://localhost:8080/api/yesProfiles');
  }
}
