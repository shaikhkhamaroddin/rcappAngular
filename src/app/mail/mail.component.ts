import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
users:any = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<[]>('  https://api.github.com/users').subscribe((res)=>{
      console.log('res> ',res);
      this.users = res;
    })
  }

}
