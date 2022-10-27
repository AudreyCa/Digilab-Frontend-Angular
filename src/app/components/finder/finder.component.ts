import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, startWith } from 'rxjs';
import { FinderModalComponent } from 'src/app/modals/finder-modal/finder-modal.component';
import { FinderService } from 'src/app/services/finder.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {

  image!:string;
  searchJob = new FormControl('');
  metiers!:any;
  jobs!:any;
  options!: string[];

  constructor(private _finderService: FinderService,
    private _dialog: MatDialog) {
    this.image = "https://picsum.photos/200/200"
   }

  ngOnInit(): void {
    // Pour récupérer, de l'API Pole Emploi, la liste des métiers
    this._finderService.getJobs().subscribe((jobsAPI:any) => { 
      this.jobs = jobsAPI
      this.options = this.sortJobs()
      this.metiers = this.searchJob?.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || ''))
      )
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  sortJobs(): string[] {
// -------------Attention, changer la fin pour aller dans le tableau des métiers
// (attention, c'est un fichier, pas une API)
// attention, c'est pas un tableau !!!
    return this.jobs.map((jobsList:any) => jobsList)
  }

  onOpenModal() {
    this._dialog.open(FinderModalComponent, 
      {enterAnimationDuration:'800ms', 
      exitAnimationDuration:'800ms'})
  }

}
