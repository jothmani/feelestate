import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { DataSizeModel } from '../../model/datasize.model';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public dataSizeModel: Observable<DataSizeModel>;

  constructor(private store: Store<AppState>) {
    this.dataSizeModel = this.store.select(x => x.dataSize);
  }

  ngOnInit() {
    this.store.subscribe(x => console.log(x));
  }

}
