import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient ) { }

  addEmployee(data:any): Observable<any> {
    return this._http.post('http://localhost:3000/EducationsField', data);
  }
  getEmployeelist(): Observable<any> {
    return this._http.get('http://localhost:3000/EducationsField');
  }
}
