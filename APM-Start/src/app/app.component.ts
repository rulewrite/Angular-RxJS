import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pageTitle = 'Acme Product Management';

  ngOnInit(): void {
    of(2, 4, 6, 8).subscribe(console.log);

    from([20, 15, 10, 5])
      .pipe(
        tap((item) => console.log(`side effect ${item}.`)),
        map((item) => item * 2),
        map((item) => item - 10),
        map((item) => {
          if (item < 1) {
            throw new Error('양수가 아니면 에러');
          }
          return item;
        }),
        // 방출 값 3개 까지만 구독
        take(3)
      )
      .subscribe(
        (element) => console.log(`result: .. ${element}`),
        (error) => console.error(`error: ${error}`),
        () => console.log(`completed`)
      );

    of(...['Apple 1', 'Apple 2', 'Apple 3']).subscribe(
      (apple) => console.log(`Apple was emitted ${apple}`),
      (error) => console.error(`Error: ${error}`),
      () => console.log(`No more apples.`)
    );
  }
}

// 7강 완료
