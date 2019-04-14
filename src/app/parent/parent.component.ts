import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoaderService]
})
export class ParentComponent implements OnInit {

  constructor(public loader: LoaderService) { }

  ngOnInit() {
  }

  startLoading() {
    this.loader.isLoading.next(true);
    setTimeout(() => this.loader.isLoading.next(false), 1000);
  }

}
