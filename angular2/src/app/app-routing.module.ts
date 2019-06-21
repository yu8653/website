import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LegalAssistantComponent } from './legal-assistant/legal-assistant.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { GeneralComponent } from './legal-assistant/general/general.component';
import { ProfessionComponent } from './legal-assistant/profession/profession.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { FileopenComponent } from './legal-assistant/fileopen/fileopen.component';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'login',component:LoginComponent},
  { path:'legal-assistant',component:LegalAssistantComponent,
    canActivate:[AuthGuard],
  children:[
    { path:'general',component:GeneralComponent},
    { path:'profession',component:ProfessionComponent},
    { path:'fileopen',component:FileopenComponent}
  ]
},
  { path:'introduction',component:IntroductionComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
