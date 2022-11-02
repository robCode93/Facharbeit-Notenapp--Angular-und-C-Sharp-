import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { ApiModule } from './api/api.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolyearViewComponent } from './schoolyear-view/schoolyear-view.component';
import { SchoolyearAddComponent } from './schoolyear-add/schoolyear-add.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SchoolyearViewComponent,
    SchoolyearAddComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "syview",
        component: SchoolyearViewComponent
      },
      {
        path: "syadd",
        component: SchoolyearAddComponent
      }
    ]),
    ApiModule.forRoot({
      rootUrl: "http://localhost:7096"
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
