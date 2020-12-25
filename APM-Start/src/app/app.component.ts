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

  ngOnInit(): void {}
}

// 9강 완료
