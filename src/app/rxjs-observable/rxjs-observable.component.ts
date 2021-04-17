import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { fromEvent, Observable, Subscriber } from "rxjs";
import { from } from "rxjs";
import { buffer, debounceTime, filter, map, tap } from "rxjs/operators";

@Component({
  selector: "app-rxjs-observable",
  templateUrl: "./rxjs-observable.component.html",
  styleUrls: ["./rxjs-observable.component.css"],
})
export class RxjsObservableComponent implements OnInit {
  test$: any;
  // Create an Observable out of a promise
  data = from(fetch("/api/endpoint"));

  constructor() {
    this.test$ = this.fromEvent(document.body, "click").subscribe((x) => {
      console.log("subscribe clicked");
    });

    // RXjs Sample

    // Subscribe to begin listening for async result
    this.data.subscribe({
      next(response) {
        console.log(response);
      },
      error(err) {
        console.error("Error: " + err);
      },
      complete() {
        console.log("Completed");
      },
    });
  }

  ngOnInit(): void {
    const test$ = new Observable((subscriber) => {
      console.log("test");
      subscriber.next("1");
      subscriber.next("2");
      subscriber.next("3");
      subscriber.error("error occured");
      subscriber.complete();
      subscriber.next("4");
      // asynchronous
      setTimeout(() => subscriber.next("5"), 1000);
    });

    console.log("start");

    test$.subscribe(
      (x) => {
        console.log("1st", x);
      },
      (error) => {
        console.log("error", error);
      },
      // Complete
      () => {
        console.log("complete");
      }
    );

    console.log("end");

    test$.subscribe((x) => {
      console.log("2nd", x);
    });
    const test = () => {
      console.log("normal test");
      return 1;
    };
    //call test function
    test();
    var y = test.call("a");
    console.log(y);
    this.doubleckick();
  }

  // sample 1

  fromEvent(target, eventName) {
    return new Observable((observer) => {
      const handler = (e) => observer.next(e);

      // Add the event handler to the target
      target.addEventListener(eventName, handler);

      return () => {
        // Detach the event handler from the target
        target.removeEventListener(eventName, handler);
        console.log("unsubscribe clicked");
      };
    });
  }

  removeEvent() {
    this.test$.unsubscribe();
  }

  doubleckick() {
    const click$ = fromEvent(document, "click");
    const buffs = click$.pipe(debounceTime(250));
    const doubleckick$ = click$.pipe(
      buffer(buffs),
      map((x) => x.length),
      tap((x) => console.log(x)),
      filter((x) => x == 2)
    );
    doubleckick$.subscribe(x => console.log('Double Clicked'))
  }
}
