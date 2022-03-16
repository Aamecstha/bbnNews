import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input()isUserAuthenticated=false
  @Output()doLogOut=new EventEmitter()

  showDropDownMenu=false

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.showDropDownMenu=!this.showDropDownMenu
  }

  logOut(){
    this.doLogOut.emit()
  }

}
