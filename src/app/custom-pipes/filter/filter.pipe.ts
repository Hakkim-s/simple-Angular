import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter_pipe1'
})
export class FilterPipe1 implements PipeTransform {

  // transform(items: any, filter: any, defaultFilter: boolean): any {
  //   if (!filter){
  //     return items;
  //   }

  //   if (!Array.isArray(items)){
  //     return items;
  //   }

  //   if (filter && Array.isArray(items)) {
  //     let filterKeys = Object.keys(filter);

  //     if (defaultFilter) {
  //       return items.filter(item =>
  //           filterKeys.reduce((x, keyName) =>
  //               (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "", true));
  //     }
  //     else {
  //       return items.filter(item => {
  //         return filterKeys.some((keyName) => {
  //           return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
  //         });
  //       });
  //     }
  //   }
  // }


  // transform(items: any[], filterdata: string): any[] {
  //   if(!items) return [];
  //   if(!filterdata) return items;
  //    console.log(filterdata);
  //    filterdata = filterdata.toString().toLowerCase();
  //    return items.filter( it => {
  //      console.log(it);
  //    return it.name.toLowerCase().includes(filterdata);
  //     });
  //     }


  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.name.toLocaleLowerCase().includes(args)) || (val.username.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }
}

@Pipe({
  name: 'filter_pipe2'
})
export class FilterPipe2 implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.id.toString().toLowerCase().includes(args)) || (val.first_name.toLocaleLowerCase().includes(args))
      || (val.last_name.toLocaleLowerCase().includes(args))|| (val.email.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}