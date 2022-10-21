import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tchat-room',
  templateUrl: './tchat-room.component.html',
  styleUrls: ['./tchat-room.component.scss']
})
export class TchatRoomComponent implements OnInit {

  data!:any;

  constructor(private _http: HttpClient, private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getUserCurrent().subscribe((response:any) => {
      console.log(response)
      this.data = response
    })
  }

}
