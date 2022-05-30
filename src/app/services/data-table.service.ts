import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {Observable} from "rxjs";
import {TableDataHeader, PersonInfo} from "../components/json-table/json-table.interface";

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  constructor(private http: HttpClient) { }

  HEADER_URL : string = "../../assets/fields.json";
  DATA_URL : string = "../../assets/data.json";

  public getHeader(): Observable<TableDataHeader[]> {
    let endpoint = this.HEADER_URL;
    return this.http.get<TableDataHeader[]>(endpoint);
  }

  public getData(): Observable<PersonInfo[]> {
    let endpoint = this.DATA_URL;
    return this.http.get<PersonInfo[]>(endpoint);
  }
}
