import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { UserListModalComponent } from 'src/app/modals/user-list-modal/user-list-modal.component';
import { User } from 'src/app/models/user';
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

  constructor(private _userService: UserService, 
    private _matDialog: MatDialog, 
    public fb: FormBuilder) {
     }

  /**
   * La fonction ngOnInit nous permet de récupérer la liste des user via l'API reqres.in qui se est transmis via userService
   */
  ngOnInit(): void {
    this._userService.getUsers().subscribe((value:any)=>{
      this.userId = value.data;
      this.newArray = [...this.userId]
    }) 
    // On fait un valueChanges sur notre formControl puis on souscris à la valeur rentré par l'utilisateur
    this.searchBar.valueChanges.subscribe((resultSearch:any) => {
      console.log(resultSearch)
      console.warn("nouveau tableau", this.newArray);
      this.newArray = this.userId.filter(
        (user:any) => {
        // resultSearch.includes(user.first_name)
       return user.first_name.toLowerCase().includes(resultSearch.toLowerCase()) ||
        user.last_name.toLowerCase().includes(resultSearch.toLowerCase())
      }
      )})
      this._userService.getProfil().subscribe((retour:any) => {
        console.log(retour)
        this.identite = retour
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
      console.log(responseFromModal)
      if (responseFromModal) {
        this._userService.setUserCurrent(user)
      }
    })
  }
  
}
