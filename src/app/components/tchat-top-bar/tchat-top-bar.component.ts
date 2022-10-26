import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tchat-top-bar',
  templateUrl: './tchat-top-bar.component.html',
  styleUrls: ['./tchat-top-bar.component.scss']
})
export class TchatTopBarComponent implements OnInit {

@Input() idUserData!:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
