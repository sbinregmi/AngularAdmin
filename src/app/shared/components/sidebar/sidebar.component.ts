import { Component, Input, OnInit } from '@angular/core';
import { DefaultComponent } from 'src/app/layouts/default/default.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input()
  sideBarOpen: boolean = true;
  constructor() { 
  }
  
  ngOnInit(): void {
  }

}
