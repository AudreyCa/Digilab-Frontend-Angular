import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
    private _route: Router) { }

  ngOnInit(): void {

    this.userFormConnexion = this._fb.group({
      email:["", Validators.required],
      passwordConnexion:["", Validators.required]
    })

  }

  onSubmit() {
    // On récupère les valmeurs du formulaire qu'on log après
    const formConnexion = this.userFormConnexion.value;
    console.log(formConnexion);
    // pour le routing
    this._route.navigate(['/overview'])
    // On récupère le mail du formulaire si dessus
    const mailValue = this.userFormConnexion.value.email
    // On récupère l'avatar de l'API reqres
    this._userService.getUsers().subscribe((value:any) => {
      const avatarUsers = value.data[1].avatar
      // On met le mail et l'avatr dans un objet
      const user = {mail: mailValue, avatar: avatarUsers}
      // On les met dans les crée dans le localStorageé
      localStorage.setItem('user', JSON.stringify(user))
    })
    }

  onRegister() {
    this._route.navigate(['/register'])
  }

}
