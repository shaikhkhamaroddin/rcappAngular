import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
menuitems =[
  {label:'Login',path:'login',iconclass:"bi bi-lock"},
  {label:'Home',path:'',iconclass:"bi  bi-calendar3"},
  {label:'Mail',path:'mail',iconclass:"bi bi-envelope"},
  {label:'Chat',path:'chat',iconclass:"bi bi-chat"},
  {label:'Contact',path:'contact',iconclass:"bi bi-person-lines-fill"},
  {label:'Template',path:'template',iconclass:"bi bi-file"},
  {label:'About',path:'about',iconclass:"bi bi-globe"},
]
  constructor() { }

  ngOnInit(): void {
  }

  goto(e?:any){
    console.log(e)
  }

}
