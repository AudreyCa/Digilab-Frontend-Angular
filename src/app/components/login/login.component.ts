import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { UserModalComponent } from 'src/app/modals/user-modal/user-modal.component';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userFormConnexion!: FormGroup;


  constructor(private _userService: UserService, 
    private _fb: FormBuilder, 
    private _matDialog: MatDialog,
    private _route: Router) { }

  ngOnInit(): void {

    this.userFormConnexion = this._fb.group({
      mailConnexion:["", Validators.required],
      passwordConnexion:["", Validators.required]
    })

  }


  onSubmit() {
    const formConnexion = this.userFormConnexion.value;
    console.log(formConnexion);
    this._route.navigate(['/overview'])
    // pour afficher les data reçues du serveur dans une modale :
  //   this._userService.postData(formConnexion).subscribe((response:any) => {
  //     console.log(response);
  }

  onRegister() {
    this._route.navigate(['/register'])
  }

}
