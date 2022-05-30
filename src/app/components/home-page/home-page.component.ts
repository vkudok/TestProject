import { Component, OnInit } from '@angular/core';
import {TableHeaderFields, PersonInfoData} from "../json-table/json-table.interface";
import {DataTableService} from "../../services/data-table.service";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  headers: any={};
  persons: any={};
  tableHeaderData: TableHeaderFields[]=[];
  personInfoData: PersonInfoData[]=[];

  constructor(private http: DataTableService) { }

  ngOnInit(){
    this.http.getHeader().subscribe((res) => {
        this.headers = res;
        this.tableHeaderData = Object.values(this.headers.fields);
    });
    this.http.getData().subscribe((res) => {
      this.persons = res;
      this.personInfoData = Object.values(this.persons.data);
    });
  }

}
