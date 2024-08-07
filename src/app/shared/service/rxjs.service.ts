import { Injectable } from '@angular/core';
import {
  filter,
  interval,
  map,
  of,
  tap,
  Subject,
  BehaviorSubject,
  Observable,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxjsService {
  interval$ = interval(1000);

  ofNumber$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(
    filter((even: number) => {
      return even % 2 === 0;
    })
  );

  ofString$ = of(
    'HTML',
    'CSS',
    'JS',
    'TS',
    'ANGULAR',
    'RXJS',
    'NODE JS',
    'MONGO DB'
  ).pipe(
    tap((skill: string) => {
      console.log(`before Mapping :- ${skill}`);
    }),
    map((skill: string) => {
      return `Important skill :- ${skill}`;
    }),
    tap((skill: string) => {
      console.log(`after Mapping :- ${skill}`);
    })
  );

  // usernameSubject$ : Subject<object> = new Subject<object>()

  usernameSubject$: Subject<String> = new BehaviorSubject<String>('Jhondoe');

  ourInterval$ = new Observable((observer) => {
    let count = 0;
    setInterval(() => {
      observer.next(count);
      count++;
      if (count > 12) {
        observer.error('something went wrong');
      }
    }, 700);
  });

  constructor() {}
}
