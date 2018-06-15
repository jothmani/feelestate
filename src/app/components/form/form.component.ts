import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../store/app.state';
import { DataSizeModel } from '../../model/datasize.model';
import { UpdateDataSizeAction } from '../../store/actions/datasize.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(private store: Store<AppState>) {}

  public updateDS(used: number, remaining: number) {
    const updatedDataSize: DataSizeModel = {
      usedDataSize: used,
      remainingDataSize: remaining
    };
    this.store.dispatch(new UpdateDataSizeAction(updatedDataSize));
  }

}
