import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserListModalComponent } from 'src/app/modals/user-list-modal/user-list-modal.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userId!:any[];
  // firstName!: string;
  // lastName!: string;
  // avatar!: string;

  constructor(private _userService: UserService, 
    private _matDialog: MatDialog) {
     }

  /**
   * Nous permet de récupérer la liste des user via l'API reqres.in qui se est transmis via userService
   */
  ngOnInit(): void {
    this._userService.getUsers().subscribe((value:any)=> 
    this.userId = value.data)
  }

  onOpenModal(user: any): void {
    const modalRef = this._matDialog.open(UserListModalComponent, 
      {enterAnimationDuration:'800ms', 
      exitAnimationDuration:'800ms', 
      data: user
    })
    // après la fermeture, je souscris aux infos de la modale
    modalRef.afterClosed().subscribe((responseFromModal: any) => {
      console.log(responseFromModal)
      if (responseFromModal) {
        this._userService.setUserCurrent(user)
      }
    })
  }
  
}
