import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataSizeModel } from '../../model/datasize.model';
import { ChangeDetectorRef } from '@angular/core';
import  { DatasizeService } from '../../services/datasize.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public dataSizeModel: Observable<DataSizeModel>;

  constructor(private dsService:DatasizeService, private changeDetector: ChangeDetectorRef) {
    this.dataSizeModel =  this.dsService.getDS();
  }

  ngOnInit() {
   // this.store.subscribe(x => console.log(x));
    this.changeDetector.detectChanges(); // @Robert I used this to eliminate ExpressionChangedAfterItHasBeenCheckedError or enableProdMode solved the problem
  }

}
