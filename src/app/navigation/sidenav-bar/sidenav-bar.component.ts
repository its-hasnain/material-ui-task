import { Component, OnInit, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-bar.component.html',
  styleUrls: ['./sidenav-bar.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
 
  constructor() { }
 
  ngOnInit() {
  }
 
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
 
}