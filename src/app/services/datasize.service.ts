import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UpdateDataSizeAction } from '../store/actions/datasize.actions';
import { AppState } from '../store/app.state';
import { DataSizeModel } from '../model/datasize.model';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core';

@Injectable()
export class DatasizeService implements OnInit {

  constructor(private store: Store<AppState>) { }

  /**
   * Used by dashboard component to get application state and show data size object
   * @returns {Store<DataSizeModel>|any}
   */
  public getDS():Observable<DataSizeModel> {
    return this.store.select(x => x.dataSize);
  }

  /**
   * Used by form component to update storage size data
   * @param updatedDataSize
   */
  public updateDS(updatedDataSize:DataSizeModel) {
    this.store.dispatch(new UpdateDataSizeAction(updatedDataSize));
  }

  ngOnInit() {
    this.store.subscribe(x => console.log(x));
    console.log("ddddddd");
  }

}
