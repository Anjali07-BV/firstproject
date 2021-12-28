import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { AppComponent } from '../app.component';



@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class LoginPageModule { }
