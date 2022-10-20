import { DialogRef } from '@angular/cdk/dialog';
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


  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  /** Cette méthode nous permet d'ouvrir la modale afin de rentrer une adresse personnalisée
   * Dans .open, on y met l'animation puis les datas que l'on veut.
   * AU .afterClose(), on lui transmet les résultats de la modale dans notre object météo, avec les nouvelles infos.
   * @returns void
   */
  newAdress(): void {

    const modalWeather = this._dialog.open(WeatherModalComponent,{
      enterAnimationDuration:'800ms', 
      exitAnimationDuration:'800ms',
      width: '600px',
      data: {rue: this.meteo.rue, codePostal: this.meteo.codePostal, ville: this.meteo.ville}
    });
    modalWeather.afterClosed().subscribe((resultFromModal: any) => {
      console.log(resultFromModal);
      this.meteo = resultFromModal
    })
  }


}
