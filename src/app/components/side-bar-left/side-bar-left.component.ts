import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar-left',
  templateUrl: './side-bar-left.component.html',
  styleUrls: ['./side-bar-left.component.scss']
})
export class SideBarLeftComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this._route.navigate(['/finder'])
  }

  onLogOut () {
    localStorage.clear()
    this._route.navigate(['/login'])
  }

}
