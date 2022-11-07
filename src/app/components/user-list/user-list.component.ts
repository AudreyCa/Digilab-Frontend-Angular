import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
  newArray!: any[];
  identite!: any;
  profilInfo!: any;
  newFriends: any;
  backgroundCard = "backgroundColor:rgba(233, 231, 231, 0.89)";

  constructor(private _userService: UserService, 
    private _matDialog: MatDialog, 
    public fb: FormBuilder,
    private _backend: BackendService, 
    private _tchatServ: TchatService) {
     }


  ngOnInit(): void {
    // on récupère les données du profil logué (du backend)
    this._backend.getProfileAPI().subscribe((response:any) => {
      console.log(response.body)
      this.profilInfo = response.body
    })


    // on souscris au service user pour recup les users de l'API du backend
    // userId  nous entrer dans le tableau là on l'on souhaite aller
    // newArray pour stocker les users
    this._backend.getUsersList().subscribe((value:any)=>{
      this.userId = value.body;
      this.newArray = [...this.userId]
    }) 



      // on souscris au service user pour récupérer les profils 
      // et ensuite pouvoir les afficher dans le html
      // this._userService.getProfil().subscribe((retour:any) => {
      //   console.warn(retour)
      //   this.identite = retour
      // })
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
      ami = this.newFriends
      if (ami) {
        this.newFriends.push(user)
        this.backgroundCard = "backgroundColor:aqua";
        console.warn(this.newFriends);
      }
    })
  }
  
  onRemoveFriend(user: any) {
    this._tchatServ.removeFriend(user).subscribe((nonAmi: any) => {
      if (nonAmi) {
        this.newFriends.pop(user)
        this.backgroundCard = "backgroundColor:antiquewhite";
        console.warn(this.newFriends);
      }
    })
  }
  
}
