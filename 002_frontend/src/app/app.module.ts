import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { ApiModule } from './api/api.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      /* {
        path: "",
        component: SchoolyearViewComponent
      },
      {
        path: "addsy",
        component: SchoolyearAddComponent
      }, */
    ]),
    ApiModule.forRoot({
      rootUrl: "http://localhost:7096"
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
