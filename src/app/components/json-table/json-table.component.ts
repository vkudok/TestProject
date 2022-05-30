import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {createdAtFormat, birthdateFormat, timezone} from "./json-table.constants";
import {TableHeaderFields, PersonInfoData} from "./json-table.interface";

@Component({
  selector: 'json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.scss']
})

export class JsonTableComponent {
  @Input() tableHeaderData: TableHeaderFields[];
  @Input() personInfoData: PersonInfoData[];
  searchValue: string;
  column = new FormControl("");
  createdAtFormat = createdAtFormat;
  birthdateFormat = birthdateFormat;
  timezone = timezone;
  num: number;
  prevPos: number = -1;

  constructor() {
  }

  getAttributeName(e: any) {
    let target = e.currentTarget;
    let idAttr: string = target.attributes.id.value;
    if (this.prevPos != parseInt(idAttr)) {
      this.column = new FormControl("");
    }
    this.num = parseInt(idAttr);
    this.prevPos = parseInt(idAttr);
  }
}
