import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  public sideBarOpen:boolean=true;
  autosize: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
    this.autosize = true;
    setTimeout(() => this.autosize = false, 1);
  }

}
