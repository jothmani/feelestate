import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FeelestateChartComponent } from './components/feelestate-chart/feelestate-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    FeelestateChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
