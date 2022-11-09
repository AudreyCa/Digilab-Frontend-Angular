import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { FinderModalComponent } from 'src/app/modals/finder-modal/finder-modal.component';
import { UserListModalComponent } from 'src/app/modals/user-list-modal/user-list-modal.component';
import { WeatherModalComponent } from 'src/app/modals/weather-modal/weather-modal.component';
import { DirectoryModalComponent } from 'src/app/modals/directory-modal/directory-modal.component';
import { UserModalComponent } from 'src/app/modals/user-modal/user-modal.component';


@NgModule({
  declarations: [
    UserModalComponent,
    DirectoryModalComponent,
    WeatherModalComponent,
    UserListModalComponent,
    FinderModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatListModule,
    MatGridListModule,
    FormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatBadgeModule
  ],
  exports:[
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatListModule,
    MatGridListModule,
    FormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatBadgeModule,
    UserModalComponent,
    DirectoryModalComponent,
    WeatherModalComponent,
    UserListModalComponent,
    FinderModalComponent
    ]
})

export class SharedModule { }
