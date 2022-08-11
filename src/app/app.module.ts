import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component:AppComponent },
      {path: 'login', component: LoginComponent},
      {path: 'chat', component: ChatComponent}
  ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
