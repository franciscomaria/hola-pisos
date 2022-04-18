import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ApiModel } from './models/houses.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public getHouses(url: string): Observable<ApiModel> {
    return this.http.get<ApiModel>(url);
  }

  public getHouse(ref: string): Observable<ApiModel> {
    return this.http.get<ApiModel>(`${environment.urlAPI},field_inmu_desc&filter[field_inmu_refe]=${ref}`);
  }
}
