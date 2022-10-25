import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tchat-room',
  templateUrl: './tchat-room.component.html',
  styleUrls: ['./tchat-room.component.scss']
})
export class TchatRoomComponent implements OnInit {

  data!:any;
  messageText: FormControl = new FormControl();
  tabResults: any[] = [];

  constructor(private _userService: UserService,
    private _dataService: DataService) { }

  ngOnInit(): void {
    this._userService.getUserCurrent().subscribe((response:any) => {
      console.log(response)
      this.data = response   
      this._dataService.getJokes().subscribe((value: any) => {
        this.tabResults = value
        console.log(this.tabResults);
      })
    })
  }

  onSend() {
    this.tabResults.push({setup: this.messageText.value})
    this.messageText.reset()
    // Un setTimeout pour simuler un temps de response de l'interlocuteur
    setTimeout(() => {
      let i = Math.floor(Math.random() * this.tabResults.length);
  
      this.tabResults.push({ punchline:  this.tabResults[i].punchline})
    }, 2000);
  }

  onSendMessage(event: KeyboardEvent) {
    console.warn(event)
    if (event.code === "Enter") {
      this.onSend()
    }
  }
  

}
