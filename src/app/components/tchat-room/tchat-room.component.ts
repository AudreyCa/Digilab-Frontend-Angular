import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tchat-room',
  templateUrl: './tchat-room.component.html',
  styleUrls: ['./tchat-room.component.scss']
})
export class TchatRoomComponent implements OnInit {

  data!:any;
  messageText: FormControl = new FormControl();

  constructor(private _http: HttpClient,
    private _userService: UserService,
    private _fb: FormBuilder) { }

  ngOnInit(): void {
    this._userService.getUserCurrent().subscribe((response:any) => {
      console.log(response)
      this.data = response
    })
  }

  onSend() {


  }

}
