import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pageTitle = 'Acme Product Management';

  ngOnInit(): void {
    of(2, 4, 6, 8).subscribe(console.log);

    from([2, 4, 6, 8]).subscribe(
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
