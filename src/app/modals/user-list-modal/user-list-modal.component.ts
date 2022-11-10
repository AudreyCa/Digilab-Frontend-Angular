import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-list-modal',
  templateUrl: './user-list-modal.component.html',
  styleUrls: ['./user-list-modal.component.scss']
})
export class UserListModalComponent implements OnInit {

  imgDefault = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"

// On récupère les datats envoyé par la modale grâce au décorateur Inject
  constructor(@Inject(MAT_DIALOG_DATA) public dataUser:any, 
  private _dialogRef: MatDialogRef<UserListModalComponent>) {}

  ngOnInit(): void {
    // console.log(this.dataUser);
  }

  onValidate(): void {
    this._dialogRef.close(this.dataUser);
  }

  onCancel(): void {
    this._dialogRef.close();
  }

}
