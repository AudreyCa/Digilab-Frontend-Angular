import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TchatService } from 'src/app/services/tchat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tchat-room',
  templateUrl: './tchat-room.component.html',
  styleUrls: ['./tchat-room.component.scss']
})
export class TchatRoomComponent implements OnInit {

  data!:any;
  messageText: FormControl = new FormControl();
  // Avec l'API jokes
  // tabResults: any[] = [];
  arrayMessages: any[] = [];
  msgRecu!: string;
  msgSend!: string;


  constructor(private _userService: UserService,
    private _tchatServ: TchatService) { }

  ngOnInit(): void {
    // On initie la conversation
    this._tchatServ.initConversation("msg: string")

    // on écoute constamment pour afficher les messages que j'envoie
    this._tchatServ.getMyMessage()

    // POur écouter tout le temps la reception des messages
    this._tchatServ.getMsgSent()

    // on écoute constamment pour recevoir les messages quand on les recois en ligne
    this._tchatServ.getMessageToReceived().subscribe((messageReceived: any) => {
      console.warn('message recu qu\'on veut afficher dans le chat '+ messageReceived)
      let date = new Date();
      let hour = date.getHours();
      let day = date.getDay();
      this.arrayMessages.push({message: messageReceived, day: day, hour: hour})
    })

   // on écoute constamment pour recevoir les messages quand on les recois en ligne 
   this._tchatServ.getMessageToSend().subscribe((messageSend: any) => {
    console.warn('message qu\'on envoie qu\'on veut afficher dans le chat '+ messageSend)
    this.msgSend = messageSend
    this.arrayMessages.push({msgSend: this.msgSend})
  })

    // la methode getUserCurrent reagi uniquement au préalable
    // si la méthode SetUserCurrent est appelé
    this._userService.getUserCurrent().subscribe((response: any) => {
      console.log(response)
      this.data = response
      // puis affiche tous les messages précédants
      this._tchatServ.getFriendMessages().subscribe((value: any) => {
        console.warn(value)
        this.arrayMessages = value
      })
    })

  }

  onSend() {

    const msg = this.messageText.value

    // le message que j'envoie/emit
    this._tchatServ.sendMessage(this.data, msg)

    this.arrayMessages.push({MsgSend: this.messageText.value})
    
    // pour effacer le message dans l'input une fois envoyé :
    this.messageText.reset()

    // Un setTimeout pour simuler un temps de response de l'interlocuteur avvce l'API jokes
    // setTimeout(() => {
    //   let i = Math.floor(Math.random() * this.tabResults.length);
  
    //   this.tabResults.push({ punchline:  this.tabResults[i].punchline})
    // }, 2000);
  }

  /** Cette méthode nous permet d'envoyer juste avec la touche "enter".
   * @param  {KeyboardEvent} event
   */
  onSendMessage(event: KeyboardEvent) {
    if (event.code === "Enter") {
      this.onSend()
    }
  }

}
