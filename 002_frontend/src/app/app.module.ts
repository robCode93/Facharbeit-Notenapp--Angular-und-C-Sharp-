import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SchoolyearViewComponent } from './schoolyear-view/schoolyear-view.component';
import {HttpClientModule} from '@angular/common/http'
import { ApiModule } from './api/api.module';
import { SchoolyearAddComponent } from './schoolyear-add/schoolyear-add.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SchoolyearViewComponent,
    SchoolyearAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "",
        component: SchoolyearViewComponent
      },
      {
        path: "addsy",
        component: SchoolyearAddComponent
      },
    ]),
    ApiModule.forRoot({
      rootUrl: "http://localhost:7096"
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
