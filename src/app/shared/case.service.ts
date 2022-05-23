import { Case } from './../models/case';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CaseService {
  constructor(private http: HttpClient) {}

  public get(): Observable<Case[]> {
    return this.http.get<Case[]>('../../assets/db/cases.json');
  }
}
