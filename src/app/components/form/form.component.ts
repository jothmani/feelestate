import { Component, OnInit } from '@angular/core';
import { DataSizeModel } from '../../model/datasize.model';
import { FormControl, FormGroup , FormBuilder ,Validators } from '@angular/forms';
import  { DatasizeService } from '../../services/datasize.service';

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

  constructor(public formBuilder:FormBuilder, public dsService:DatasizeService) {
    this.dataSizeForm = this.formBuilder.group({
      usedDataSize:[null,Validators.required],
      remainingDataSize:[null,Validators.required]
    })
  }

  public updateDS() {
    this.updatedDataSize = <DataSizeModel>this.dataSizeForm.value;
    this.dsService.updateDS(this.updatedDataSize);
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
