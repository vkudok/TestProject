import {Component, OnInit, OnDestroy} from '@angular/core';
import {TableHeaderFields, PersonInfoData} from "../json-table/json-table.interface";
import {DataTableService} from "../../services/data-table.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  headers: any = {};
  persons: any = {};
  tableHeaderData: TableHeaderFields[] = [];
  personInfoData: PersonInfoData[] = [];
  sub1: Subscription;
  sub2: Subscription;
  subscriptions: Subscription[] = []

  constructor(private http: DataTableService) {
  }

  ngOnInit() {
    this.sub1 = this.http.getHeader().subscribe((res) => {
      this.headers = res;
      this.tableHeaderData = Object.values(this.headers.fields);
    });
    this.sub2 = this.http.getData().subscribe((res) => {
      this.persons = res;
      this.personInfoData = Object.values(this.persons.data);
    });
    this.subscriptions.push(this.sub1);
    this.subscriptions.push(this.sub2);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }
}
