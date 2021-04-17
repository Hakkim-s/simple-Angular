import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "append",
})
export class AppendPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value + "hit" + args;
  }
}

@Pipe({
  name: "filterimpure",
  // pure:false
})
export class filterimpure implements PipeTransform {
  transform(value, field, filterValue) {
    if (value && value.length > 0) {
      return value.filter((x) => x[field] == filterValue);
    } else {
      return [];
    }
  }
}
