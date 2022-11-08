import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { filter } from 'rxjs';
import { UserListModalComponent } from 'src/app/modals/user-list-modal/user-list-modal.component';
import { User } from 'src/app/models/user.model';
import { BackendService } from 'src/app/services/backend.service';
import { TchatService } from 'src/app/services/tchat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userId!:any[];
  // Pour l'input de recherche, on instancie un nouveau FormControl
  searchBar: FormControl = new FormControl();
  allUsers!: any[];
  identite!: any;
  profilInfo!: any;
  newFriends: any;
  backgroundColorFriend = "backgroundColor = rgb(23, 23, 217)";
  isFriend  = false;
  imgDefault = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
  friendOnline!: any;

  constructor(private _userService: UserService, 
    private _matDialog: MatDialog, 
    public fb: FormBuilder,
    private _backend: BackendService, 
    private _tchatServ: TchatService) {
     }


  ngOnInit(): void {

    // Pour récupérer la liste de mes amis. On est obligé de passer par la requete.
    this._tchatServ.getFriend().subscribe((myFriends: any) => {
      this.newFriends = myFriends
    })

    // on récupère les données du profil logué (du backend)
    this._backend.getProfileAPI().subscribe((response:any) => {
      this.profilInfo = response.body
    })

    // on souscris au service user pour recup les users de l'API du backend
    // userId  nous entrer dans le tableau là on l'on souhaite aller
    // allUsers pour stocker les users
    this._backend.getUsersList().subscribe((value:any)=>{
      this.userId = value.body;
      this.allUsers = [...this.userId]
    }) 


       this._tchatServ.friendsOnLine();

      this._tchatServ.getFriendsOnline().subscribe((usersOnline:any)=>{
        this.allUsers.forEach((userTab:any) => {
          if((usersOnline).includes(userTab.username)) {
            userTab.online = true
          }
        })
      })

      this._tchatServ.getMessageToReceived().subscribe((messageRecu: any)=>{
        this.allUsers.forEach((user:any)=>{
          if(user.username == messageRecu.userID.username) {
            if(user.nbMessageEnAttente) {
             user.nbMessageEnAttente = user.nbMessageEnAttente + 1
            } else {user.nbMessageEnAttente = 1}
          }
        })
        this.newFriends.forEach((user:any)=>{
          if(user.username == messageRecu.userID.username) {
            if(user.nbMessageEnAttente) {
             user.nbMessageEnAttente = user.nbMessageEnAttente + 1
            } else {user.nbMessageEnAttente = 1}
          }
        })
      })
    }

  onOpenModal(user: User): void {
    const modalRef = this._matDialog.open(UserListModalComponent, 
      {enterAnimationDuration:'800ms', 
      exitAnimationDuration:'800ms', 
      data: user
    })
    // après la fermeture, je souscris aux infos de la modale
    modalRef.afterClosed().subscribe((responseFromModal: User) => {
      // console.log(responseFromModal)
      if (responseFromModal) {
        this._userService.setUserCurrent(user)
      }
    })
  }

  onAddFriend(user: any) {
    this._tchatServ.addFriend(user).subscribe((ami: any) => {
      this.newFriends = ami
      if (ami) {
        this.newFriends.push(user)
        console.log('tab amis : ', this.newFriends);
        console.warn(this.newFriends);

      }
    })
  }
  
  onRemoveFriend(user: any) {
    this._tchatServ.removeFriend(user).subscribe((nonAmi: any) => {
      if (nonAmi) {
        this.newFriends.pop(user)
        console.warn(this.newFriends);
        this.isFriend = false
      }
    })
  }
  
}
