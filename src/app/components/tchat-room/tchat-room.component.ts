import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TchatService } from 'src/app/services/tchat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tchat-room',
  templateUrl: './tchat-room.component.html',
  styleUrls: ['./tchat-room.component.scss']
})
export class TchatRoomComponent implements OnInit {

  userCurrent!:any;
  messageText: FormControl = new FormControl();
  // Avec l'API jokes
  // tabResults: any[] = [];
  arrayMessages: any[] = [];
  msgRecu!: string;
  msgSend!: string;
  messagesgSent!: any[];
  messagesReceived!: any[];
  nameUser!: string;
  myName!: string;

  constructor(private _userService: UserService,
    private _tchatServ: TchatService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
   
    // On initie la conversation
    this._tchatServ.initConversation("msg:string")
    
    // on écoute constamment pour afficher les messages que j'envoie
    this._tchatServ.getMyMessage()
    
    // Pour écouter tout le temps la reception des messages
    this._tchatServ.getMsgSent()
    
    
    // on écoute constamment pour souscrire à mes messages (à envoyer)
    this._tchatServ.getMessageToSend().subscribe((messageSend: any) => {
      this.msgSend = messageSend.content
      console.warn('ici sent ', this.msgSend);
      let date = new Date();
      let hour = date.getHours();
      let day = date.getDay();
      this.arrayMessages.push({sent: this.msgSend, day:day, hour: hour})
    })
    
    // on écoute constamment pour souscrire aux messages (à recevoir)
    this._tchatServ.getMessageToReceived().subscribe((messageReceived: any) => {
      this._snackBar.open('Message reçu de : ' + this.nameUser, 'ok')
      this.msgRecu = messageReceived.content
      console.warn('ici received ', this.msgRecu);
      let date = new Date();
      let hour = date.getHours();
      let day = date.getDay();
      this.arrayMessages.push({received: this.msgRecu, day: day, hour: hour})
    })
    
    
    // la methode getUserCurrent reagi uniquement au préalable
    // si la méthode SetUserCurrent est appelé
    this._userService.getUserCurrent().subscribe((response: any) => {
      this.userCurrent = response
      console.warn('ici userCurrent : ',this.userCurrent);
      console.log('ici username du userCurrent : ',this.userCurrent.username);
      // puis affiche tous les messages précédants
      this._tchatServ.getFriendMessages(this.userCurrent.username).subscribe((value: any) => {
        this.arrayMessages = value
        console.warn('tout le tableau (arrayMessage): ', value)
        this.nameUser = this.arrayMessages[0].friendID.username
        console.log('nameUser: ', this.nameUser);
        this.myName = this.arrayMessages[0].userID.username
        console.log('myName: ', this.myName);
      })
    })
    
  }

  onSend() {

    const msg = this.messageText.value

    // le message que j'envoie/emit
    this._tchatServ.sendMessage(this.userCurrent, msg)

    // this.arrayMessages.push({Sent: this.messageText.value})
    
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



     // .pipe(map((userID: Chatmessage) => userID))