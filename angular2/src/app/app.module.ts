import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileUploaderModule } from "ng4-file-upload";
import { AppComponent } from './app.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { LegalAssistantComponent } from './legal-assistant/legal-assistant.component';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AppRoutingModule } from './/app-routing.module';
import { GeneralComponent } from './legal-assistant/general/general.component';
import { ProfessionComponent } from './legal-assistant/profession/profession.component';
import { LoginComponent } from './login/login.component';
import { FileopenComponent } from './legal-assistant/fileopen/fileopen.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CopyrightComponent,
    LegalAssistantComponent,
    HomeComponent,
    IntroductionComponent,
    GeneralComponent,
    ProfessionComponent,
    LoginComponent,
    FileopenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploaderModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
