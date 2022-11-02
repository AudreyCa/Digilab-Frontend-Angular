import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(
    private _backend: BackendService
    ) { }

  ngOnInit(): void {
    // this._backend.getProfil().subscribe((response:any) => {
    //   console.log(response)  
    // })
  }

}
