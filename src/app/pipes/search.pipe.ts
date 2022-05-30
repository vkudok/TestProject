import {Pipe, PipeTransform} from "@angular/core";
import {DatePipe} from '@angular/common';
import {birthdateFormat, createdAtFormat, timezone} from "../components/json-table/json-table.constants";
import {TableHeaderFields} from "../components/json-table/json-table.interface";

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {
  }

  transform(list: any[], value: any, tableHeaderData: TableHeaderFields[], num: any): any {
    let key: any[] = [];
    let dateForm: any;
    for (let headerName of tableHeaderData) {
      key.push(headerName.name);
    }
    if (value) {
      list = list.filter((item) => {
        switch (key[num]) {
          case 'birthdate': {
            dateForm = this.datePipe.transform(item[key[num]], birthdateFormat);
            return (dateForm.toString().toLocaleLowerCase().indexOf(value.toString().toLocaleLowerCase()) !== -1)
          }
          case 'createdAt': {
            dateForm = this.datePipe.transform(item[key[num]], createdAtFormat, timezone);
            return (dateForm.toString().toLocaleLowerCase().indexOf(value.toString().toLocaleLowerCase()) !== -1)
          }
          default: {
            return (item[key[num]].toString().toLocaleLowerCase().indexOf(value.toString().toLocaleLowerCase()) !== -1)
          }
        }
      });
    }
    return list;
  }
}
