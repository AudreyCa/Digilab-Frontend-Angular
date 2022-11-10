import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tchat-top-bar',
  templateUrl: './tchat-top-bar.component.html',
  styleUrls: ['./tchat-top-bar.component.scss']
})
export class TchatTopBarComponent implements OnInit {

  imgDefault = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"

@Input() idUserData!:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
