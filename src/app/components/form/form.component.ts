import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../store/app.state';
import { DataSizeModel } from '../../model/datasize.model';
import { UpdateDataSizeAction } from '../../store/actions/datasize.actions';
import { FormControl, FormGroup , FormBuilder ,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  public dataSizeForm:FormGroup;
  public updatedDataSize:DataSizeModel;
  public success:boolean = false;
  public alertMsg:string = "Field is required and is numeric";

  constructor(private store: Store<AppState>, public formBuilder:FormBuilder) {
    this.dataSizeForm = this.formBuilder.group({
      usedDataSize:[null,Validators.required],
      remainingDataSize:[null,Validators.required]
    })
  }

  public updateDS() {
    this.updatedDataSize = <DataSizeModel>this.dataSizeForm.value;
    this.store.dispatch(new UpdateDataSizeAction(this.updatedDataSize));
    this.success = true;
    this.reset();
  }

  public reset() {
    this.dataSizeForm.reset();
  }

  /*public updateDS(used: number, remaining: number) {
   const updatedDataSize: DataSizeModel = {
   usedDataSize: used,
   remainingDataSize: remaining
   };
   this.store.dispatch(new UpdateDataSizeAction(updatedDataSize));
   }*/

}
