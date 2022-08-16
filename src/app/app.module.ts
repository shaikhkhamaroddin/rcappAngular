import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TemplateComponent } from './template/template.component';
import { MailComponent } from './mail/mail.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    ChatComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    TemplateComponent,
    MailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      // {path: '', component:AppComponent },
      {path: 'login', component: LoginComponent},
      {path: 'about', component: AboutComponent},
      {path: 'template', component: TemplateComponent},
      {path: 'mail', component: MailComponent},
      {path: 'chat', component: ChatComponent},
      {path: 'contact', component: ContactComponent},
      // {path: 'mail', component:AppComponent },
      {path: 'home', component:HomeComponent },
      { path: '**', redirectTo: 'login' }


  ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
