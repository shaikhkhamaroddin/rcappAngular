import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
menuitems =[
  {label:'Home',path:''},
  {label:'Mail',path:'mail'},
  {label:'Login',path:'login'},
  {label:'Chat',path:'chat'},
  {label:'Template',path:'template'},
  {label:'About',path:'about'},
]
  constructor() { }

  ngOnInit(): void {
  }

  goto(e?:any){
    console.log(e)
  }

}
