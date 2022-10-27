import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finder-modal',
  templateUrl: './finder-modal.component.html',
  styleUrls: ['./finder-modal.component.scss']
})
export class FinderModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
    private _route: Router,
    private _ref: MatDialogRef<FinderModalComponent>
    ) { }

  ngOnInit(): void {
  }

  onValidate() {
    this._ref.close();
    this._route.navigate(['/tchat-room'])
  }

  onClose() {
    this._ref.close();
  }

}
