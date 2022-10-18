import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WeatherComponent } from 'src/app/components/weather/weather.component';

@Component({
  selector: 'app-weather-modal',
  templateUrl: './weather-modal.component.html',
  styleUrls: ['./weather-modal.component.scss']
})
export class WeatherModalComponent implements OnInit {
  
  weatherForm!: FormGroup;

  constructor( 
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<WeatherModalComponent>, 
    public weatherCompo: WeatherComponent
    ) { }

  ngOnInit(): void {
    this.weatherForm = this._fb.group({
      rue: ['', Validators.required],
      codePostal: [null, Validators.required],
      ville: ['', Validators.required]
    })
  }

  onSubmit() {
    // this._dialog.weatherCompo.dataChange(this.weatherForm.value)
    // .subscribe((responseForm:any) =>
    // this._dialogRef.close(responseForm))
  }

  // getPosition(ville:any):Observable<any>{
  //   return this._http.get(${this.urlGps}?q=${ville})
  // }

}
