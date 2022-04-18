import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiModel, HousesModel } from './models/houses.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public getHouses(url: string): Observable<ApiModel> {
    return this.http.get<ApiModel>(url);
  }
}
