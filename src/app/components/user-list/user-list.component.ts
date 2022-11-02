import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { UserListModalComponent } from 'src/app/modals/user-list-modal/user-list-modal.component';
import { User } from 'src/app/models/user.model';
import { BackendService } from 'src/app/services/backend.service';
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
  avartarImage = 'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM';

  constructor(private _userService: UserService, 
    private _matDialog: MatDialog, 
    public fb: FormBuilder,
    private _backend: BackendService) {
     }


  ngOnInit(): void {
    // on récupère les données du profil logué (du backend)
    this._backend.getProfil().subscribe((response:any) => {
      console.log(response)
      this.profilInfo = response
      
    })


    // on souscris au service user pour recup les users de l'API reqres
    // userId  nous entrer dans le tableau là on l'on souhaite aller
    // newArray pour stocker les users
    this._userService.getUsers().subscribe((value:any)=>{
      this.userId = value.data;
      this.newArray = [...this.userId]
    }) 

    // On fait un valueChanges sur notre formControl puis on souscris à la valeur rentré par l'utilisateur
    this.searchBar.valueChanges.subscribe((resultSearch:any) => {
      console.log(resultSearch)
      console.warn("nouveau tableau", this.newArray)
      // on filtre les noms et prenom pour la searchbar
      this.newArray = this.userId.filter(
        (user:any) => {
       return user.first_name.toLowerCase().includes(resultSearch.toLowerCase()) ||
        user.last_name.toLowerCase().includes(resultSearch.toLowerCase())
      }
      )})

      // on souscris au service user pour récup les profils 
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
      console.log(responseFromModal)
      if (responseFromModal) {
        this._userService.setUserCurrent(user)
      }
    })
  }
  
}
