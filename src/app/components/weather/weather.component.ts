import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WeatherModalComponent } from 'src/app/modals/weather-modal/weather-modal.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  meteo = {
  rue: 'Paul Bert',
  codePostal: 74100,
  ville: 'Annemasse',
  temperature: 20
  }
  // meteo:string[] = [];


  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  newAdress() : void {
    // let modalWeather = 
    this._dialog.open(WeatherModalComponent, {data: this.meteo});
    // modalWeather.afterClosed().subscribe((resultFromModal: string[]) => {
    //   this.meteo = resultFromModal
    // })
  }


}
