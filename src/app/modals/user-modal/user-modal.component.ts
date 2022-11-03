import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {
  
  result:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, 
  private _ref: MatDialogRef<UserModalComponent>,
  private _route: Router) {}

  ngOnInit(): void {
  }

  closeModal() {
    this._ref.close();
    this._route.navigate(['/login'])
  }

}